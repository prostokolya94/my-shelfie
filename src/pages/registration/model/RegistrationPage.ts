import { Owner } from "shared/types/Types";
import { AppStore } from "shared/strores/AppStore";
import { NavigateFunction } from "react-router-dom";

export function onRegistrationClick(newOwner: Owner, appStore: AppStore, navigate: NavigateFunction) {
    appStore.registration(newOwner);
    appStore.login(newOwner);
    navigate("/");
}
