import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function SimpleCard({
  name,
  isin,
  secteur,
  stockValue,
  variation,
  opening,
  closing,
  volume,
}) {
  return (
    <Card id="card">
      <CardContent id="card-content">
        <Typography variant="h5" component="h2" id="card-title">
          {name}
        </Typography>
        <Typography variant="h5" component="h3" id="card-value">
          {stockValue} EUR
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          id={
            variation.includes("+")
              ? "card-value-positive"
              : "card-value-negative"
          }
        >
          {variation}
        </Typography>
        <Typography>{isin}</Typography>
        <p style={{ margin: "0", padding: "0" }}>{secteur}</p>
        <Typography id="open-close">
          <Grid container spacing={12}>
            <Grid xs={6}>Opening: {opening} EUR</Grid>
            <Grid xs={6}>Closing: {closing} EUR</Grid>
          </Grid>
          <p style={{ margin: "0", paddingTop: "1em" }}>
            Volumes: <span id="volumes">{volume}</span>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
