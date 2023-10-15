import React from "react";
import { Route, Routes } from "react-router-dom";
import LibraryPage from "pages/library/LibraryPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<LibraryPage />} />
        </Routes>
    );
};

export default AppRouter;
