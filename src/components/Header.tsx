import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: "#4a90e2",
        color: "white",
        padding: "0.5rem",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.2rem" }}>アンジェロ</h1>
      <nav>
        <a href="#" style={{ color: "white", marginRight: "1rem" }}>
          ホーム
        </a>
        <a href="#" style={{ color: "white" }}>
          お問い合わせ
        </a>
      </nav>
    </header>
  );
};

export default Header;
