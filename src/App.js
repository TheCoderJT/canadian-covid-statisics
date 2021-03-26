/* eslint-disable no-use-before-define */
import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import SearchProvs from "./components/SearchProvs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  content_container: {
    height: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Navbar />
        </Grid>
      </Grid>
      <Grid item container justify="center" zeroMinWidth>
        <Grid item xs={12} sm={8}>
          <SearchProvs />
        </Grid>
      </Grid>
      <Grid item container justify="center" zeroMinWidth>
        <Grid item xs={12} sm={8}></Grid>
      </Grid>
    </>
  );
};
export default App;
