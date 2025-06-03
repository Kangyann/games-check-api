export interface ValidationParams {
    name: string,
    data: Record<string, string>
}

export interface ValidationResponse {
    status: string | number,
    message: string,
    data?: Record<string, any>
}