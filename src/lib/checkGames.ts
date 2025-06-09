/**
 * @function ApiFetch;
 * @interface /interfaces/mobile-legends.interface
 */

import { ApiFetch } from './api';
import { MobileLegendsParams, MobileLegendsResponse, MobileLegendsConfirm } from '../interfaces/mobile-legends.interface';
import { FreeFireConfirm, FreeFireParams, FreeFireResponse } from '@/interfaces/free-fire-interface';

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
            const { userId: id, zoneId: server } = data?.user as { userId: string, zoneId: string }
            return {
                status: 500,
                message: `500 - [MOBILE-LEGENDS] : No user found with userId as {${id}} or zoneId as {${server}}.`
            }
        }

        const { username, country } = confirmationFields as { username: string, country: string }

        return {
            status: 200,
            message: "200 - [MOBILE-LEGENDS] : Data successfully retrieved ",
            data: {
                username: username,
                country: country
            }
        }
    }
    // 
    static async isFreeFire({ userId }: FreeFireParams): Promise<FreeFireResponse> {

        const data: Record<string, any> = await ApiFetch({
            data: {
                "user.userId": `${userId}`,
                "voucherPricePoint.id": 270282,
                "voucherPricePoint.price": 2000,
                "voucherPricePoint.variablePrice": 0,
                voucherTypeName: "FREEFIRE",
                shopLang: "id_ID"
            }
        })
        const { success, confirmationFields } = data as FreeFireConfirm

        if (!success) {

            const { userId: id } = data?.user as { userId: string }

            return {
                status: 500,
                message: `500 - [FREE-FIRE] : No user found with userId as {${id}}.`
            }
        }
        const { country, roles } = confirmationFields as { country: string, roles: Record<string, any>[] }

        const { role } = roles[0] as { role: string }

        return {
            status: 200,
            message: "200 - [FREE-FIRE] : Data successfully retrieved ",
            data: {
                username: role,
                country: country
            }
        }
    }

}