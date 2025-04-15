import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Calculadora from "./pages/calculadora/calculadora";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header nome="Frank" />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/calculadora" Component={Calculadora} />
        </Routes>
      </BrowserRouter>
      {/* <Calculadora /> */}
      <Footer />
    </>
  );
}

export default App;
