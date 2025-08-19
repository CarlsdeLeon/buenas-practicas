export default class PostTitle{
    public value: string;

    constructor(value: string){
        this.isValidTitlen(value);
        this.value = value;
    }

    private isValidTitlen(description: string): void {
        if (description.length < 10) {
            throw new Error("Invalid description");
        }
    }
}