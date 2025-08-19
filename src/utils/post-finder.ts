import Post from './post'; 
import PostRepository from './post-repository';

export default class PostFinder {
    constructor(public readonly postRepository: PostRepository) {}

    public async execute(): Promise<Post[]> {
        return this.postRepository.findAll();
    }
}