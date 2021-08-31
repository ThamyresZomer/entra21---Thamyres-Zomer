import React from "react";

export class ValorAleatorio extends React.Component {
  constructor(props) {
      super(props);

      this.state= {
          valor: 0
      };
  }
 
 handleClick = () => {
    const valorAleatorio = parseInt(Math.randon() * (this.props.max - this.props.min)) + this.props.min;
    this.setState({valor:valorAleatorio});
 }
 
    render() {
      return(
          <>
          <p>{this.state.valor}</p>
            <button>Gerar Valor</button>
          </>
      );
 }
}