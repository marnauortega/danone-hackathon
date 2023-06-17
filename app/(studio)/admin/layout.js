import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
