import { Module } from 'vuex';
import DrawState from './DrawState';
import Person from '@/models/Person';
import PairedPerson from '@/models/PairedPerson';

export const namespace: string = 'Draw';
export const Draw: Module<DrawState, {}> = {
    namespaced: true,
    state: {
        people: [],
        pairedPeople: [],
        isDrawDone: false,
        hasDuplicateNames: false,
        isDrawing: false,
    },
    getters: {
        isDrawing: (state) => state.isDrawing,
        isDrawDone: (state) => state.isDrawDone,
        pairedPeople: (state) => state.pairedPeople,
    },
    mutations: {
        setPeople(state, payload: { peopleNames: string | null }): void {
            state.people = [];
            state.pairedPeople = [];
            state.isDrawDone = false;
            state.hasDuplicateNames = false;
            if (payload.peopleNames) {
                const lines = payload.peopleNames.split('\n');
                let id = 0;
                const nameCounts: { [name: string]: boolean } = {};
                for (const line of lines) {
                    if (line && line.trim() !== '') {
                        state.people.push(new Person(++id, line));
                        if (nameCounts[line]) {
                            state.hasDuplicateNames = true;
                        }
                        nameCounts[line] = true;
                    }
                }
            }
        },
        setResult(state, payload: { pairedPeople: PairedPerson[] }): void {
            state.pairedPeople = payload.pairedPeople.sort((a, b) => a.originPerson.Id - b.originPerson.Id);
            state.isDrawDone = true;
        },
        setDrawing(state, payload: { isDrawing: boolean }): void {
            state.isDrawing = payload.isDrawing;
        },
    },
    actions: {
        setPeopleAndDraw(context, payload: { peopleNames: string | null }): Promise<any> {
            context.commit('setDrawing', { isDrawing: true });
            context.commit('setPeople', payload);
            if (!context.state.hasDuplicateNames) {
                function commitDrawing() { context.commit('setDrawing', { isDrawing: false }); }
                const drawPromise = context.dispatch('doDraw');
                const timePromise = new Promise((resolve) => { setTimeout(resolve, 3000); });
                return Promise.all([drawPromise, timePromise]).then(commitDrawing).catch(commitDrawing);
            } else {
                return Promise.resolve();
            }
        },
        doDraw(context): Promise<any> {
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
                    context.commit('setResult', { pairedPeople: result });
                },
            );
            return stateChangePromise;
        },
    },
};
