import { Module } from 'vuex';
import DrawResultState from './DrawResultState';
import queryString from 'query-string';
import { PairedPersonLinkfier } from '@/util/drawUtil';

export const namespace: string = 'DrawResult';
export const DrawResult: Module<DrawResultState, {}> = {
    namespaced: true,
    state: {
    },
    getters: {
        hasResult: (state) => state.drawResult !== undefined && state.drawResult !== null,
        originPerson : (state) => state.drawResult ? state.drawResult.originPerson : undefined,
        pairedPerson : (state) => state.drawResult ? state.drawResult.pairedPerson : undefined,
    },
    actions: {
        initialize(context): void {
            const queryData = queryString.parse(location.search);
            if ('drawData' in queryData) {
                context.state.drawDataB64 = queryData.drawData as string;
                context.state.drawResult = PairedPersonLinkfier.getData(context.state.drawDataB64);
            }
        },
    },
    mutations: {
        setDrawData(state, payload: { drawData: string }): void {
            state.drawDataB64 = payload.drawData;
        },
    },
};
