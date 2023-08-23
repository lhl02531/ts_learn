// 类型断言
// 使用场景
// 将一个父类断言为更加具体的子类
// 当 ApiError && HttpError 是接口时，使用如下
// 如果是类，用 instanceof 更合理
interface ApiError extends Error {
  code: number;
}
interface HttpError extends Error {
  statusCode: number;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === "number") {
    return true;
  }
  return false;
}

const err: ApiError = {
  code: 10001,
  name: "",
  message: "",
};
console.log(isApiError(err));
