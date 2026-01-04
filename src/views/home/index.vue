<template>
  <div>
    <!-- 欢迎问候语 -->
    <NCard class="mb-4 from-primary-100 to-primary-50 bg-gradient-to-r dark:from-primary-500 dark:to-primary-200">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <SvgIcon icon="mdi:hand-wave" class="text-4xl text-yellow-500" />
          <div>
            <h2 class="text-xl font-bold">欢迎回来，{{ username || '管理员' }}！</h2>
            <p class="mt-2 text-sm text-gray-600">今天是 {{ currentDate }} {{ getWeekDay() }}，祝您工作愉快！</p>
          </div>
        </div>
      </div>
    </NCard>

    <!-- <NGrid responsive="screen" cols="1 s:2" :x-gap="16" :y-gap="16" class="mt-4">
      <NGridItem class="col-span-24 lg:col-span-16 md:col-span-24">
        <NCard title="访问量趋势" class="h-full">
          <VChart class="h-80 w-full" animate :option="visitOption" autoresize />
        </NCard>
      </NGridItem>

      <NGridItem class="col-span-24 lg:col-span-8 md:col-span-24">
        <NCard title="用户分布" class="h-full">
          <VChart class="h-80 w-full" :option="pieOption" autoresize />
        </NCard>
      </NGridItem>
    </NGrid> -->
  </div>
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import { LineChart, PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, computed, onMounted, watch } from 'vue'

// 导入Naive UI组件
import { NCard, NButton, NGrid, NGridItem, NCheckbox, NModal, NInput } from 'naive-ui'

// 导入用户认证存储
import { useAuthStore } from '@/stores'

// 注册ECharts组件
use([SVGRenderer, LineChart, PieChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent])

// 定义函数返回今天是星期几
function getWeekDay() {
  const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const date = new Date()
  const weekDay = date.getDay()
  return weekDays[weekDay]
}

// 获取用户信息
const authStore = useAuthStore()

const username = computed(() => authStore.user.username)

// 获取当前日期
const currentDate = computed(() => {
  const date = new Date()
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
})

// 访问量趋势图表配置
const visitOption = ref({
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['访问量', '注册量', '活跃度'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '访问量',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#409EFF',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(64, 158, 255, 0.3)',
            },
            {
              offset: 1,
              color: 'rgba(64, 158, 255, 0)',
            },
          ],
        },
      },
    },
    {
      name: '注册量',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149],
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#67C23A',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(103, 194, 58, 0.3)',
            },
            {
              offset: 1,
              color: 'rgba(103, 194, 58, 0)',
            },
          ],
        },
      },
    },
    {
      name: '活跃度',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410, 320, 332, 301, 334, 390],
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#E6A23C',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(230, 162, 60, 0.3)',
            },
            {
              offset: 1,
              color: 'rgba(230, 162, 60, 0)',
            },
          ],
        },
      },
    },
  ],
})

// 用户分布饼图配置
const pieOption = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 'center',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 16,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' },
      ],
    },
  ],
})

onMounted(() => {})
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
}

.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.3s ease;
}

.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
