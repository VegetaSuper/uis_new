// 此文件由vite-plugin-routes自动生成，仅限meta、redirect属性手动修改
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hideInMenu: true,
      hideInTab: true,
      constant: true,
      layout: 'blank',
    },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'mingcute:home-2-line',
      fixedInTab: true,
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      layout: 'blank',
      hideInMenu: true,
    },
  },
  {
    name: 'personal',
    path: '/personal',
    meta: {
      title: '个人中心',
      icon: 'mingcute:user-2-fill',
      roles: '48',
    },
    children: [
      {
        name: 'personal-approval-task',
        path: 'approval-task',
        component: () => import('@/views/personal/approval-task/index.vue'),
        meta: {
          title: '审批任务',
          roles: '11',
          order: 2,
        },
      },
      {
        name: 'personal-credit-task',
        path: 'credit-task',
        component: () => import('@/views/personal/credit-task/index.vue'),
        meta: {
          title: '信用证任务',
          roles: '83',
          order: 4,
        },
      },
      {
        name: 'personal-meeting-summary',
        path: 'meeting-summary',
        component: () => import('@/views/personal/meeting-summary/index.vue'),
        meta: {
          title: '会议纪要',
          roles: '398',
          order: 6,
        },
      },
      {
        name: 'personal-message-center',
        path: 'message-center',
        component: () => import('@/views/personal/message-center/index.vue'),
        meta: {
          title: '消息中心',
          order: 1,
          roles: '49',
        },
      },
      {
        name: 'personal-opportunity-task',
        path: 'opportunity-task',
        component: () => import('@/views/personal/opportunity-task/index.vue'),
        meta: {
          title: '机会任务',
          roles: '82',
          order: 3,
        },
      },
      {
        name: 'personal-transaction-notes',
        path: 'transaction-notes',
        component: () => import('@/views/personal/transaction-notes/index.vue'),
        meta: {
          title: '交易笔记',
          order: 5,
          roles: '121',
        },
      },
    ],
  },
]
