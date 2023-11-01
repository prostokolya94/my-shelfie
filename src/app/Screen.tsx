import React, { FC, useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationPage from "../pages/registration/ui/RegistrationPage";
import { EntryWrapper, ExternalWrapper } from "./styled";
import { AppStoreContext } from "./App";
import { observer } from "mobx-react-lite";
import LibraryPage from "../pages/library/LibraryPage";
import { StorageService } from "../shared/services/StorageService";
import CustomButton from "../shared/uiKit/CustomButton/CustomButton";

const Screen: FC = () => {
    const appStore = useContext(AppStoreContext);

    useEffect(() => {
        appStore.owner = StorageService.fetchCurrentOwner();
    }, []);

    useEffect(() => {}, []);
    return (
        <ExternalWrapper>
            <header
                style={{
                    width: "100%",
                    height: "50px",
                    background: "gray",
                    marginBottom: "auto",
                    display: "flex",
                    justifyContent: "end"
                }}
            >
                {appStore.owner !== null && <CustomButton children={"Выйти"} onClick={() => appStore.logout()} />}
            </header>
            <EntryWrapper>
                <Routes>
                    {appStore.owner !== null ? (
                        <>
                            <Route path='/' element={<LibraryPage />} />
                            <Route path='*' element={<Navigate to='/' />} />
                        </>
                    ) : (
                        <>
                            <Route path='/login' element={<div>tutu</div>} />
                            <Route path='/registration' element={<RegistrationPage />} />
                            <Route path='*' element={<Navigate to='/login' />} />
                        </>
                    )}
                </Routes>
            </EntryWrapper>
        </ExternalWrapper>
    );
};

export default observer(Screen);
