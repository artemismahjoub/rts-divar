import styles from "./Footer.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <p>Developed by Artemis with ❤</p>
    </footer>
  );
};

export default Footer;
