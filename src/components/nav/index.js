import React from "react";
import { Link } from "gatsby";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <header>
        <Link to="/" className={styles.link}>
          <div className={styles.titleContainer}>
            <h1>
            <span className={styles.celebratingContainer}>
              Celebrating
            </span> Asian merchants at Shopify
            </h1>
          </div>
        </Link>
        <p>Shopify’s Asian Employee Resource Group presents a marketplace to celebrate Asian Pacific American Heritage Month.</p>
      </header>
      <nav className={styles.links}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <span className={styles.separator}>•</span>
        <a
          href="https://airtable.com/shrG3WYY0EFTUjbp5"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Submit your store
        </a>
      </nav>
    </div>
  );
};

export default Nav;
