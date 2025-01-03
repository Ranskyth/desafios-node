import { IHttpResponse } from "../Models/HttpHelperModel"

export const Ok = async (data: any): Promise<IHttpResponse> => {
    return {
    statusCode:200,
    body:data
}
}
export const NoContent = async (): Promise<IHttpResponse> => {
    return {
    statusCode:204,
    body:null
}
}

export const BadRequest = async (): Promise<IHttpResponse> => {
    return {
    statusCode:400,
    body:null
}
}
export const Created = async (data: any): Promise<IHttpResponse> => {
    return {
    statusCode:201,
    body:data
}
}