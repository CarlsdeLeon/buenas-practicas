import { NextRequest, NextResponse } from 'next/server';
import PostgresPostRepository from '@/utils/postgres-post-repository';
import PostRegister from '@/utils/post-register';
import PostFinder from '@/utils/post-finder';
import PostUpdater from '@/utils/post-updater';
import PostRepository from '@/utils/post-repository';
import PostDeleter from '@/utils/post-deleter';

export async function GET(request: NextRequest) {
    try {

        const repository = new PostgresPostRepository();

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
export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const repository = new PostgresPostRepository();
        const register = new PostRegister(repository);
        
    
        await register.run(data.title, data.description, data.author);

        return NextResponse.json({
            message: 'Post created successfully',
        });

    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Failed to create post',
        });
    }
}

export async function PUT(
    request: NextRequest,
    context: { params: { id: string } } 
) {
    try {
        const data = await request.json();
        const repository = new PostgresPostRepository();
        const updater = new PostUpdater(repository);

        await updater.execute(context.params.id, data.title, data.description);
        
        return NextResponse.json({ 
            success: true,
            message: 'Post updated successfully' 
        });
    } catch (error) {
        console.error('Error updating post:', error);
        return NextResponse.json({ 
            error: error instanceof Error ? error.message : 'Failed to update post'
        });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const repository = new PostgresPostRepository();
        const deleter = new PostDeleter(repository);
        
        await deleter.execute(params.id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting post:', error);
        return NextResponse.json({ 
            error: error instanceof Error ? error.message : 'Failed to delete post'
        }, { status: 400 });
    }
}
