import "./App.css";
import "./Components/index.js";
import { ListaNotas } from "./Components/ListaDeNotas/ListaNotas";
import { FormularioCad } from "./Components/FormularioCadastro/FormularioCad";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    }; //Toda vez que é atualizado, o react chamará o Render().
  }
  criarNota(titulo, nota) {
    const novaNota = { titulo, nota };
    const novoArrayNotas = [...this.state.notas, novaNota]; // Os "..." irão impedir que uma nota sobrescreva a outra
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado); //Cria um novo estado e cria a nova nota.
  }
  render() {
    return (
      <div className="app">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <FormularioCad criarNota={this.criarNota.bind(this)} />{" "}
              {/*PROPS , INJEÇÃO DE DEPENDÊNCIAS*/}
            </div>
            <div className="col-sm-6">
              <ListaNotas notas={this.state.notas} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
