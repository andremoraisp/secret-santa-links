export default class PairedPersonDto {
    public version: number;
    public data: object;

    constructor(version: number, data: object) {
        this.version = version;
        this.data = data;
    }
}
