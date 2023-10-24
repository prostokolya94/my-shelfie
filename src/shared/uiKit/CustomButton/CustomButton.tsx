import React, { FC } from "react";
import { CustomUI, CustomUIStyle } from "../UITypes";
import styled from "styled-components";

const CustomButton: FC<CustomUI> = ({
    size = "medium",
    color = "normal",
    onChange = () => {},
    children,
    onClick = () => {}
}) => {
    return <CustomButtonWrapper size={size} color={color} onChange={onChange} children={children} onClick={onClick} />;
};

export default CustomButton;

const CustomButtonWrapper = styled.button<CustomUIStyle>`
    width: auto;
    height: ${({ size }) => (size === "large" ? "35px" : size === "medium" ? "30px" : "30px")};
`;
