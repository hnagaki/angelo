import styles from "./Sidebar.module.css";
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
    { name: "Menu", path: "/menu", icon: "ℹ️" },
    { name: "Interia", path: "/interia", icon: "✉️" },
    { name: "Access", path: "/access", icon: "🚙" },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      {/* トグルボタン */}
      <div onClick={() => setIsOpen(!isOpen)} className={styles.toggle}>
        {isOpen ? "◀" : "▶"}
      </div>

      {/* メニュー */}
      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${styles.menu} ${location.pathname === item.path ? styles.active : ""}`}
        >
          <span>{item.icon}</span>

          {/* 閉じているときは文字消す */}
          {isOpen && item.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
