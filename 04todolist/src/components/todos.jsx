import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import DialogForm from "./dialog";

export default function CheckboxList({ todo, deleteTodo, editTodo }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };


  return (
    <Paper style={{ padding: "0.5em " }}>
      <DialogForm open={openDialog} dialogHandler={dialogHandler} todo={todo} />
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteTodo(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText
            primary={todo.text}
            onClick={() => setOpenDialog(true)}
          />
        </ListItemButton>
      </ListItem>
    </Paper>
  );
}
