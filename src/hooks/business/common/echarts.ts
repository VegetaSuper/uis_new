import { computed, effectScope, nextTick, onScopeDispose, shallowRef, watch } from 'vue';
import { useElementSize } from '@vueuse/core';
import * as echarts from 'echarts/core';
import { BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts';
import type {
  BarSeriesOption,
  GaugeSeriesOption,
  LineSeriesOption,
  PictorialBarSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  ScatterSeriesOption
} from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent
} from 'echarts/components';
import type {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useThemeStore } from '@/store/modules/theme';

export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | ScatterSeriesOption
  | PictorialBarSeriesOption
  | RadarSeriesOption
  | GaugeSeriesOption
  | TitleComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | ToolboxComponentOption
  | DatasetComponentOption
>;

echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  PictorialBarChart,
  RadarChart,
  GaugeChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

interface ChartHooks {
  onRender?: (chart: echarts.ECharts) => void | Promise<void>;
  onUpdated?: (chart: echarts.ECharts) => void | Promise<void>;
  onDestroy?: (chart: echarts.ECharts) => void | Promise<void>;
}

/**
 * 使用 echarts
 *
 * @param optionsFactory echarts 选项工厂函数
 * @param darkMode 暗色模式
 */
export function useEcharts<T extends ECOption>(optionsFactory: () => T, hooks: ChartHooks = {}) {
  const scope = effectScope();

  const themeStore = useThemeStore();
  const darkMode = computed(() => themeStore.darkMode);

  const domRef = shallowRef<HTMLElement | null>(null);
  const initialSize = { width: 0, height: 0 };
  const { width, height } = useElementSize(domRef, initialSize);

  const chart = shallowRef<echarts.ECharts | null>(null);
  const chartOptions: T = optionsFactory();

  const {
    onRender = instance => {
      const textColor = darkMode.value ? 'rgb(224, 224, 224)' : 'rgb(31, 31, 31)';
      const maskColor = darkMode.value ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.8)';

      instance.showLoading({
        color: themeStore.themeColor,
        textColor,
        fontSize: 14,
        maskColor
      });
    },
    onUpdated = instance => {
      instance.hideLoading();
    },
    onDestroy
  } = hooks;

  /** 图表是否已渲染 */
  function isRendered() {
    return Boolean(domRef.value && chart.value);
  }

  /**
   * 更新图表选项
   *
   * @param callback 回调函数
   */
  async function updateOptions(callback: (opts: T, optsFactory: () => T) => ECOption = () => chartOptions) {
    const updatedOpts = callback(chartOptions, optionsFactory);

    Object.assign(chartOptions, updatedOpts);

    await nextTick();

    if (!isRendered()) return;

    if (isRendered()) {
      chart.value?.clear();
    }

    chart.value?.setOption({ ...updatedOpts, backgroundColor: 'transparent' });

    await onUpdated?.(chart.value!);
  }

  function setOptions(options: T) {
    chart.value?.setOption(options);
  }

  /** 渲染图表 */
  async function render() {
    if (isRendered()) return;

    const chartTheme = darkMode.value ? 'dark' : 'light';

    chart.value = echarts.init(domRef.value, chartTheme);

    chart.value?.setOption({ ...chartOptions, backgroundColor: 'transparent' });

    await onRender?.(chart.value!);
  }

  /** 调整图表大小 */
  function resize() {
    chart.value?.resize();
  }

  /** 销毁图表 */
  async function destroy() {
    if (!chart.value) return;

    await onDestroy?.(chart.value);
    chart.value?.dispose();
    chart.value = null;
  }

  /** 更改图表主题 */
  async function changeTheme() {
    await destroy();
    await render();
    await onUpdated?.(chart.value!);
  }

  /**
   * 根据尺寸渲染图表
   *
   * @param w 宽度
   * @param h 高度
   */
  async function renderChartBySize(w: number, h: number) {
    initialSize.width = w;
    initialSize.height = h;

    // 调整图表大小
    if (isRendered()) {
      resize();

      return;
    }

    // 渲染图表
    await render();

    if (chart.value) {
      await onUpdated?.(chart.value);
    }
  }

  scope.run(() => {
    watch(
      [width, height],
      ([newWidth, newHeight]) => {
        renderChartBySize(newWidth, newHeight);
      },
      { flush: 'post' }
    );

    watch(darkMode, () => {
      changeTheme();
    });
  });

  onScopeDispose(() => {
    destroy();
    scope.stop();
  });

  return {
    domRef,
    chart,
    updateOptions,
    setOptions
  };
}
