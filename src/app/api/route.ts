import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        if (data.title.length < 5 || data.title.length > 50) {
            throw new Error("title must be between 5 and 50 characters long");
        }

        if (!data.description || typeof data.description !== "string") {
            throw new Error("description is required and must be a string");
        }

        
        if (data.author.length < 5 || data.author.length > 30) {
            throw new Error("author must be between 5 and 30 characters long");
        }

        return NextResponse.json({
            message: "validated successfully",
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
