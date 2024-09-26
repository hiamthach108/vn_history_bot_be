import { BaseResp } from "../types/resp";

export const RespCode = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  INVALID_PARAMS: 1001,
};

export const RespMessage = {
  SUCCESS: "success",
  BAD_REQUEST: "bad request",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden",
  NOT_FOUND: "not Found",
  INTERNAL_SERVER_ERROR: "internal server error",
  SERVICE_UNAVAILABLE: "service unavailable",
  INVALID_PARAMS: "invalid params",
};

const Ok = (resp: any, message: string = RespMessage.SUCCESS) => {
  return {
    code: RespCode.SUCCESS,
    message,
    ...resp,
  } as BaseResp<any>;
};

const BadRequest = (message: string = RespMessage.BAD_REQUEST) => {
  return {
    code: RespCode.BAD_REQUEST,
    message,
  } as BaseResp<any>;
};

const Unauthorized = (message: string = RespMessage.UNAUTHORIZED) => {
  return {
    code: RespCode.UNAUTHORIZED,
    message,
  };
};

const Forbidden = (message: string = RespMessage.FORBIDDEN) => {
  return {
    code: RespCode.FORBIDDEN,
    message,
  };
};

const NotFound = (message: string = RespMessage.NOT_FOUND) => {
  return {
    code: RespCode.NOT_FOUND,
    message,
  };
};

const InternalServerError = (
  message: string = RespMessage.INTERNAL_SERVER_ERROR,
) => {
  return {
    code: RespCode.INTERNAL_SERVER_ERROR,
    message,
  };
};

const ServiceUnavailable = (
  message: string = RespMessage.SERVICE_UNAVAILABLE,
) => {
  return {
    code: RespCode.SERVICE_UNAVAILABLE,
    message,
  };
};

const InvalidParams = (params: string) => {
  return {
    code: RespCode.INVALID_PARAMS,
    message: `${RespMessage.INVALID_PARAMS}: ${params}`,
    params,
  };
};

const Error = (code: number, message: string) => {
  return {
    code,
    message,
  };
};

const ApiResp = {
  Ok,
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  InternalServerError,
  ServiceUnavailable,
  InvalidParams,
  Error,
};

export default ApiResp;
