export default class Post {
    constructor(

        public readonly title: string,
        public readonly description: string,
        public readonly author: string

    ) {
        this.validate(title, description, author);
        this.title = title;
        this.description = description;
        this.author = author;
    }
    private validate(title: string, description: string, author: string): void {
        if (title.length < 3) {
            throw new Error("Title must be at least 3 characters long");
        }
        if (description.length < 10) {
            throw new Error("Description must be at least 10 characters long");
        }
        if (author.length < 3) {
            throw new Error("Author must be at least 3 characters long");
        }
    }
}