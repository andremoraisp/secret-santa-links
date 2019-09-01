import Person from './Person';

export default class PairedPerson {
    public originPerson: Person;
    public pairedPerson: Person;

    constructor(originPerson: Person, pairedPerson: Person) {
        this.originPerson = originPerson;
        this.pairedPerson = pairedPerson;
    }
}
