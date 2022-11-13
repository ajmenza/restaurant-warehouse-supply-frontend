import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Body = styled.body``;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
