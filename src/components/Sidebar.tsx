import type React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

const Sidebar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About", path: "/about", icon: "ℹ️" },
    { name: "Contact", path: "/contact", icon: "✉️" },
  ];

  return (
    <aside
      style={{
        width: isOpen ? "200px" : "60px",
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "1rem",
      }}
    >
      {/* トグルボタン */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        {isOpen ? "◀" : "▶"}
      </div>

      {/* メニュー */}
      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            display: "block",
            padding: "0.8rem",
            marginBottom: "0.5rem",
            textDecoration: "none",
            color: "white",
            backgroundColor:
              location.pathname === item.path ? "#34495e" : "transparent",
            borderRadius: "6px",
          }}
        >
          <span style={{ marginRight: isOpen ? "8px" : "0" }}>{item.icon}</span>

          {/* 閉じているときは文字消す */}
          {isOpen && item.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
