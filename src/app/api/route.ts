import { NextRequest, NextResponse } from 'next/server';
import PostgresPostRepository from '@/utils/postgres-post-repository';
import PostRegister from '@/utils/post-register';
import PostFinder from '@/utils/post-finder';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const repository = new PostgresPostRepository();

        const register = new PostRegister(repository);

        await register.run(data.title, data.description, data.author)

        const finder = new PostFinder(repository);
        const posts = await finder.execute();

        return NextResponse.json({
            posts
        });

    } catch (error) {
        console.error("error fetching post:", error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "failed to fetch post",
            }
        );
    }
}
