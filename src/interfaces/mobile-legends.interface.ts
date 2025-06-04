/**
 * @interface MobileLegendsParams
 * @property {string} userId
 * @property {string} zoneId
 */
export interface MobileLegendsParams {
    userId: string,
    zoneId: string
}

/**
 * @interface MobileLegendsResponse
 * @property {number} status
 * @property {string} message
 * @property {{ username: string, country: string }} data
 */
export interface MobileLegendsResponse {
    status: number,
    message: string,
    data?: {
        username: string,
        country: string
    }
}

/**
 * @interface MobileLegendsConfirm
 * @property {boolean} success
 * @property {{ username: string, country: string }} confirmationFields
 */
export interface MobileLegendsConfirm {
    success: boolean,
    confirmationFields: {
        username: string,
        country: string
    }
}