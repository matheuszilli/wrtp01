import React, { useState } from "react";

const Settings: React.FC = () => {
  const [configuracoes, setConfiguracoes] = useState<{ tema: string }>({ tema: "Claro" });

  return (
    <div className="configuracoes">
      <h1>Configurações</h1>
      <p>Aqui estarão as opções de configurações no futuro.</p>
    </div>
  );
};

export default Settings;