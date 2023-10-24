import { makeAutoObservable } from "mobx";

export default class OwnerStore {
    private _ownerId: number | null = null;
    constructor() {
        makeAutoObservable(this);
    }
}
