import React from "react";
import { Switch, Route } from "react-router-dom";
import CadastroCliente from "./pages/CadastroCliente/CadastroCliente";
import User from "./pages/User/User";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import Home from "./pages/Home/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={User} />
      <Route exact path="/cliente-cadastro" component={CadastroCliente} />
      <Route exact path="/produto-cadastro" component={CadastroProduto} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
}
