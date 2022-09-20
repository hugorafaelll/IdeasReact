import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogForm({ open, dialogHandler, todo, editTodo }) {
  const [editText, setEditText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editText);
    dialogHandler();
  };

  return (
    <Dialog open={open} onClose={dialogHandler} fullWidth>
      <DialogTitle>Task Description</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={editText}
          onChange={(e) => setEditText(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={textHandler}>Send</Button>
      </DialogActions>
    </Dialog>
  );
}
