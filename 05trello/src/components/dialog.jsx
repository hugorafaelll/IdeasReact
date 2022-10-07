import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [text, setText] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: " 1em " }}>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ backgroundColor: "#27ae60" }}
      >
        Add New Request
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New To do</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add new Task"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => console.log(text)}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
