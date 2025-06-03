import { ListGamesType } from "@/data/list-games";
import Validation from "@/lib/validation";
import { NextResponse } from "next/server";
import { ValidationResponse } from '../../../interfaces/validation.interface';
export async function POST(request: Request) {
    const params: string | null = new URL(request.url).searchParams.get("type") ?? null
    const isGame: string | undefined = ListGamesType.find((x: string) => x === params) ?? undefined

    const data: Record<string, any> = await request.json()

    if (!params || !isGame) {
        return NextResponse.json(
            { message: "invalid params type." },
            { status: 200 })
    }

    const isValid: ValidationResponse | null = await Validation({ name: isGame, data })

    if (isValid?.status !== 200) {
        return NextResponse.json({
            "status": isValid?.status,
            "message": isValid?.message,
        })
    }

    return NextResponse.json({...isValid})
}