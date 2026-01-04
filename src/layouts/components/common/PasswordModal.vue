<template>
  <NModal v-model:show="show" preset="dialog" positive-text="确定" negative-text="取消" :loading title="修改密码"
    @positive-click="handleSubmit">
    <NAlert v-if="!authStore.user.showResetPassword" :show-icon="false" :bordered="false">
      新用户首次登录需要修改密码
    </NAlert>
    <BasicForm class="pt-4" @register="register">
    </BasicForm>
  </NModal>
</template>

<script setup lang="ts">
import { authPasswordApi } from '@/api/common/auth'
import { useLoading } from '@/hooks/loading'
import { useAuthStore } from '@/stores'
import { BasicForm, useForm } from 'naive-ui-form'
import { md5 } from 'js-md5'

const authStore = useAuthStore()

const show = defineModel<boolean>('show', {
  required: true,
})

const [register, { submit, getFieldValue }] = useForm({
  schemas: [
    {
      field: 'oldPassword',
      label: '旧密码',
      type: 'input',
      required: true,
      requiredMessage: '请输入旧密码',
      requiredTrigger: ['input', 'blur'],
      componentProps: {
        type: 'password',
        "show-password-on": 'click',
        clearable: true,
      }
    },
    {
      field: 'newPassword',
      label: '新密码',
      type: 'input',
      componentProps: {
        type: 'password',
        "show-password-on": 'click',
        clearable: true,
      },
      rules: {
        required: true,
        trigger: ['input', 'blur'],
        validator: (_, value: string) => {
          if (!value) {
            return new Error('请输入新密码')
          }
          if (value === getFieldValue('oldPassword')) {
            return new Error('新旧密码不能重复')
          }
          if (authStore.user?.userRole) {
            const reg = new RegExp(authStore.user?.userRole)
            if (!reg.test(value)) {
              return new Error(authStore.user?.userRoleDetail)
            }
          }
        }
      }
    },
    {
      field: 'confirmPassword',
      label: '确认密码',
      type: 'input',
      componentProps: {
        type: 'password',
        "show-password-on": 'click',
        clearable: true,
      },
      rules: {
        required: true,
        trigger: ['input', 'blur'],
        validator: (_, value: string) => {
          if (!value) {
            return new Error('请再次输入新密码')
          }
          if (value !== getFieldValue('newPassword')) {
            return new Error('两次输入的密码不一致')
          }
          return true
        },
      }
    },
  ],
  showActionBtns: false,
})

const { loading, startLoading, endLoading } = useLoading()

async function handleSubmit() {
  startLoading()
  try {
    const data = (await submit()) as Api.Auth.PasswordParams
    console.log(data);
    const query = {
      oldPassword: md5(data.oldPassword),
      newPassword: md5(data.newPassword),
      id: authStore.user.id as number,
      resetPassword: 1
    }
    await authPasswordApi(query)
    window.$message.success('修改密码成功')
    return true
  } catch (error) {
    return false
  } finally {
    endLoading()
  }
}
</script>

<style scoped></style>
