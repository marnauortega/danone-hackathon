"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css";

const Header = ({ simple = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1 className={styles.mainTitle}>Danone</h1>
        </Link>
      </div>
      {simple ? (
        <Link href="/onboarding">Sign In</Link>
      ) : (
        <>
          <nav className={`${styles.nav} ${menuOpen ? styles.menuOpen : ""}`}>
            <ul className={styles.navUl}>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <div>
            <p>Search</p>
            <Link href="/onboarding">Sign Out</Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
