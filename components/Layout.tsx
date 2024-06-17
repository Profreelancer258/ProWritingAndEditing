// /sandbox/components/Layout.tsx
import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/">Home</a>
          {/* Add more navigation links as needed */}
        </nav>
      </header>
      <main>{children}</main>
      {/* Footer or other components can be added here */}
    </div>
  );
};

export default Layout;
