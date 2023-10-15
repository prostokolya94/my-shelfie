import { Owner } from "../types/Types";

export class StorageService {
    public static getAllOwners(): Owner[] {
        const ownersItem = localStorage.getItem("owners");
        if (ownersItem) {
            return JSON.parse(ownersItem);
        } else {
            return [];
        }
    }

    public static getOwnerById(id: number): Owner | null {
        const owners = this.getAllOwners();
        if (owners.length > 0) {
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
            if (owners.length > 0) {
                owner.id = owners[owners.length - 1].id + 1;
            }
            owners.push(owner);
            localStorage.setItem("owners", JSON.stringify(owners));
            return owner;
        } catch (er) {
            console.error(er);
            return false;
        }
    }
}
