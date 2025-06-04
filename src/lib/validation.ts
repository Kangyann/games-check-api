/**
 * @class CheckGames
 * @interface /interfaces/validation.interface
 */

import { ValidationParams, ValidationResponse } from '../interfaces/validation.interface';
import CheckGames from './checkGames';

/**
 * @function Validation
 * @param {ValidationParams} params - ID User
 * @returns {Promise<ValidationResponse>}
 */
export default async function Validation({ name, data }: ValidationParams): Promise<ValidationResponse> {

    /**
     * @var name as "mobile-legends"
     */

    if (name === "mobile-legends") {

        /**
         * @constant
         * @returns {object}
         */

        const { userId, zoneId } = data as { userId: string, zoneId: string }

        if (!userId || !zoneId) {
            return {
                status: 404,
                message: "[ MOBILE-LEGENDS ] - invalid parameters {userId} or {zoneId}."
            }
        }

        return await CheckGames.isMobileLegends({ userId, zoneId })
    }

    return {
        status: 404,
        message: "Value of query {type} does not exist. Validation failed."
    }
}