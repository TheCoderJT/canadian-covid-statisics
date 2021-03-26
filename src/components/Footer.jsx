import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import footerStyles from "../styles/footerStyles.js";

const Footer = () => {
  const classes = footerStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.footer__text} variant="p">
          This website uses data from
          <a
            className={classes.footer__anchor}
            href="https://opencovid.ca/"
            target="_blank"
            rel="noreferrer"
          >
            https://opencovid.ca
          </a>
          and used under
          <a
            className={classes.footer__anchor}
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC License
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
