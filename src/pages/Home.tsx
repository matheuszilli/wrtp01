import React from "react";
import MeuBotao from "../components/Botao";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Bem-vindo à Home</h1>
      <MeuBotao />
    </div>
  );
};

export default Home;