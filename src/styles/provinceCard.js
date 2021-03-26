import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "block",
    margin: "5em auto 10em auto",
    height: "600px",
    maxWidth: "800px",
    backgroundColor: theme.palette.background.paper,
  },

  card_provName: {
    fontFamily: "Hind Madurai, sans-serif",
    fontWeight: "bold",
    fontSize: "2.15em",
  },

  card__heading:{
    textAlign: "center"
  },

  card_data: {
    fontSize: "1.75em",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
  },

  card_date: {
    fontSize: "1.5em",
    display: "block",
    textAlign: "center",
  },

  card_date_grid: {
    marginTop:'1em',
  },

  card_dataValues: {
    color: "rgb(255, 71, 71)",
  },

  cardContent: {
    height: "100%",
    padding: "0",
    margin: "0",
  },
  grid_items: {
    height: "100%",
    backgroundColor: "rgba(0,0,1,0.10)",
  },
}));

export default useStyles;
