import type { NitroFetchOptions, NitroFetchRequest } from "nitropack";

interface ResponseSuccess<T> {
  data: T;
  error: null;
}

interface ResponseError {
  data: null;
  error: { status: number; data: string } | null;
}

type ResponseData<T> = Promise<ResponseSuccess<T> | ResponseError>;

type FetchOptions = NitroFetchOptions<
  NitroFetchRequest,
  | "delete"
  | "get"
  | "put"
  | "head"
  | "patch"
  | "post"
  | "connect"
  | "options"
  | "trace"
>;

async function requestConstructor<T>(
  url: string,
  options: FetchOptions
): ResponseData<T> {
  const config = useRuntimeConfig();
  try {
    const data = (await $fetch<T>(
      `${config.public.apiUrl}${url}`,
      options
    )) as T;
    console.log("data", data);
    return { data, error: null };
  } catch (error) {
    console.log("error", error?.data);
    if (error?.data) {
      return {
        data: null,
        error: {
          status: error.data.statusCode,
          data: error.data.statusMessage,
        },
      };
    }
    return {
      data: null,
      error: null,
    };
  }
}

type RequestConfig = Omit<FetchOptions, "url" | "data" | "baseUrl" | "method">;

async function get<T>(url: string, config: RequestConfig = {}) {
  return requestConstructor<T>(url, { ...config, method: "get" });
}
async function post<T, K>(
  url: string,
  body: Record<string, K>,
  config: RequestConfig = {}
) {
  return requestConstructor<T>(url, {
    ...config,
    body,
    method: "post",
  });
}
async function put<T, K>(
  url: string,
  body: Record<string, K>,
  config: RequestConfig = {}
) {
  return requestConstructor<T>(url, {
    ...config,
    body,
    method: "put",
  });
}
async function remove<T, K>(
  url: string,
  body?: Record<string, K>,
  config: RequestConfig = {}
) {
  return requestConstructor<T>(url, {
    ...config,
    body,
    method: "delete",
  });
}

const fetchData = { get, post, put, delete: remove };
export { fetchData };
