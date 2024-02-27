import styles from "./Loader.module.css";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
