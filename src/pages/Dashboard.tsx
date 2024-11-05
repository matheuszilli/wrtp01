import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [relatorios, setRelatorios] = useState<string[]>([]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Aqui estarão os relatórios no futuro.</p>
    </div>
  );
};

export default Dashboard;