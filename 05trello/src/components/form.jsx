import React from "react";
import { TextField, Button } from "@mui/material";

export default function Form() {
  return (
    <div variante style={{ padding: "1em" }}>
      <div style={{ display: "flex" }}>
        <TextField
          id="outlined-basic"
          label="Required"
          variant="outlined"
          fullWidth
        />
        <Button variant="text">Send</Button>
      </div>
    </div>
  );
}
