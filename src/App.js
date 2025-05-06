import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Calculadora from "./pages/calculadora/calculadora";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Cadastro_Tarefas from "./pages/cadastro_tarefas/cadastro_tarefas";

function App() {
  return (
    <>
      <Header nome="Thalles" />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/calculadora" Component={Calculadora} />
          <Route path="/cadastro_tarefas" Component={Cadastro_Tarefas} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
