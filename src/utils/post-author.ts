export default class PostAuthor{
    public value: string;

    constructor(value: string){
        this.isValidAuthor(value);
        this.value = value;
    }

    private isValidAuthor(author: string): void {
        if (author.length < 3) {
            throw new Error("Invalid author");
        }
    }
}