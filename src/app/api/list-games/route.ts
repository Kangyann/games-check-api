/** 
 * @type {string[]} - ListGameType
 */

import { ListGamesType } from "@/data/list-games";
import { NextResponse } from "next/server";

/** 
 * @constant
 * @function GET
 * @type {object[]}
 * @returns {Promise<NextResponse>} - JSON
 */

export async function GET(): Promise<NextResponse> {

    const result: { type: string }[] = ListGamesType.map((value) => ({ type: value }))

    return NextResponse.json(
        {
            message: '200 - Data successfully retrieved',
            status: 200,
            data: result
        },
        { status: 200 });
}