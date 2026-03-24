import React from "react";

type Props = {
  active: string;
  setActive: (tab: string) => void;
};

const Sidebar: React.FC<Props> = ({ active, setActive }) => {
  const tabs = ["Home", "About", "Contact"];

  return (
    <aside
      style={{
        width: "200px",
        backgroundColor: "#2c3e50",
        color: "white",
        height: "100vh",
        padding: "1rem",
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActive(tab)}
          style={{
            padding: "0.8rem",
            marginBottom: "0.5rem",
            cursor: "pointer",
            backgroundColor: active === tab ? "#34495e" : "transparent",
            borderRadius: "6px",
          }}
        >
          {tab}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
