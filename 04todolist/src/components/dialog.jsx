import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({ open, dialogHandler, todo, editTodo }) {
  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText);
    dialogHandler();
  };

  return (
    <Dialog open={open} onClose={dialogHandler} fullWidth>
      <DialogTitle>Task Description</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
      <Button onClick={textHandler}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}