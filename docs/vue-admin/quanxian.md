# 权限受控解决方案

以权限控制为主，这里分成三部分来去总结：

1. 权限理论：明确什么是 `RBAC` 权限控制体现
2. 辅助业务：完善 用户、角色、权限 三个页面功能
3. 核心功能：实现 `RBAC` 权限控制系统

## RBAC 权限控制体系

当前的项目中，可以通过：

1. 员工管理为用户指定角色
2. 通过角色列表为角色指定权限
3. 通过权限列表查看当前项目所有权限

那么换句话而言，以上三条就制定了一个用户由：**用户 -> 角色 -> 权限** 的一个分配关系

当通过角色为某一个用户指定到不同的权限之后，那么该用户就会在 **项目中体会到不同权限的功能**

那么这样的一套关系就 **RBAC 权限控制体系**，也就是 **基于 角色的权限 控制 用户的访问**

## 角色列表展示

![图片](../.vuepress/public/images/roleList1.png)

1. 创建 `api/role` 接口文件：

   ```js
   import request from "@/utils/request";

   /**
    * 获取所有角色
    */
   export const roleList = () => {
     return request({
       url: "/role/list",
     });
   };
   ```

2. 在 `views/role-list` 中获取数据, 并展示

```vue
<template>
  <div class="">
    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column
          type="index"
          :label="$t('msg.role.index')"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="title"
          :label="$t('msg.role.name')"
          width="300"
        ></el-table-column>
        <el-table-column
          prop="describe"
          :label="$t('msg.role.desc')"
          width="300"
        ></el-table-column>
        <el-table-column :label="$t('msg.role.action')">
          <el-button type="primary" size="small">
            {{ $t("msg.role.assignPermissions") }}</el-button
          >
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { roleList } from "@/api/role";
import { watchSwitchLang } from "@/utils/i18n";
const allRoles = ref([]); // 角色列表
const getRoleList = async () => {
  const res = await roleList();
  allRoles.value = res;
};
getRoleList();

// 接口国际化处理
watchSwitchLang(getRoleList);
</script>

<style lang="scss" scoped></style>
```

## 权限列表展示

![图片](../.vuepress/public/images/permissionlist1.png)

1. 创建 `api/permission` 文件

   ```js
   import request from "@/utils/request";

   /**
    * 获取所有权限
    */
   export const permissionList = () => {
     return request({
       url: "/permission/list",
     });
   };
   ```

2. 在 `views/permission-list` 获取数据

```vue
<script setup>
import { permissionList } from "@/api/permission";
import { watchSwitchLang } from "@/utils/i18n";
import { ref } from "vue";
/**
 * 权限分级：
 * 1. 一级权限为页面权限
 *  permissionMark 对应 路由名称
 * 
 * 2. 二级权限为功能权限
 *  permissionMark 对应 功能权限表
 */
// 所有权限
const allPermission = ref([]);
const getPermissionList = async () => {
  allPermission.value = await permissionList();
};
getPermissionList();
watchSwitchLang(getPermissionList);
</script>
```

3. 通过 [el-table](https://element-plus.org/zh-CN/component/table.html) 进行数据展示

```vue{8-10}
<template>
  <div class="">
    <el-card>
      <el-table
        border
        style="width: 100%; margin-bottom: 20px"
        :data="allPermission"
        default-expand-all
        row-key="id"
        :tree-props="{ hasChildren: 'hasChildren', children: 'children' }"
      >
        <el-table-column
          :label="$t('msg.permission.name')"
          prop="permissionName"
          width="200"
        ></el-table-column>
        <el-table-column
          :label="$t('msg.permission.mark')"
          prop="permissionMark"
          width="200"
        ></el-table-column>
        <el-table-column
          :label="$t('msg.permission.desc')"
          prop="permissionDesc"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
```
