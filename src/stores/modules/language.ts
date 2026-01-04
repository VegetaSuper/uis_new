export const useLanguageStore = defineStore(
  'language',
  () => {
    const currentLanguage: Ref<'zh-cn' | 'en'> = ref('zh-cn')

    const LanguageOptions = ref([
      {
        label: '中文简体',
        value: 'zh-cn',
      },
      {
        label: 'English',
        value: 'en',
      },
    ])

    const setLanguage = (value: 'zh-cn' | 'en') => {
      currentLanguage.value = value
    }

    return {
      currentLanguage,
      LanguageOptions,
      setLanguage,
    }
  },

  {
    persist: {
      storage: localStorage,
      pick: ['currentLanguage'],
    },
  },
)
