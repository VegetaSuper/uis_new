import type { PiniaPluginContext } from 'pinia';
import { jsonClone } from '@sa/utils';
import { SetupStoreId } from '@/enum';

/**
 * 该插件重置使用 setup 语法编写的 store 的状态
 *
 * @param context
 */
export function resetSetupStore(context: PiniaPluginContext) {
  const setupSyntaxIds = Object.values(SetupStoreId) as string[];

  if (setupSyntaxIds.includes(context.store.$id)) {
    const { $state } = context.store;

    const defaultStore = jsonClone($state);

    context.store.$reset = () => {
      context.store.$patch(defaultStore);
    };
  }
}
