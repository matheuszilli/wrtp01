import React, { useState } from "react";

const Form: React.FC = () => {
  const [dados, setDados] = useState<{ nome: string; descricao: string }>({ nome: "", descricao: "" });

  return (
    <div className="formulario">
      <h1>Formulário</h1>
      <p>Aqui estará o formulário de cadastro e edição de dados no futuro.</p>
    </div>
  );
};

export default Form;