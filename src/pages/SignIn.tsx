import React from "react";

const SignIn: React.FC = () => {
  return (
    <div className="sign-in">
      <h1>Entrar</h1>
      <form className="formulario-entrar">
        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Digite seu email" />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Digite sua senha" />
        </div>

        <button type="submit" className="botao-entrar">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default SignIn;