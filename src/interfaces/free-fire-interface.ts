export interface FreeFireParams {
    userId: string
}
export interface FreeFireResponse {
    status: number,
    message: string,
    data?: {
        username: string,
        country: string
    }
}
export interface FreeFireConfirm {
    success: boolean,
    user?: {
        userId: string
    },
    confirmationFields?: {
        userId: string,
        country: string,
        roles: [
            {
                role: string
            }
        ]
    }
}