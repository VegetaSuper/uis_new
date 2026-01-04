import type { TableColumns, FormProps } from 'naive-ui-table'
import { MESSAGE_TYPE_ARRAY, YES_NO_ARRAY } from '@/enums'

export const columns: TableColumns = [
  { title: '消息类型', key: 'type' },
  { title: '主题', key: 'topic' },
  { title: '描述', key: 'detail' },
  { title: '发信人', key: 'sender' },
  { title: '发送时间', key: 'sendingTime' },
  { title: '已读', key: 'haveRead' },
]

// 搜索栏配置
export const search: FormProps = {
  schemas: [
    {
      label: '消息类型',
      field: 'type',
      type: 'select',
      componentProps: {
        options: MESSAGE_TYPE_ARRAY,
        labelField: 'value',
      },
    },
    {
      label: '主题',
      field: 'topic',
      type: 'input',
    },
    {
      label: '描述',
      field: 'detail',
      type: 'input',
    },
    {
      label: '发信人',
      field: 'sender',
      type: 'input',
    },
    {
      label: '发送时间',
      field: 'sendingTime',
      type: 'date-picker',
      componentProps: {
        type: 'daterange',
        clearable: true
      }
    },
    {
      label: '已读',
      field: 'haveRead',
      type: 'select',
      componentProps: {
        options: YES_NO_ARRAY,
        labelField: 'value',
      },
    },
  ],
}
