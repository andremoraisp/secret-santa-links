import { Module } from 'vuex';
import DrawState from './DrawState';
import Person from '@/models/Person';
import PairedPerson from '@/models/PairedPerson';

export const namespace: string = 'Draw';
export const Draw: Module<DrawState, {}> = {
    namespaced: true,
    state: {
        lastIndex: 0,
        people: [],
        pairedPeople: [],
        isListComplete: false,
        isDrawDone: false,
    },
    mutations: {
        addNewPerson(state): void {
            state.people.push(new Person(++state.lastIndex));
        },
        updatePerson(state, payload: Person): void {
            const person = state.people.find((p) => p.Id === payload.Id);
            if (person) {
                person.updateData(payload);
            }
        },
        removePerson(state, payload: Person): number {
            const personIndex = state.people.indexOf(payload);
            if (personIndex > -1) {
                state.people.splice(personIndex, 1);
            }
            return personIndex;
        },
        completeList(state): void {
            state.isListComplete = true;
        },
    },
    actions: {
        startDraw(context): Promise<any> {
            const randomizationPromise = new Promise<PairedPerson[]>((resolve, reject) => {
                const peopleCount = context.state.people.length;
                const ids = context.state.people.map((p) => p.Id);
                const randomized: number[] = [];
                while (ids.length > 0) {
                    const rand = Math.random();
                    if (rand === 1) { continue; }
                    const index = Math.floor((ids.length) * rand);
                    randomized.push(ids[index]);
                    ids.splice(index, 1);
                }
                function mapToPerson(id: number) {
                    return context.state.people.find((p) => p.Id === id) as Person;
                }
                const randomizedPeople = randomized.map(mapToPerson);
                const pairedPeople: PairedPerson[] = [];
                for (let i = 0; i < peopleCount; i++) {
                    pairedPeople.push(new PairedPerson(randomizedPeople[i], randomizedPeople[(i + 1) % peopleCount]));
                }
                resolve(pairedPeople);
            });
            const stateChangePromise = randomizationPromise.then(
                (result) => {
                    context.state.pairedPeople = result;
                    context.state.isDrawDone = true;
                },
            );
            return stateChangePromise;
        },
    },
};
