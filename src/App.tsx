import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Form from "./pages/Form";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/styles.scss";

export default function App() {
  console.log("App component rendered");
  return (
    <div className="App">
      <header className="cabecalho">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "ativo" : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/sobre"
                className={({ isActive }) => (isActive ? "ativo" : undefined)}
              >
                Sobre
              </NavLink>
              <NavLink
                to="/signin"
                className={({ isActive }) => (isActive ? "ativo" : undefined)}
              >
                Entrar
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "ativo" : undefined)}
              >
                Cadastrar
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "ativo" : undefined)}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) => (isActive ? "ativo" : undefined)}
              >
                Configurações
              </NavLink>
              <NavLink
                to="/form"
                className={({ isActive }) => (isActive ? "ativo" : undefined)}
              >
                Formulário
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/form"
            element={
              <PrivateRoute>
                <Form />
              </PrivateRoute>
            }
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Meu App. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}