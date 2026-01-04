<template>
  <div class="relative size-screen overflow-hidden bg-primary-100">
    <NCard class="absolute-center z-1 w-400px" size="large" :bordered="false" round hoverable>
      <div class="flex-center gap-4 text-primary mb-4">
        <img src="@/assets/images/logo.png" class="w-[50px]" alt="Login" />
        <div class="text-3xl">{{ title }}</div>
      </div>
      <BasicForm @register="register">
        <template #remember="{ formValue, field }">
          <NCheckbox v-model:checked="formValue[field]"> 记住密码 </NCheckbox>
        </template>
        <template #cockpit="{ formValue, field }">
          <NCheckbox v-model:checked="formValue[field]"> 进入系统 </NCheckbox>
        </template>
      </BasicForm>
      <NButton type="primary" :loading attr-type="submit" block @click="handleSubmit">登录</NButton>
    </NCard>
    <TopWave />
    <BottomWave />
  </div>
</template>

<script setup lang="ts">
import { BasicForm, useForm } from 'naive-ui-form'
import { md5 } from 'js-md5'
import { useAuthStore } from '@/stores'
import { useLoading } from '@/hooks/loading'
import BottomWave from './components/BottomWave.vue'
import TopWave from './components/TopWave.vue'
import { useLanguageStore } from '@/stores'
import { formSchema } from './page.schema'
import { localStg } from '@/utils/storage'

const title = import.meta.env.VITE_APP_TITLE

const { currentLanguage } = useLanguageStore()

const [register, { submit, setValue }] = useForm({
  schemas: formSchema,
  showActionBtns: false,
  grid: {
    cols: 24,
  },
})

onMounted(() => {
  const loginInfo = localStg.get('loginInfo')

  if (loginInfo) {
    setValue({
      loginName: loginInfo.loginName,
      password: loginInfo.password,
      remember: loginInfo.remember,
      cockpit: true,
      locale: currentLanguage,
    })
  } else {
    setValue({
      loginName: '',
      password: '',
      remember: false,
      cockpit: true,
      locale: currentLanguage,
    })
  }
})

const authStore = useAuthStore()

const { loading, startLoading, endLoading } = useLoading()

const route = useRoute()
const router = useRouter()
const redirect = route.query.redirect ? decodeURIComponent(route.query.redirect as string) : undefined
async function handleSubmit() {
  const times = 7 * 24 * 60 * 60 * 1000

  startLoading()
  try {
    const data = (await submit()) as Api.Auth.LoginParams
    data.userConfigDto = {
      locale: data.locale,
    }
    data.leagueHi = md5(data.password)
    if (data.remember) {
      localStg.set(
        'loginInfo',
        {
          loginName: data.loginName,
          password: data.password,
          remember: true,
        },
        times,
      )
    } else {
      localStg.set(
        'loginInfo',
        {
          loginName: data.loginName,
        },
        times,
      )
    }
    await authStore.authLoginAction(data)
    window.$message.success('登录成功')
    router.replace(redirect || '/')
  } finally {
    endLoading()
  }
}
</script>

<style scoped></style>
