import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <aside
      style={{
        width: "200px",
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "1rem",
      }}
    >
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
          {item.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
