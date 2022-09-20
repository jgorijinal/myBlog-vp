# excel 、zip 与前端结合解决方案 - 用户管理页面实现
整个用户相关的模块分为三部分：

1. 员工管理
2. 角色列表
3. 权限列表

现在要来处理的就是 **员工管理** 模块的内容，整个 **员工管理** 模块可以分为以下功能：

1. 用户列表分页展示
2. `excel` 导入用户
3. 用户列表导出为 `excel`
4. 用户详情的表格展示
5. 用户详情表格打印
6. 用户删除
7. 用户角色分配（需要在完成角色列表之后处理）

## 用户列表分页展示
首先我们先来处理最基础的 **用户列表分页展示** 功能，整个功能大体可以分为两步：

1. 获取分页数据
2. 利用 [el-table](https://element-plus.org/zh-CN/component/table.html) 和 [el-pagination](https://element-plus.org/zh-CN/component/pagination.html) 渲染数据

1. 创建 `api/user-manage` 文件，用于定义接口
```js
import request from '@/utils/request'

/**
 * 获取用户列表数据
 */
export const getUserManageList = data => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}
```

2. 在 `user-manage` 中获取对应数据, 渲染 UI 机构 
```vue
<template>
  <div class="user-manage">
    <el-table :data="userManageList" style="width: 100%" border>
      <el-table-column type="index" prop="id" label="#"></el-table-column>
      <el-table-column
        prop="username"
        :label="$t('msg.userInfo.name')"
        width="140"
      >
      </el-table-column>
      <el-table-column
        prop="mobile"
        :label="$t('msg.excel.mobile')"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="avatar"
        :label="$t('msg.excel.avatar')"
        width="140"
        align="center"
      >
        <template #default="scope">
          <el-avatar :src="scope.row.avatar" size="large"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="role" :label="$t('msg.excel.role')" width="180">
        <template #default="scope">
          <el-tag size="small" v-for="item in scope.row.role" :key="item.id">{{
            item.title
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="openTIme"
        :label="$t('msg.excel.openTime')"
        width="140"
      >
        <template #default="scope">
          {{ scope.row.openTime }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('msg.excel.action')" align="center">
        <template #default="scope">
          <el-button size="small" type="primary">查看</el-button>
          <el-button size="small" type="info">角色</el-button>
          <el-button size="small" type="danger" @click="delete scope.row.id"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px"
      v-model:currentPage="page"
      v-model:page-size="size"
      :page-sizes="[2, 5, 10, 20]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getUserManageList } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'
const page = ref(1) // 页码
const size = ref(2) // 每页条数
const total = ref(0) // 总数
const userManageList = ref([]) // 员工列表
const getUserManageListData = async () => {
  const res = await getUserManageList({
    page: page.value,
    size: size.value
  })
  console.log(res)
  total.value = res.total
  userManageList.value = res.list
}
getUserManageListData()

// 监听语言变化
watchSwitchLang(getUserManageListData)

// size 改变触发
const handleSizeChange = (pageSize) => {
  size.value = pageSize
  getUserManageListData()
}
// 页码 改变触发
const handleCurrentChange = (currentPage) => {
  page.value = currentPage
  getUserManageListData()
}
</script>

<style lang="scss" scoped></style>
```

## 全局属性处理 - 时间展示问题
在 `Vue3`中取消了 [过滤器的概念](https://v3.cn.vuejs.org/guide/migration/filters.html)，其中：

1. 局部过滤器被完全删除
2. 全局过滤器虽然被移除，但是可以使用 app.config.globalProperties [全局属性](https://cn.vuejs.org/api/application.html#app-config-globalproperties) 进行替代


1. 时间处理部分我们通过 [Day.js](https://day.js.org/) 进行处理

2. 下载 [Day.js](https://day.js.org/) 

   ```
   npm i dayjs@1.10.6
   ```

   1. 创建 `src/filter` 文件夹，用于定义 [全局属性](https://v3.cn.vuejs.org/api/application-config.html#globalproperties) 

   ```js
   import dayjs from 'dayjs'
   
   const dateFilter = (val, format = 'YYYY-MM-DD') => {
     if (!isNaN(val)) {
       val = parseInt(val)
     }
     return dayjs(val).format(format)
   }
   
   export default app => {
     app.config.globalProperties.$filters = {
       dateFilter
     }
   }
   ```

3. 在 `main.js` 中导入

   ```js
   // filter
   import installFilter from '@/filters'
   
   installFilter(app)
   ```

4. 在 `user-manage` 中使用全局属性处理时间解析

   ```html
   <el-table-column :label="$t('msg.excel.openTime')">
             <template #default="{ row }">
               {{ $filters.dateFilter(row.openTime) }}
             </template>
           </el-table-column>
   ```
## excel 导入 / 导出
### 1) excel 导入原理与实现分析
对于 **excel 导入** 首先我们先来明确一下它的业务流程：

1. 点击  **excel 导入** 按钮进入  **excel 导入页面**
2. 页面提供了两种导入形式
   1. 点击按钮上传 `excel` 
   2. 把 `excel` 拖入指定区域
3. 选中文件，进行两步操作
   1. 解析 `excel` 数据
   2. 上传解析之后的数据
4. 上传成功之后，返回 **员工管理（用户列表）** 页面，进行数据展示

所以根据这个业务可以看出，整个 `excel` 导入核心的原理部分在于 **选中文件之后，上传成功之前** 的操作，即：

1. 解析 `excel` 数据（**最重要**）
2. 上传解析之后的数据


根据上面所说，整个的实现流程也可以很轻松得出：

1. 创建 `excel` 导入页面
2. 点击 `excel` 导入按钮，进入该页面
3. 该页面提供两种文件导入形式
4. 选中文件之后，解析 `excel` 数据（核心）
5. 上传解析之后的数据
6. 返回 员工管理（用户列表） 页面
   
### 2) 提供两种文件导入形式
 `excel` 页面在之前已经创建过了，就是 `views/import/index` 

所以此处，只需要在按钮处完成页面跳转即可，在 `user-manage` 中

```js
<el-button type="primary" @click="onImportExcelClick">
          {{ $t('msg.excel.importExcel') }}</el-button
        >

const router = useRouter()
/**
 * excel 导入点击事件
 */
const onImportExcelClick = () => {
  router.push('/user/import')
}
```

这样就已经完成了前面两步，接下来实现 **提供两种文件导入形式**

1. 创建 `components/UploadExcel` **组件**，用于处理上传 `excel` 相关的问题
2. 在 `user/import.js` 中导入该组件
```vue
<template>
  <div class="">
    <upload></upload>
  </div>
</template>

<script setup>
import { } from 'vue'
import Upload from '@/components/Upload/index.vue'
</script>

<style lang="scss" scoped></style>
```
3. 整个 `UploadExcel` 组件的内容可以分成两部分：
   1. 样式
   2. 逻辑
4. 那么首先先处理样式内容
```vue
<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>
    <input
      ref="excelUploadInput"
      class="excel-upload-input"
      type="file"
      accept=".xlsx, .xls"
      @change="handleChange"
    />
    <!-- https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API -->
    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragover"
    >
      <el-icon><Upload /></el-icon>
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
const excelUploadInput = ref(null)
const handleUpload = () => {}
const handleChange = () => {}
</script>

<style lang="scss" scoped>
.upload-excel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .excel-upload-input {
    display: none;
    z-index: -9999;
  }
  .btn-upload,
  .drop {
    border: 1px dashed #bbb;
    width: 350px;
    height: 160px;
    text-align: center;
    line-height: 160px;
  }
  .drop {
    line-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #bbb;
    ::v-deep .el-icon {
      font-size: 60px;
      display: block;
    }
  }
}
</style>
```
![图片](../.vuepress/public/images/exl1.png)
### 3) 文件选择之后的数据解析处理
接下来处理整个业务中最核心的一块内容 **选中文件之后，解析 `excel` 数据** 

解析的方式根据 *导入形式的不同* 也可以分为两种：

1. 文件选择（选择隐藏域）导入
2. 文件拖拽导入

那么现在，先来处理第一种。

处理之前需要先来做一件事情：

1. 解析 `excel` 数据需要使用 [xlsx](https://www.npmjs.com/package/xlsx) ，所以需要先安装它

   ```
   npm i xlsx@0.17.0
   ```

 [xlsx](https://www.npmjs.com/package/xlsx) 安装完成之后，接下来就可以来去实现对应代码了：
```vue 
<script setup>
import { ref, defineProps } from 'vue'
import XLSX from 'xlsx'
import { getHeaderRow } from './utils'
const loading = ref(false)
const props = defineProps({
  // 上传前回调
  beforeUpload: Function,
  // 成功是回调
  onSuccess: Function
})
const excelUploadInput = ref(null)
const handleUpload = () => {
  excelUploadInput.value.click() // 点击按钮, 打开 input 选择文件入口
}
const handleChange = (e) => {
  // 选择了文件, 出发了 input 的 change 事件
  const files = e.target.files
  const rawFile = files[0] // only use files[0]
  if (!rawFile) return
  upload(rawFile) // 上传
}
const upload = (rawFile) => {
  excelUploadInput.value.value = null
  // 如果没有指定上传前回调
  if (!props.beforeUpload) {
    readerData(rawFile)
    return
  }
  // 如果指定了上传前回调，那么只有返回 true 才会执行后续操作
  const before = props.beforeUpload(rawFile)
  if (before) {
    readerData(rawFile)
  }
}
/**
 * 读取数据（异步）
 */
const readerData = (rawFile) => {
  loading.value = true
  return new Promise((resolve, reject) => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
    const reader = new FileReader()
    // 该事件在读取操作完成时触发
    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/onload
    reader.onload = (e) => {
      // 1. 获取解析到的数据
      const data = e.target.result
      // 2. 利用 XLSX 对数据进行解析
      const workbook = XLSX.read(data, { type: 'array' })
      // 3. 获取第一张表格(工作簿)名称
      const firstSheetName = workbook.SheetNames[0]
      // 4. 只读取 Sheet1（第一张表格）的数据
      const worksheet = workbook.Sheets[firstSheetName]
      // 5. 解析数据表头
      const header = getHeaderRow(worksheet)
      // 6. 解析数据体
      const results = XLSX.utils.sheet_to_json(worksheet)
      // 7. 传入解析之后的数据
      generateData({ header, results })
      // 8. loading 处理
      loading.value = false
      // 9. 异步完成
      resolve()
    }
    // 启动读取指定的 Blob 或 File 内容
    reader.readAsArrayBuffer(rawFile)
  })
}
/**
 * 根据导入内容，生成数据
 */
const generateData = (excelData) => {
  props.onSuccess && props.onSuccess(excelData)
}
</script>
```

getHeaderRow` 为 `xlsx` 解析表头数据的**通用方法**，直接使用即可

Uplaod/utils.js 
```js
import XLSX from 'xlsx'
/**
 * 获取表头（通用方式）
 */
export const getHeaderRow = sheet => {
  const headers = []
  const range = XLSX.utils.decode_range(sheet['!ref'])
  let C
  const R = range.s.r
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
    /* find the cell in the first row */
    let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
    headers.push(hdr)
  }
  return headers
}
```

在 `import` 组件中传入 `onSuccess` 事件，获取解析成功之后的 `excel` 数据
```vue 
<template>
  <upload-excel :onSuccess="onSuccess"></upload-excel>
</template>

<script setup>
import UploadExcel from '@/components/UploadExcel'

/**
 * 数据解析成功之后的回调
 */
const onSuccess = excelData => {
  console.log(excelData)
}
</script>、
```
![图片](../.vuepress/public/images/excel22.png)










