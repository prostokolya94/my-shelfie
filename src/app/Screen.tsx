import React, { FC, useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppStore } from "../shared/strores/AppStore";

const appStore = new AppStore();
const Screen: FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (appStore.owner === null) {
            navigate("/login");
        }
    }, []);
    return (
        <>
            {appStore.owner !== null ? (
                <AppRouter />
            ) : (
                <Routes>
                    <Route path={"/login"} element={<div>tutu</div>} />
                    <Route path={"/registration"} />
                </Routes>
            )}
        </>
    );
};

export default Screen;
