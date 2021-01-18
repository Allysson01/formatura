import React from "react";
import Head from "next/head";
import imgLogo from "../images/chapeu.gif";
import imgJs from "../images/javascript-1.jpg";

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
            <div className="bievenidos">
              Superior em Análise e Desenvolvimento de Sistemas
            </div>
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
        <div className="seta-baixo"></div>
      </div>
      <div className="imgJs">
        <img alt="js" id="js"  src={imgJs}/>
      </div>
      <div className="invite">
        Convido você para dividir comigo esse momento muito importante.
      </div>
      <div className="invite">
        Celebrarei na Churrascaria Vitória em Canoas no dia 27/03/21 as 22h30
      </div>
    </>
  );
}
