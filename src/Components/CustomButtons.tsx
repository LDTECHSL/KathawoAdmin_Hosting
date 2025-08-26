import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
    name: string;
    onClick: () => void;
    disabled: boolean;
    icon?: React.ReactNode;
}

export function PrimaryButton(props: ButtonProps) {
    return (
        <Button
            variant="contained"
            onClick={props.onClick}
            disabled={props.disabled}
            endIcon={props.icon}
            sx={{
                textTransform: "none",
                backgroundColor: "#da6f0cff",
                "& .MuiButton-endIcon": {
                    "& > *:nth-of-type(1)": {
                        fontSize: 16,
                    },
                },
                "&:disabled": {
                    backgroundColor: "#e0e0e0",
                    color: "#9e9e9e",
                    pointerEvents: "none",
                    "&:hover": {
                        backgroundColor: "#e0e0e0",
                    },
                },
            }}
        >
            {props.name}
        </Button>
    );
}

export function SecondaryButton(props: ButtonProps) {
    return (
        <Button
            variant="contained"
            onClick={props.onClick}
            disabled={props.disabled}
            endIcon={props.icon}
            sx={{
                textTransform: "none",
                backgroundColor: "grey",
                "& .MuiButton-endIcon": {
                    "& > *:nth-of-type(1)": {
                        fontSize: 16,
                    },
                },
                "&:disabled": {
                    backgroundColor: "#e0e0e0",
                    color: "#9e9e9e",
                    pointerEvents: "none",
                    "&:hover": {
                        backgroundColor: "#e0e0e0",
                    },
                },
            }}
        >
            {props.name}
        </Button>
    );
}

export function WarningButton(props: ButtonProps) {
    return (
        <Button
            variant="contained"
            color="error"
            onClick={props.onClick}
            disabled={props.disabled}
            endIcon={props.icon}
            sx={{
                textTransform: "none",
                "& .MuiButton-endIcon": {
                    "& > *:nth-of-type(1)": {
                        fontSize: 16,
                    },
                },
                "&:disabled": {
                    backgroundColor: "#e0e0e0",
                    color: "#9e9e9e",
                    pointerEvents: "none",
                    "&:hover": {
                        backgroundColor: "#e0e0e0",
                    },
                },
            }}
        >
            {props.name}
        </Button>
    );
}

export function SuccessButton(props: ButtonProps) {
    return (
        <Button
            variant="contained"
            onClick={props.onClick}
            disabled={props.disabled}
            endIcon={props.icon}
            sx={{
                textTransform: "none",
                backgroundColor: "#00b457",
                "& .MuiButton-endIcon": {
                    "& > *:nth-of-type(1)": {
                        fontSize: 16,
                    },
                },
                "&:disabled": {
                    backgroundColor: "#e0e0e0",
                    color: "#9e9e9e",
                    pointerEvents: "none",
                    "&:hover": {
                        backgroundColor: "#e0e0e0",
                    },
                },
            }}
        >
            {props.name}
        </Button>
    );
}
