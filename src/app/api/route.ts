import { NextRequest, NextResponse } from 'next/server';
import PostgresPostRepository from '@/utils/postgres-post-register';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const repository = new PostgresPostRepository();

        return NextResponse.json({
            message: "saved successfully",
        });

    } catch (error) {
        console.error("error validating post:", error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "failed to validate post",
            }
        );
    }
}
