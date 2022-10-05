import React from "react";
import { TextField, Button } from "@mui/material";

export default function Form() {
  return (
    <div>
      <TextField id="outlined-basic" label="Required" variant="outlined" />
      <Button variant="text">Send</Button>
    </div>
  );
}
