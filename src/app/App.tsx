import React, { createContext } from "react";
import { observer } from "mobx-react-lite";
import Screen from "./Screen";
import { BrowserRouter } from "react-router-dom";
import { AppStore } from "../shared/strores/AppStore";
import OwnerStore from "../entities/owner/OwnerStore";

const appStore = new AppStore();
const ownerStore = new OwnerStore();
export const AppStoreContext = createContext(appStore);
export const OwnerStoreContext = createContext(ownerStore);
function App() {
    return (
        <BrowserRouter>
            <AppStoreContext.Provider value={appStore}>
                <OwnerStoreContext.Provider value={ownerStore}>
                    <Screen />
                </OwnerStoreContext.Provider>
            </AppStoreContext.Provider>
        </BrowserRouter>
    );
}

export default observer(App);
