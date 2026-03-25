import styles from "./Header.module.css";
const Header = () => {
  const header: string = "アンジェロ";
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{header}</h1>
    </header>
  );
};

export default Header;
