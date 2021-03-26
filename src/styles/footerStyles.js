import { makeStyles } from "@material-ui/core/styles";

const footerStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "rgb(196, 12, 12)",
    position: "fixed",
    left: "0",
    bottom: "0",
    right: "0",
    height: "60px",
    width: "100%",
  },

  toolBar: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
  },

  footer__text: {
    textAlign: "center",
  },

  footer__anchor: {
    color: "rgb(55, 55, 55)",
    cursor: "pointer",
    marginLeft: "0.25em",
    fontStyle: "none",
    textDecoration: "none",
  },
}));

export default footerStyles;
