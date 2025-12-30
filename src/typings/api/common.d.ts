/**
 * 命名空间 Api
 *
 * 所有后端 API 类型
 */
declare namespace Api {
  namespace Common {
    /** 分页通用参数 */
    interface PaginatingCommonParams {
      /** 当前页码 */
      current: number;
      /** 每页大小 */
      size: number;
      /** 总数 */
      total: number;
    }

    /** 分页查询列表数据的通用参数 */
    interface PaginatingQueryRecord<T = any> extends PaginatingCommonParams {
      records: T[];
    }

    /** 表格通用搜索参数 */
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /**
     * 启用状态
     *
     * - "1": 已启用
     * - "2": 已禁用
     */
    type EnableStatus = '1' | '2';

    /** 通用记录 */
    type CommonRecord<T = any> = {
      /** 记录 ID */
      id: number;
      /** 记录创建者 */
      createBy: string;
      /** 记录创建时间 */
      createTime: string;
      /** 记录更新者 */
      updateBy: string;
      /** 记录更新时间 */
      updateTime: string;
      /** 记录状态 */
      status: EnableStatus | null;
    } & T;
  }
}
