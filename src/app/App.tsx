import React from "react";
import { observer } from "mobx-react-lite";
import Screen from "./Screen";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Screen />
        </BrowserRouter>
    );
}

export default observer(App);
