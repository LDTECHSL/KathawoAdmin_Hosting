import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Dialogboxprops {
  open: boolean;
  title: string;
  content: string;
  agreeButtonText: string;
  disagreeButtonText: string;
  onAgree: () => void;
  onDisagree: () => void;
  onClose: () => void;
}

export default function Dialogbox(props: Dialogboxprops) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ "& .MuiPaper-root": { border: "2px solid black" } }}
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{props.content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { props.onDisagree(); props.onClose();}}
            style={{ color: '#e67e22', backgroundColor: 'white'}}
            >
            {props.disagreeButtonText}
        </Button>
        <Button onClick={() => { props.onAgree(); props.onClose();}} autoFocus
            style={{ color: '#e67e22', backgroundColor: 'white'}}
            >
            {props.agreeButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
