# 中级组件
## 进度条
需求: 实现一下进度条移动动画 

接受的 props :
* 百分比 percentage
* 是否要开启动画 isAnimation , 默认 false
* 想要设置的动画时长(毫秒) time,  默认 3000

```vue
<template>
  <el-progress :percentage="progress" v-bind="$attrs"></el-progress>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  // 百分比
  percentage: {
    type: Number,
    required: true,
  },
  // 是否开启动画
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // 动画时长(毫秒)
  time: {
    type: Number,
    default: 3000,
  },
});

// setInterval 间隔时长
const t = Math.ceil(props.time / props.percentage)
// 判断并设置百分比
const progress = ref(0);

onMounted(() => {
  if (props.isAnimation) { // 开启了动画
    let timer = setInterval(() => {
      progress.value += 1
      if (progress.value >= props.percentage) { 
        progress.value = props.percentage
        clearInterval(timer)  // 删除定时器!!
      }
    },t)
  } else {
    progress.value = props.percentage
  }
})
</script>
```
注意:
* 一定要**清除定时器**
* 可以使用 v-bind="$attrs" 绑定其他 el-progress 的属性

使用此组件
```vue
<template>
  <m-progress :percentage="100" isAnimation status="success"/>
  <br />
  <m-progress :text-inside="true" :stroke-width="26" :percentage="70" isAnimation/>  
  <br />
  <m-progress :percentage="60" isAnimation type="circle"/>
</template>
```
![图片](../.vuepress/public/images/jdt1.png)


## 时间选择
![图片](../.vuepress/public/images/shijian1.png)

需求中的细节:
* 清空了开始时间, 结束时间也要跟着清空
* 如果没有选择开始时间 , 则不能先选择结束时间
* 选择开始时间, 选择结束时间 都要向父组件分发事件并传递选择的值 
  * 开始时间 就传递选择的开始时间值
  * 结束时间 要传递两个值: 一个开始值, 一个结束值 , 也就是他们俩组成的一个对象
* 组件内部要绑定 el-time-picker 的其他属性 
  * v-bind="$attrs.startOptions"
  * v-bind="$attrs.endOptions"
  * 可以通过分别传入对应的配置对象
### 完成时间选择组件的全部功能
直接实现了上面的需求
```vue
<template>
  <div class="choose-time" style="display: flex">
    <div class="start-time">
      <el-time-select
        v-model="startTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="step"
        :end="startTimeEnd"
        clearable
        v-bind="$attrs.startOptions"
      />
    </div>
    <div class="end-time" style="margin-left: 10px">
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="step"
        :end="endTimeEnd"
        clearable
        :disabled="endTImeDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  // 开始的初始化选择
  startTimeStart: {
    type: String,
    default: "08:00",
  },
  // 时间间隔
  step: {
    type: String,
    default: "00:30",
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: "18:30",
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  // 结束时间的初始化选择
  endTimeStart: {
    type: String,
    default: "08:00",
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: "18:30",
  },
});
const emits = defineEmits(["changeStart", "changeEnd"]);
const startTime = ref<string>("");
const endTime = ref<string>("");

// 禁用 结束时间 的选择
const endTImeDisabled = ref<boolean>(false);

watch(
  startTime,
  (val) => {
    if (val === "") {
      endTime.value = "";
      endTImeDisabled.value = true;
    } else {
      endTImeDisabled.value = false;
    }
    if (val !== "") {
      emits("changeStart", {
        start: startTime.value,
      });
    }
  },
  {
    immediate: true,
  }
);

watch(endTime, (val) => {
  if (val !== "") {
    emits("changeEnd", {
      start: startTime.value,
      end: endTime.value,
    });
  }
});
</script>
```

使用该组件 
```vue
<template>
  <div>时间选择器页面</div>
  <choose-time @changeStart="changeStart" @changeEnd="changeEnd"></choose-time>
</template>

<script setup lang="ts">
const changeStart = (res) => {
  console.log(res);
};
const changeEnd = (res) => {
  console.log(res); 
};
</script>
```
![图片](../.vuepress/public/images/shijian2.png)

## 日期选择
需求细节: 
* 开始时间还没有选择, 则结束时间不可以选择
* 接受一个 props ->  disableToday : 选择开始日期  是否**禁用**今天之前的日期(不可选), 默认 false

el-time-picker 的一个属性

![图片](../.vuepress/public/images/disabletoday.png)

接受一个函数,  控制日期是否被禁用

并且如果选择了一个开始日期 , 那么在选择结束日期时**不允许**选择的开始日期之前的日期
* 选择开始时间, 选择结束时间 都要向父组件分发事件并传递选择的值 
  * 开始时间 就传递选择的开始时间值
  * 结束时间 要传递两个值: 一个开始值, 一个结束值 , 也就是他们俩组成的一个对象
* 组件内部要绑定 el-time-picker 的其他属性 
  * v-bind="$attrs.startOptions"
  * v-bind="$attrs.endOptions"
  * 可以通过分别传入对应的配置对象

```vue
<template>
  <div class="choose-date" style="display: flex">
    <div class="start-date">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledFn"
        clearable
        v-bind="$attrs.startOptions"
      />
    </div>
    <div class="end-date" style="margin-left: 10px">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        clearable
        :disabled="endDisabled"
        :disabled-date="endDisabledFn"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  // 是否禁用选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: false,
  },
});
const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);

const emits = defineEmits(["changeStart", "changeEnd"]);
// 禁用选择今天之前日期的函数
const startDisabledFn = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 25;
  } else {
    return false;
  }
};
// 禁用 结束日期中的选择的开始日期 的函数
const endDisabledFn = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24;
  }
};
// 处理 开始 与 结束 间的逻辑
const endDisabled = ref<Boolean>(true); // 禁用 选择结束日期
watch(startDate, (val) => {
  if (val !== null) {
    endDisabled.value = false;
    emits("changeStart", { startDate: startDate.value });
  }
  if (val === null) {
    endDate.value = null;
    endDisabled.value = true;
  }
});

watch(endDate, (val) => {
  if (val !== null) {
    emits("changeEnd", {
      startDate: startDate.value,
      endDate: endDate.value,
    });
  }
});
</script>
```

使用该组件
```vue
<template>
  <div>
    <choose-date
      @changeStart="changeStart"
      @changeEnd="changeEnd"
    ></choose-date>
  </div>
</template>

<script setup lang="ts">
const changeStart = (res) => {
  console.log(res);
};
const changeEnd = (res) => {
  console.log(res);
};
</script>

<template>
  <div>
    <choose-date
      @changeStart="changeStart"
      @changeEnd="changeEnd"
    ></choose-date>
  </div>
</template>

<script setup lang="ts">
const changeStart = (res) => {
  console.log(res);
};
const changeEnd = (res) => {
  console.log(res);
};
</script>
```
![图片](../.vuepress/public/images/selectdate.png)
