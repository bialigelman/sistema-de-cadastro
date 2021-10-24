import React, { useState } from "react";
import PageTemplate from "../../components/Shared/PageTemplate/PageTemplate";
import styles from "./styles.module.css";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

export default function CadastroProduto() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  function getName(e) {
    setName(e.target.value);
  }
  function getBrand(e) {
    setBrand(e.target.value);
  }
  function getAmount(e) {
    setAmount(e.target.value);
  }
  function getPrice(e) {
    setPrice(e.target.value);
  }
  function getCategory(e) {
    setCategory(e.target.value);
  }

  function openSnackbar(transition) {
    setTransition(() => transition);
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const product = {
      name: name,
      brand: brand,
      amount: amount,
      price: price,
      category: category,
    };
    console.log(product);
    localStorage.setItem(`${name}`, JSON.stringify(product));
    openSnackbar(TransitionUp)
  }
  return (
    <PageTemplate>
      <section className={styles.section}>
        <h1 className={styles.title}>Cadastro de produtos</h1>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite o nome do produto"
            required
            onChange={getName}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Digite a marca do produto"
            required
            onChange={getBrand}
          />
          <input
            className={styles.input}
            type="number"
            placeholder="Digite a quantidade"
            required
            onChange={getAmount}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Digite o valor"
            required
            onChange={getPrice}
          />
          <select
            name="Categoria"
            className={styles.input}
            required
            onChange={getCategory}
          >
            <option value="" selected disabled hidden>
              Categoria
            </option>
            <option value="Vitaminas">Vitaminas</option>
            <option value="Whey Protein">Whey Protein</option>
            <option value="Hipercalóricos">Hipercalóricos</option>
            <option value="Veganos">Produtos veganos</option>
            <option value="Termogênicos">Termogênicos</option>
            <option value="Acessórios">Acessórios</option>
          </select>
          <input className={styles.submit} type="submit" value="Cadastrar" />
        </form>
        <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Cadastro efetuado com sucesso!"
        autoHideDuration={3000}
      />
      </section>
    </PageTemplate>
  );
}
