/**
 * @function ApiFetch;
 * @interface /interfaces/mobile-legends.interface
 */

import { ApiFetch } from './api';
import { MobileLegendsParams, MobileLegendsResponse, MobileLegendsConfirm } from '../interfaces/mobile-legends.interface';

/**
 * @class CheckGames
 */

export default class CheckGames {

    /**
     * @function isMobileLegends
     * @constant
     * @type {Record<string,any> | MobileLegendsConfirm}
     * @param {MobileLegendsParams} params - Parameter Request 
     * @returns {Promise<MobileLegendsResponse>}
     */

    static async isMobileLegends({ userId, zoneId }: MobileLegendsParams): Promise<MobileLegendsResponse> {

        const data: Record<string, any> = await ApiFetch({
            data: {
                "user.userId": `${userId}`,
                "user.zoneId": `${zoneId}`,
                "voucherPricePoint.id": 271318,
                "voucherPricePoint.price": 24254,
                "voucherPricePoint.variablePrice": 0,
                voucherTypeName: "MOBILE_LEGENDS",
                shopLang: "id_ID"
            }
        })

        const { success, confirmationFields } = data as MobileLegendsConfirm

        if (!success) {
            return {
                status: 500,
                message: "500 - [MOBILE-LEGENDS] : No user found with that {userId} or {zoneId}."
            }
        }

        return {
            status: 200,
            message: "200 - [MOBILE-LEGENDS] : Data successfully retrieved ",
            data: {
                username: confirmationFields.username,
                country: confirmationFields.country
            }
        }
    }
    
}