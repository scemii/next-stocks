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
    <Container maxWidth="lg">
      <Head>
        <title>Stocks App</title>
        <meta property="og:title" content="Stocks App" key="title" />
      </Head>
      <Head>
        <meta
          name="description"
          content="Simple application for stocks market"
          key="description"
        />
      </Head>
      <div>
        <h1 style={{ display: "inline" }}>Stocks App</h1>
        <img
          src="https://files-pierre-1.s3.eu-west-3.amazonaws.com/trading2.svg"
          style={{
            display: "inline",
            width: "50px",
            marginLeft: "1.5em",
            color: "white",
          }}
        />
      </div>
      <Grid id="grid-global" container spacing={3} justify="center">
        {data.map((element) => (
          <Grid item xs="auto" sm={4} key={element.stockName}>
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
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        verticalAlign: "center",
        fontSize: "1.5em",
      }}
    >
      <Head>
        <title>Stocks App</title>
        <meta property="og:title" content="Stocks App" key="title" />
      </Head>
      <Head>
        <meta
          name="description"
          content="Simple application for stocks market"
          key="description"
        />
      </Head>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Loading...
      </div>
    </div>
  );
}
