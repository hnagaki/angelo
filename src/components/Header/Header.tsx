import styles from "./Header.module.css";
const Header = () => {
  const header: string = "angelo";
  return (
    <header className={styles.header}>
      <img src="./../../../public/favicon.png" alt="logo" />
      <h1 className={styles.h1}>{header}</h1>
    </header>
  );
};

export default Header;
