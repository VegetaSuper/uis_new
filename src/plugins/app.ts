import { h } from 'vue';
import type { App } from 'vue';
import { NButton } from 'naive-ui';
import { $t } from '@/locales';

export function setupAppErrorHandle(app: App) {
  app.config.errorHandler = (err, vm, info) => {
    // eslint-disable-next-line no-console
    console.error(err, vm, info);
  };
}

export function setupAppVersionNotification() {
  // 更新检查间隔（毫秒）
  const UPDATE_CHECK_INTERVAL = 3 * 60 * 1000;

  const canAutoUpdateApp = import.meta.env.VITE_AUTOMATICALLY_DETECT_UPDATE === 'Y' && import.meta.env.PROD;
  if (!canAutoUpdateApp) return;

  let isShow = false;
  let updateInterval: ReturnType<typeof setInterval> | undefined;

  const checkForUpdates = async () => {
    if (isShow) return;

    const buildTime = await getHtmlBuildTime();

    // 如果获取构建时间失败或构建时间未改变，则不需要更新
    if (!buildTime || buildTime === BUILD_TIME) {
      return;
    }

    isShow = true;

    // 显示更新通知
    const n = window.$notification?.create({
      title: $t('system.updateTitle'),
      content: $t('system.updateContent'),
      action() {
        return h('div', { style: { display: 'flex', justifyContent: 'end', gap: '12px', width: '325px' } }, [
          h(
            NButton,
            {
              onClick() {
                n?.destroy();
                isShow = false;
              }
            },
            () => $t('system.updateCancel')
          ),
          h(
            NButton,
            {
              type: 'primary',
              onClick() {
                location.reload();
              }
            },
            () => $t('system.updateConfirm')
          )
        ]);
      },
      onClose() {
        isShow = false;
      }
    });
  };

  const startUpdateInterval = () => {
    if (updateInterval) {
      clearInterval(updateInterval);
    }
    updateInterval = setInterval(checkForUpdates, UPDATE_CHECK_INTERVAL);
  };

  // 如果需要检查更新，设置可见性变化监听器并启动更新间隔
  if (!isShow && document.visibilityState === 'visible') {
    // 当文档可见时检查更新
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        checkForUpdates();
        startUpdateInterval();
      }
    });

    // 启动更新间隔
    startUpdateInterval();
  }
}

async function getHtmlBuildTime(): Promise<string | null> {
  const baseUrl = import.meta.env.VITE_BASE_URL || '/';

  try {
    const res = await fetch(`${baseUrl}index.html?time=${Date.now()}`);

    if (!res.ok) {
      return null;
    }

    const html = await res.text();
    const match = html.match(/<meta name="buildTime" content="(.*)">/);
    return match?.[1] || null;
  } catch (error) {
    window.console.error('getHtmlBuildTime error:', error);
    return null;
  }
}
