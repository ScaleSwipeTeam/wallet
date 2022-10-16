import React, {useEffect, useMemo, useState} from "react";
import type { NextPage } from "next";
import Head from "next/head";
import CreateAccount from "../components/CreateAccount";
import RestoreAccount from "../components/RestoreAccount";
import MakePayment from "../components/MakePayment";
import TerminalStatus from "../components/TerminalStatus";
import styled from "styled-components";
const { io } = require("socket.io-client");
let socket

const Home: NextPage = () => {
  useEffect(() => {

  }, [])

    return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>{process.env.NEXT_PUBLIC_BRAND_NAME} wallet</title>
        <meta name="description" content="Web3 tutorial for Solana crypto wallet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTitle>
        A simple, non-custodial crypto wallet for managing{" "}
        <a href="https://solana.com/">Solana</a> digital assets.
      </HomeTitle>

      <HomeGrid>
        <MakePayment />
        <TerminalStatus />
      </HomeGrid>
    </>
  );
};

const HomeTitle = styled.h1`
  padding: 0 3rem;
  margin: 3rem 1rem;
  line-height: 1.25;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;

  & > a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const HomeGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
`;

export default Home;
