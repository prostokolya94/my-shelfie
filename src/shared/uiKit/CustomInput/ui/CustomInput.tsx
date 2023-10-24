import React, { FC } from "react";
import styled from "styled-components";
import { CustomUI, CustomUIStyle } from "../../UITypes";

const CustomInput: FC<CustomUI> = ({ size = "medium", onChange = () => {} }) => {
    return <CustomInputWrapper aria-label={"input"} size={size} onChange={e => onChange(e.target.value)} />;
};

export default CustomInput;

const CustomInputWrapper = styled.input<CustomUIStyle>`
    border-radius: 4px;
    width: ${({ size }) => (size === "large" ? "200px" : size === "medium" ? "175px" : "150px")};
    height: ${({ size }) => (size === "large" ? "35px" : size === "medium" ? "30px" : "30px")};
    border: 1px solid #6ba8ea;

    &:hover {
        border: 1px solid black;
    }
`;
