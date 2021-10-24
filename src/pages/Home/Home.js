import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import PageTemplate from "../../components/Shared/PageTemplate/PageTemplate";
import animation from "../../lottie/working.json";
import styles from "./styles.module.css";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.background}>
      <PageTemplate>
        <section className={styles.home}>
          <div>
            <div className={styles.titles}>
              <h1 className={styles.homeTitle}>BEM VINDO(A)!</h1>
              <h2 className={styles.homeSubtitle}>SISTEMA INTERNO</h2>
              <h3 className={styles.homeSubtitle}>PINK STORE</h3>
              <p className={styles.homeP}>O que você deseja fazer hoje?</p>
            </div>

            <div className={styles.homeButtons}>
              <Link to="/cliente-cadastro">
                <button className={styles.buttons}>Cadastrar cliente</button>
              </Link>
              <Link to="/produto-cadastro">
                <button className={styles.buttons}>Cadastrar produto</button>
              </Link>
            </div>
          </div>

          <div className={styles.animation}>
            <Lottie options={defaultOptions} width="100%" />
          </div>
        </section>
      </PageTemplate>
    </div>
  );
}
