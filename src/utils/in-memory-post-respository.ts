
import Post from './post';

export default class InMemoryPostRepository {
    private posts: Array<{
        title: string;
        author: string;
        description: string;
    }> = [];

    constructor(){
        this.posts = [];
    }

    public async save(post: Post): Promise<void>{
        const title = post.title.value
        const author = post.author.value
        const description = post.description.value

        this.posts.push({
            title,
            author,
            description
        });
    }
            
}
