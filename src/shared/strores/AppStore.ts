import { makeAutoObservable } from "mobx";
import { Owner } from "../types/Types";
import { StorageService } from "../services/StorageService";

export class AppStore {
    constructor() {
        makeAutoObservable(this);
    }

    private _owner: Owner | null = null;

    registration(newOwner: Owner) {
        StorageService.createNewOwner(newOwner);
    }

    login(owner: Owner) {
        if (StorageService.postCurrentOwner(owner)) {
            this._owner = owner;
        }
    }
    logout() {
        this._owner = null;
    }

    get owner(): Owner | null {
        return this._owner;
    }

    set owner(value: Owner | null) {
        this._owner = value;
    }
}
