"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GoSearch } from "react-icons/go";
import { motion, useScroll } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = ({ simple = false, home = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const { scrollYProgress } = useScroll();

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div></div>
      <header className={`${styles.header} ${home ? styles.home : ""}`}>
        <motion.div className={styles.logo} style={{ opacity: home ? scrollYProgress : 1 }}>
          <Link href="/">
            <Image className={styles.mainTitle} src={"/danoneLogo.png"} width={121} height={46} alt="danone logo" />
          </Link>
        </motion.div>
        {simple ? (
          <motion.div className={styles.navTools} style={{ opacity: home ? scrollYProgress : 1 }}>
            <Link href="/onboarding">Sign In</Link>
          </motion.div>
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
              {pathname === "/products" && <p onClick={() => setSearchOpen(!searchOpen)}>Search</p>}
              <Link href="/onboarding">Sign Out</Link>
            </div>
            {searchOpen && <SearchModal />}
          </>
        )}
      </header>
    </>
  );
};

const SearchModal = () => {
  return (
    <form className={styles.searchModal}>
      <input type="text" placeholder="Type to start searching for healthy products" />
      <GoSearch size={25} />
    </form>
  );
};

export default Header;
