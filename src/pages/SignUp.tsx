import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="sign-up">
      <h1>Cadastrar</h1>
      <form className="formulario-cadastrar">
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Digite seu nome" />
        </div>

        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Digite seu email" />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Digite sua senha" />
        </div>

        <div className="campo">
          <label htmlFor="confirmar-senha">Confirmar Senha:</label>
          <input type="password" id="confirmar-senha" placeholder="Confirme sua senha" />
        </div>

        <button type="submit" className="botao-cadastrar">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default SignUp;