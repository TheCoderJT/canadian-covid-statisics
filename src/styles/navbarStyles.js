import { makeStyles } from "@material-ui/core/styles";

const navbarStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgb(196, 12, 12)",
  },

  iconbutton: {
    color: "white",
    fontSize: "2.25em",
    margin: "0 .5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },

  toolBar: {
    margin: "0 auto",
  },

  heading: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
}));

export default navbarStyles;
