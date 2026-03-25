import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
