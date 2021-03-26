import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import React from "react";
import navbarStyles from "../styles/navbarStyles.js";

const Navbar = () => {
  const navBar = navbarStyles();
  return (
    <AppBar className={navBar.appBar} position="static">
      <Toolbar disableGutters className={navBar.toolBar}>
        <IconButton className={navBar.iconbutton}>
          <FaCanadianMapleLeaf />
        </IconButton>
        <Typography variant="h4">Covid Stats For Canadian Provinces</Typography>
        <IconButton className={navBar.iconbutton}>
          <FaCanadianMapleLeaf />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
