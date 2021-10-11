import { Component } from "react";
import "./StyleFormCad.css";

export class FormularioCad extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.nota = "";
  }

  _handleMudarTitulo(evento) {
    this.titulo = evento.target.value;
  }
  _handleMudarTexto(evento) {
    this.nota = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault(); //Evita recarregar a página.
    evento.stopPropagation(); //Evita a propagação do evento.
    this.props.criarNota(this.titulo, this.nota);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="box-form">
          <div className="form-cad">
            <h2>Notas</h2>
            <br />
            <form onSubmit={this._criarNota.bind(this)}>
              <input
                className="form-control"
                type="text"
                placeholder="Título"
                onChange={this._handleMudarTitulo.bind(this)}
                //O bind é necessário para que o this possa ser usado.
              />
              <br />
              <textarea
                rows={10}
                className="form-control"
                placeholder="Escreva sua nota"
                onChange={this._handleMudarTexto.bind(this)}
              />
              <br />
              <button type="submit" className="btn create">
                Criar Nota
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
