import { NextRequest, NextResponse } from 'next/server';
import PostgresPostRepository from '@/utils/postgres-post-repository';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const repository = new PostgresPostRepository();
        await repository.save(data.title, data.description, data.author);

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
