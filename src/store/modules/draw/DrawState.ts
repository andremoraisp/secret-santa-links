import Person from '@/models/Person';
import PairedPerson from '@/models/PairedPerson';

export default interface DrawState {
    lastIndex: number;
    people: Person[];
    pairedPeople: PairedPerson[];
    isListComplete: boolean;
    isDrawDone: boolean;
}
