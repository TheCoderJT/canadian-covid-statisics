import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import useStyle from "../styles/provinceCard.js";

const ProvinceCard = ({
  provName,
  totalCases,
  activeCases,
  totalDeaths,
  date,
}) => {
  const classes = useStyle();

  return (
    <Card raised className={classes.card}>
      <CardContent elementTypd="div" className={classes.cardContent}>
        <Grid
          className={classes.grid_items}
          direction="column"
          container
          justify="space-around"
          alignItems="center"
        >
          <Grid item className={classes.card__heading}>
            <Typography className={classes.card_provName} variant="p">
              {provName}
            </Typography>
            <Grid item className={classes.card_date_grid}>
              <Typography className={classes.card_date} variant="p">
                Date: {date}
              </Typography>
            </Grid>
          </Grid>
          <Grid item zeroMinWidth>
            <Typography className={classes.card_data} variant="p">
              Total Cases:{" "}
              <span className={classes.card_dataValues}>{totalCases}</span>
            </Typography>
          </Grid>
          <Grid item zeroMinWidth>
            <Typography className={classes.card_data} variant="p">
              Active Cases:{" "}
              <span className={classes.card_dataValues}>{activeCases}</span>
            </Typography>
          </Grid>
          <Grid item zeroMinWidth>
            <Typography className={classes.card_data} variant="p">
              Total Deaths:{" "}
              <span className={classes.card_dataValues}>{totalDeaths}</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProvinceCard;
