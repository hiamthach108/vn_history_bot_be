export type BaseResp<T> = {
  code: number;
  message: string;
} & T;
