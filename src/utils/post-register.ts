import Post from "./post";
import PostgresPostRepository from "./postgres-post-repository";

export default class PostRegister {
    constructor(public readonly repository: PostgresPostRepository) {} 

    public async run(title: string, description: string, author: string): Promise<void> {
        const post = Post.create(title, description, author); 
        await this.repository.save(post);
    }
}