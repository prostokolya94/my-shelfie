import React, { useContext, useState } from "react";
import CustomInput from "shared/uiKit/CustomInput/ui/CustomInput";
import { Typography } from "@mui/material";
import { RegistrationPageWrapper } from "./styled";
import CustomButton from "shared/uiKit/CustomButton/CustomButton";
import { Owner } from "shared/types/Types";
import { onRegistrationClick } from "../model/RegistrationPage";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { AppStoreContext } from "app/App";

const RegistrationPage = () => {
    const appStore = useContext(AppStoreContext);
    const navigate = useNavigate();
    const [newName, setNewName] = useState<string>("");
    const [newSureName, setNewSureName] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const newOwner: Owner = { name: newName, id: 1, sureName: newSureName, password: newPassword, librariesIds: [] };

    return (
        <RegistrationPageWrapper>
            <Typography variant={"h5"}>Регистрация</Typography>
            <div>
                <Typography>Введите имя</Typography>
                <CustomInput onChange={setNewName} />
            </div>
            <div>
                <Typography>Введите фамилию</Typography>
                <CustomInput onChange={setNewSureName} />
            </div>
            <div>
                <Typography>Придумайте пароль</Typography>
                <CustomInput onChange={setNewPassword} />
            </div>
            <CustomButton
                children={"Зарегистрироваться"}
                onClick={() => onRegistrationClick(newOwner, appStore, navigate)}
            />
        </RegistrationPageWrapper>
    );
};

export default observer(RegistrationPage);
