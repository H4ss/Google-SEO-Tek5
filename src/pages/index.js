// src/pages/index.js
import React from "react";
import LatestNews from "../components/latest-news";
import Layout from "../components/layout";
import imgCarpets from "../images/new/elenfaloth-big.png";
import SmallAbout from "../components/small-about";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${imgCarpets})`, // Set the image as background
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the background image
          color: "var(--white)",
          minHeight: "calc(100vh - 80px)", // Subtract the height of the navbar
          padding: "1rem",
        }}
      >
        <Helmet>
          <title>Elenfaloth Fantasy</title>
          <meta
            name="description"
            content="Welcome to Elenfaloth Fantasy. Discover the history of the Al-Nadir family and the Elenfaloth."
          />
        </Helmet>
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "3em",
          }}
        >
          Welcome to Elenfaloth Fantasy
        </h1>
        <p
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "1.5em",
          }}
        >
          Discover the history of the Al-Nadir family and the Elenfaloth.
        </p>
      </div>
      <LatestNews />
      <SmallAbout />
    </Layout>
  );
}
