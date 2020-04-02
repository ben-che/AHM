import React from "react";
import { Link } from "gatsby";
import Logo from "../logo";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.links}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/nominate" className={styles.link}>
          List your business
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
