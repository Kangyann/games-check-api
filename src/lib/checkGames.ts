import { ApiFetch } from './api';
import { MobileLegendsParams, MobileLegendsResponse, MobileLengedsConfirm } from '../interfaces/mobile-legends.interface';

export const CheckGames = {
    async MobileLegends({ userId, zoneId }: MobileLegendsParams): Promise<MobileLegendsResponse> {
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
        const { success, confirmationFields } = data as MobileLengedsConfirm
        if (!success) {
            return {
                status: 500,
                message: "500 - [MOBILE-LEGENDS] : Failed. Re-check again for params {userId} or {zoneId}"
            }
        }
        return {
            status: 200,
            message: "200 - [MOBILE-LEGENDS] : Successfully. ",
            data: {
                username: confirmationFields.username,
                country: confirmationFields.country
            }
        }
    }
}