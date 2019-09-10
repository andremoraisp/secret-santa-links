import Person from '@/models/Person';
import PairedPerson from '@/models/PairedPerson';

export default interface DrawState {
    people: Person[];
    pairedPeople: PairedPerson[];
    isDrawDone: boolean;
    hasDuplicateNames: boolean;
    isDrawing: boolean;
}
