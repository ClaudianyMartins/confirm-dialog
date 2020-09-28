import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./home.css";

export default class Home extends Component {
  direcionarTelaMenorIdade() {
    this.history.push("/telamenoridade"); // falta  fazer o router
  }
  direcionarTelaMaiorIdade() {
    this.history.push("/telamaioridade"); // falta  fazer o router
  }

  componentDidMount() {
    this.carregarConfirmDialog();
  }

  carregarConfirmDialog = () => {
    confirmAlert({
      title: "Cervejaria da Cintia",
      message: "Você é menor de idade?",
      buttons: [
        {
          label: "Sim",
          onClick: () => this.direcionarTelaMenorIdade()
        },
        {
          label: "Não",
          onClick: () => this.direcionarTelaMaiorIdade()
        }
      ]
    });
  };
  render() {
    return <div className="container"></div>;
  }
}
