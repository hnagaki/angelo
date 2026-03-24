import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import "./styles/App.css";
import "./styles/global.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <h2>ホーム画面</h2>;
      case "About":
        return <h2>概要ページ</h2>;
      case "Contact":
        return <h2>お問い合わせ</h2>;
      default:
        return null;
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar active={activeTab} setActive={setActiveTab} />
        <main style={{ flex: 1, padding: "2rem" }}>{renderContent()}</main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
