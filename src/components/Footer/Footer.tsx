import styles from "./Footer.module.css";
const Footer = () => {
  const footer: string = "Ristorante-angelo";
  return <footer className={styles.footer}>{footer}</footer>;
};

export default Footer;
