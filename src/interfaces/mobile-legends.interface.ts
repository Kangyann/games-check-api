export interface MobileLegendsParams {
    userId: string | number,
    zoneId: string | number
}
export interface MobileLegendsResponse {
    status: number,
    message: string,
    data?: {
        username: string,
        country: string
    }
}

export interface MobileLengedsConfirm {
    success: boolean,
    confirmationFields: {
        username: string,
        country: string
    }
}