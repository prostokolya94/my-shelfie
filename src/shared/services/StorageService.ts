import { Owner } from "../types/Types";

export class StorageService {
    public static getAllOwners(): Owner[] | null {
        const ownersItem = localStorage.getItem("owners");
        if (ownersItem) {
            return JSON.parse(ownersItem);
        } else {
            return null;
        }
    }

    public static getOwnerById(id: number): Owner | null {
        const owners = this.getAllOwners();
        if (owners) {
            const find = owners.find(el => el.id === id);
            if (find) {
                return find;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public static createNewOwner(owner: Owner): Owner | false {
        try {
            const owners = this.getAllOwners();
            if (owners !== null) {
                owner.id = owners[owners.length - 1].id + 1;
                owners.push(owner);
                localStorage.setItem("owners", JSON.stringify(owners));
            } else {
                localStorage.setItem("owners", JSON.stringify([owner]));
            }
            return owner;
        } catch (er) {
            console.error(er);
            return false;
        }
    }

    public static fetchCurrentOwner(): Owner | null {
        const item = localStorage.getItem("currentOwner");
        if (item) {
            return JSON.parse(item) as Owner;
        } else {
            return null;
        }
    }
    public static postCurrentOwner(owner: Owner): boolean {
        try {
            const owners = this.getAllOwners();
            if (owners && JSON.stringify(owners).includes(JSON.stringify(owner))) {
                localStorage.setItem("currentOwner", JSON.stringify(owner));
                return true;
            }
            return false;
        } catch {
            return false;
        }
    }

    public static clearCurrentOwner(): boolean {
        try {
            localStorage.removeItem("currentOwner");
            return true;
        } catch {
            return false;
        }
    }
}
