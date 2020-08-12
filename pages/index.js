import React, { useEffect, useState } from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import SimpleCard from "../Components/Card";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://stocks-app-fr.herokuapp.com/stocks"
      );
      setData(result.data);
    }
    fetchData();
  }, []);

  setInterval(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://stocks-app-fr.herokuapp.com/stocks"
      );
      setData(result.data);
    }
    fetchData();
  }, 180000);

  return data?.length > 0 ? (
    <Head>
      <Container maxWidth="lg">
        <h1>Stocks App</h1>
        <Grid id="grid-global" container spacing={3} justify="center">
          {data.map((element) => (
            <Grid item xs={12} sm={4}>
              <SimpleCard
                name={element.stockName}
                isin={element.isin}
                secteur={element.secteur}
                stockValue={element.stockValue}
                variation={element.variation}
                opening={element.opening}
                closing={element.closing}
                volume={element.volume}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Head>
  ) : (
    <Head>
      <Container
        maxWidth="lg"
        style={{
          top: "50%",
          left: "50%",
          position: "absolute",
          fontSize: "1.5em",
        }}
      >
        Loading...
      </Container>
    </Head>
  );
}
