import React from "react";

export interface CustomUIStyle {
    size?: "large" | "medium" | "small";
    color?: "success" | "normal" | "error" | "attention";
}
export interface CustomUI extends CustomUIStyle {
    onChange?: (content: any) => void;
    onClick?: () => void;
    children?: React.JSX.Element | string;
}
