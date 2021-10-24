import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../../components/Shared/PageTemplate/PageTemplate";
import styles from "./styles.module.css";

export default function CadastroProduto() {
  return (
    <PageTemplate>
      <section className={styles.section}>
        <h1 className={styles.title}>Conectar-se ao sistema</h1>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Digite o seu e-mail"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Digite a sua senha"
            required
          />
          <Link to="/home">
            <input className={styles.submit} type="submit" value="Entrar" />
          </Link>
        </form>
      </section>
    </PageTemplate>
  );
}
