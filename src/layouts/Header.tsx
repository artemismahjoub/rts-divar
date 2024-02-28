import styles from "./Header.module.css";

import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" alt="دیوار" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" alt="location" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="profile" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
