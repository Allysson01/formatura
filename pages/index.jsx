import React from "react";
import Head from "next/head";
import imgLogo from "../images/chapeu.gif";

export default function Index() {
  return (
    <>
      <div className="first">
        <Head>
          <title>Formatura</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
          <main>
            <div className="bievenidos">Superior em Análise e Desenvolvimento de Sistemas</div>
            <div className="container" style={{ padding: "10px" }}>
              <div
                style={{
                  borderBottom: "1px solid #B0C4DE",
                  paddingLeft: "10px",
                }}
              ></div>
            </div>
            <img alt="logo" src={imgLogo} width="50%" />

            <div className="divText">
              <h1>Uhuuuull!! </h1>
              <h1> Formei!</h1>
            </div>
          </main>
        </div>
      </div>
      <div>bla ndaknsdkanasdn
        masdsajdosjkad
        adsisafajifs
      </div>
    </>
  );
}
