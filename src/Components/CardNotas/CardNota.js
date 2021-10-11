import React, { Component } from "react";
import "./StyleCardNota.css"

class CardNota extends Component {
  render() {
    return (
      <div className="card-nota">
        <header>
          <h4>{this.props.titulo}</h4>
        </header>
        <small>{this.props.nota}</small>
      </div>

      
    );
  }
}

export default CardNota;
