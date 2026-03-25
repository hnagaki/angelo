import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import InteriaPhotos from "./pages/InteriaPhotos";
import Access from "./pages/Access";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/global.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/interia-photos" element={<InteriaPhotos />} />
            <Route path="/access" element={<Access />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
