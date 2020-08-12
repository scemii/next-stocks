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
        <Typography
          variant="body1"
          style={{ margin: "0", padding: "0", fontStyle: "italic" }}
        >
          {secteur}
        </Typography>
        <Typography id="open-close">
          <Grid container spacing={1}>
            <Grid item xs="auto">
              Opening: {opening}€
            </Grid>
            <Grid item xs="auto">
              Closing: {closing}€
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="body1" style={{ margin: "0", paddingTop: "1em" }}>
          Volumes: <span id="volumes">{volume}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
