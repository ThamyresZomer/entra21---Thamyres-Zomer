import React from "react";

export class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horario: new Date().toLocaleTimeString()
        }
    }
   
   componentDidMount() {
       this.timer = setInterval(() =>{
           this.setState({
               horario: new Date(). toLocaleTimeString()
           })},
           1000);
        }

       componentWillUnmount(){
         clearInterval(this.timer);
       }
   
    render(){
    return <p>{this.state.horario.toLocaleTimeString()}</p>
    }
}