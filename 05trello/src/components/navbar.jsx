import * as React from "react";
import { Typography, Toolbar, AppBar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h2"
          align="center"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Silkscreen",
            fontWeight: 600,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Kanbam
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
