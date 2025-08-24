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
            startIcon={props.icon}
            sx={{
                backgroundColor: "#0047aa",
                "&:disabled": {
                    backgroundColor: "#e0e0e0", // Custom disabled background
                    color: "#9e9e9e", // Custom disabled text color
                    pointerEvents: "none", // Disable pointer events
                    "&:hover": {
                        backgroundColor: "#e0e0e0", // Same as disabled background to prevent hover effect
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
            startIcon={props.icon}
            sx={{
                backgroundColor: "grey",
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
            startIcon={props.icon}
            sx={{
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
            startIcon={props.icon}
            sx={{
                backgroundColor: "#00b457",
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
