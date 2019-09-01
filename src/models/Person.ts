export default class Person {
    public Id: number = 0;
    public Name: string = '';

    public constructor(id: number) {
        this.Id = id;
    }

    public updateData(other: Person) {
        this.Name = other.Name;
    }
}
