import React from "react";
import { Component } from "react";
import CardNota from "../CardNotas/CardNota";
import "./StyleListaNotas.css";

//ESTENDER A CLASSE COMO UM COMPONENTE PRA SER REUTILIZADA E RENDERIZAR ELEMENTOS
export class ListaNotas extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="lista-notas">
            <ul>
              {this.props.notas.map(
                (nota, index) => {
                  //É IDEAL TER UM INDEX PARA QUE CADA CATEGORIA POSSUA SUA PRÓPRIA KEY, ISSO EVITARA PROBLEMAS NO CONSOLE
                  return (
                    <div className="box-lista">
                    <li key={index}>
                      <h3>{this.nota}</h3>
                      <CardNota titulo={nota.titulo} nota={nota.nota}/>
                    </li>
                    </div>
                  );
                }
              )}
            </ul>
        </div>
      </div>
    );
  }
}
