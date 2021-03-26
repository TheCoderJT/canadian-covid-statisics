import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import React from "react";
import navbarStyles from "../styles/navbarStyles.js";

const Navbar = () => {
  const navBar = navbarStyles();
  return (
    <AppBar className={navBar.appBar} position="static">
      <Toolbar disableGutters className={navBar.toolBar}>
        <FaCanadianMapleLeaf className={navBar.iconbutton} />
        <Typography className={navBar.heading} variant="h4">Covid Stats For Canadian Provinces</Typography>
        <FaCanadianMapleLeaf className={navBar.iconbutton} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
