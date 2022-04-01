
import Axios from "axios";
import qs from "qs";
// import { baseURLDefault, timeoutDefault, contentTypeDefault } from "@/config";
// import accountInit from "@/store/accountInit";
import _get from "lodash.get";
const rootUrl = "";
const apiRootPath = "/api";
export const baseURLDefault = `${rootUrl}${apiRootPath}`;
export const timeoutDefault = 10 * 1000;
export const contentTypeDefault = "application/json"; // 默认值



const haveRequestBody = ["post"];
const instance = Axios.create({
  baseURL: baseURLDefault,
  timeout: timeoutDefault,
  headers: {
    get: {
      "Content-Type": contentTypeDefault,
    },
    post: {
      "Content-Type": contentTypeDefault,
    },
  },
});
// 请求初始化拦截器
const onRequestFulfilled = (config) => {
  // const accessToken = _get(accountInit, "accessToken");
  // if (accessToken) {
  //   config.headers.authentication = accessToken;
  //   config.headers["x-client"] = "mobile";
  //   config.headers["x-client-version"] = "v1";
  // }
  config.headers["x-client"] = "mobile";
  config.headers["x-client-version"] = "v1";
  // console.log("请求初始化拦截器", config);
  return config;
};
// 请求失败拦截器
const onRequestRejected = (error) => {
  // console.error("请求失败拦截器", error);
  const err = {
    code: -1,
    msg: `请求初始化失败-${error.message}`,
    isBussinessError: false,
  };
  return Promise.reject(err);
};
// 响应成功拦截器
const onResponseFulfilled = (response) => {
  // console.log("响应成功拦截器", response);
  const {
    data: { data: res, code, msg = "出错了" },
    // headers,
  } = response;
  if (code === 200) {
    const resData = {
      code,
      msg,
      data: res,
    };
    return resData;
  } else {
    const err = {
      code,
      msg,
      isBussinessError: true,
    };
    return Promise.reject(err);
  }
};
// 响应失败拦截器
const onResponseRejected = (error) => {
  // console.error("响应失败拦截器", { ...error });
  const {
    response: { status: code, statusText: msg },
  } = error;
  const err = {
    code,
    msg,
    isBussinessError: false,
  };
  return Promise.reject(err);
};
instance.interceptors.request.use(onRequestFulfilled, onRequestRejected);
instance.interceptors.response.use(onResponseFulfilled, onResponseRejected);

/**
 * 创建业务请求实例
 * @param {{ url: string; type: "get" | "post" | "postForm" | "postFormData"; arrayFormat?: "indices" | "brackets" | "repeat"; successTip?: boolean; }} apiConfig
 * @param {{ data?: any; params?: any; headers?: {}; timeout?: number; } } requestConfigInit
 * @returns { Promise<any> }
 */
export const createApiInstance = (
  { url, type, arrayFormat = "indices" },
  { data, params, headers, timeout } = {}
) => {
  // console.log(65, data, params, headers, timeout);
  let method;

  if (type === "postForm") {
    method = "post";
    headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    data = qs.stringify(data, {
      arrayFormat,
    });
  } else if (type === "postFormData") {
    method = "post";
    headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    if (data && typeof data === "object") {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }
    data = formData;
  } else {
    method = type;
  }

  const requestParams = {
    data,
    params,
  };
  if (!haveRequestBody.includes(method)) {
    if (data) {
      requestParams.params = data;
      delete requestParams.data;
    }
  }
  return instance({
    url,
    method,
    ...requestParams,
    headers,
    timeout,
  });
};
export default instance;
