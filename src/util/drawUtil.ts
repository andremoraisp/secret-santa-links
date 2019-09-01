import PairedPersonDto from '@/models/PairedPersonDto';
import PairedPerson from '@/models/PairedPerson';
import QueryString from 'query-string';

export const PairedPersonLinkfier = {

    getUrl(pair: PairedPerson): string {
        const base = window.location.protocol + '//' + window.location.host;
        const queryStringObj = { drawData: this.getPairAsB64(pair) };
        const queryString = QueryString.stringify(queryStringObj);
        return `${base}/?${queryString}`;

    },

    getPairAsB64(pair: PairedPerson): string {
        const dto = new PairedPersonDto(1, pair);
        const json = JSON.stringify(dto);
        return btoa(json);
    },

    getData(b64Data: string): PairedPerson {
        const json = atob(b64Data);
        const dto = JSON.parse(json) as PairedPersonDto;
        switch (dto.version) {
            default:
                return dto.data as PairedPerson;
        }
    },

};
