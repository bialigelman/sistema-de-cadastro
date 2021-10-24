import React, { useState } from "react";
import PageTemplate from "../../components/Shared/PageTemplate/PageTemplate";
import styles from "./styles.module.css";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

export default function CadastroCliente() {
  const [name, setName] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  function getName(e) {
    setName(e.target.value);
  }
  function getRg(e) {
    setRg(e.target.value);
  }
  function getCpf(e) {
    setCpf(e.target.value);
  }
  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getAdress(e) {
    setAdress(e.target.value);
  }
  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }
  function openSnackbar(transition) {
    setTransition(() => transition);
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  function handleSubmit(e) {
    e.preventDefault();
    const client = {
      name: name,
      rg: rg,
      cpf: cpf,
      email: email,
      adress: adress,
    };
    localStorage.setItem(`${client.cpf}`, JSON.stringify(client));
    openSnackbar(TransitionUp)
  }
  return (
    <PageTemplate>
      <section className={styles.section}>
        <h1 className={styles.title}>Cadastro de clientes</h1>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite o nome completo"
            required
            onChange={(e) => getName(e)}
          />
          <input
            className={styles.input}
            type="number"
            placeholder="Digite o número do RG"
            required
            onChange={(e) => getRg(e)}
          />
          <input
            className={styles.input}
            type="number"
            placeholder="Digite somente os numeros do cpf"
            required
            onChange={(e) => getCpf(e)}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Digite o e-mail do cliente"
            required
            onChange={(e) => getEmail(e)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Endereço"
            required
            onChange={(e) => getAdress(e)}
          />
          <input
            className={styles.submit}
            type="submit"
            value="Cadastrar"
          />
        </form>
      </section>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Cadastro efetuado com sucesso!"
        autoHideDuration={3000}
      />
    </PageTemplate>
  );
}
