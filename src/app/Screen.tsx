import React, { FC, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import RegistrationPage from "../pages/registration/ui/RegistrationPage";
import { EntryWrapper, ExternalWrapper } from "./styled";
import { AppStoreContext } from "./App";
import { observer } from "mobx-react-lite";
import LibraryPage from "../pages/library/LibraryPage";
import { StorageService } from "../shared/services/StorageService";

const Screen: FC = () => {
    const appStore = useContext(AppStoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        appStore.owner = StorageService.fetchCurrentOwner();
    }, []);

    useEffect(() => {
        if (appStore.owner === null) {
            navigate("/registration");
        }
    }, [appStore.owner]);

    return (
        <ExternalWrapper>
            <EntryWrapper>
                {appStore.owner !== null ? (
                    <Routes>
                        <Route path={"/"} element={<LibraryPage />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path={"/login"} element={<div>tutu</div>} />
                        <Route path={"/registration"} element={<RegistrationPage />} />
                    </Routes>
                )}
            </EntryWrapper>
        </ExternalWrapper>
    );
};

export default observer(Screen);
