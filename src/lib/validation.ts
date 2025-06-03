import { CheckGames } from "./checkGames";
import { ValidationParams } from '../interfaces/validation.interface';

export default async function Validation({ name, data }: ValidationParams) {
    if (name === "mobile-legends") {
        const { userId, zoneId } = data as { userId: string, zoneId: string }
        
        if (!userId || !zoneId) {
            return {
                status: 404,
                message: "[ MOBILE-LEGENDS ] - invalid parameters {userId} or {zoneId}."
            }
        }
        return await CheckGames.MobileLegends({ userId, zoneId })
    }
    return null
}