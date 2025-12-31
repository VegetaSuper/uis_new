<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import { useAuthStore } from '@/store/modules/auth';
import { useFormRules, useNaiveForm } from '@/hooks/business/common/form';
import { localStg } from '@/utils/storage';
import { $t } from '@/locales';

defineOptions({
  name: 'PwdLogin'
});

const authStore = useAuthStore();
const { formRef, validate } = useNaiveForm();

const model: Form.Auth.Model = reactive({
  userName: '',
  password: '',
  remember: false,
  cockpit: true
});

const rules = computed<Partial<Record<keyof Form.Auth.Model, App.Global.FormRule[]>>>(() => {
  // 在 computed 中定义以使 locale 具有响应性，如果不使用 i18n，可以不使用 computed
  const { formRules } = useFormRules();

  return {
    userName: formRules.userName,
    password: formRules.pwd
  };
});

onMounted(() => {
  const loginInfo = localStg.get('loginInfo');
  if (loginInfo) {
    Object.assign(model, loginInfo);
  }
});

async function handleSubmit() {
  await validate();
  await authStore.login(model);
}
</script>

<template>
  <NForm ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <NFormItem path="userName">
      <NInput v-model:value="model.userName" :placeholder="$t('page.login.common.userNamePlaceholder')" />
    </NFormItem>
    <NFormItem path="password">
      <NInput
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </NFormItem>
    <NSpace vertical :size="24">
      <div class="flex-y-center gap-10px">
        <NCheckbox v-model:checked="model.remember">{{ $t('page.login.pwdLogin.remember') }}</NCheckbox>
        <NCheckbox v-model:checked="model.cockpit">{{ $t('page.login.pwdLogin.cockpit') }}</NCheckbox>
      </div>
      <NButton type="primary" size="large" block :loading="authStore.loginLoading" @click="handleSubmit">
        {{ $t('common.login') }}
      </NButton>
    </NSpace>
  </NForm>
</template>

<style scoped></style>
