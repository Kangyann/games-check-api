import { ListGamesType } from "@/data/list-games";
import Validation from "@/lib/validation";
import { NextResponse } from "next/server";
import { ValidationResponse } from '../../../interfaces/validation.interface';
export async function POST(request: Request) {
    const params: string | null = new URL(request.url).searchParams.get("type") ?? null


    if (!params) {
        return NextResponse.json(
            {
                message: '400 - Missing {type} query.',
                status: 400
            },
            { status: 400 })
    }
    
    const data: Record<string, any> = await request.json()
    const type: string | undefined = ListGamesType.find((x: string) => x === params) ?? undefined

    if (!type) {
        return NextResponse.json(
            {
                message: '400 - Query {type} does not exist.',
                status: 400,
                ref: 'Fetch [GET] : /api/list-game for available types',
            },
            { status: 400 }
        )
    }
    const isValid: ValidationResponse | null = await Validation({ name: type, data })

    if (isValid?.status !== 200) {
        return NextResponse.json({
            "status": isValid?.status,
            "message": isValid?.message,
        })
    }

    return NextResponse.json({ ...isValid })
}