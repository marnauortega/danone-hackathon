"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

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
          <h1 className={styles.mainTitle}>
            <Image src={"/danoneLogo.png"} width={121} height={46} alt="danone logo" />
          </h1>
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
          <div className={styles.navTools}>
            <p>Search</p>
            <Link href="/onboarding">Sign Out</Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
