import { type FormSchema } from 'naive-ui-form'
import { useLanguageStore } from '@/stores'

const { LanguageOptions, setLanguage } = useLanguageStore()

export const formSchema: FormSchema[] = [
  {
    field: 'loginName',
    type: 'input',
    span: 24,
    required: true,
    requiredMessage: '请输入账号',
    requiredTrigger: ['input', 'blur'],
    componentProps: {
      type: 'text',
      placeholder: '账号',
      clearable: true,
    },
  },
  {
    field: 'password',
    span: 24,
    type: 'input',
    required: true,
    requiredMessage: '请输入密码',
    requiredTrigger: ['input', 'blur'],
    componentProps: {
      type: 'password',
      "show-password-on": 'click',
      clearable: true,
    }
  },
  {
    field: 'locale',
    span: 24,
    type: 'select',
    required: true,
    requiredMessage: '请输入密码',
    requiredTrigger: ['input', 'blur'],
    componentProps: {
      options: LanguageOptions,
      onUpdateValue: setLanguage,
    },
  },
  {
    field: 'remember',
    slot: 'remember',
    type: 'slot',
    span: 12,
  },
  {
    field: 'cockpit',
    slot: 'cockpit',
    type: 'slot',
    span: 12,
  },
]
