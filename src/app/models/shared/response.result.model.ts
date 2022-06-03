export interface ResponseResult<T> {
    success: boolean;
    warning: boolean;
    message: string;
    data: T;
}