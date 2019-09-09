export default class Person {
    public Id: number = 0;
    public Name: string = '';

    public constructor(id: number, name?: string) {
        this.Id = id;
        this.Name = name ? name : '';
    }

    public updateData(other: Person) {
        this.Name = other.Name;
    }
}
