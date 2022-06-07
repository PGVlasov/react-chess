import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavMenu } from "./components/NavMenu";
import { AboutPage } from "./pages/AboutPage";
import { BoardPage } from "./pages/BoardPage";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="app">
        <Routes>
          <Route path="/" element={<BoardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
