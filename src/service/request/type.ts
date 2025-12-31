export interface RequestInstanceState {
  /** the promise of refreshing token */
  refreshTokenPromise: Promise<boolean> | null;
  /** the request error message stack */
  errMsgStack: string[];
  /** default timeout */
  timeout: number;
  /** whether to encrypt the request data */
  isEncrypt: boolean;
  [key: string]: unknown;
}
