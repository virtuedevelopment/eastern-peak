import React from "react";
import styles from "./login.module.css";
import LoginForm from "./LoginForm";
import Link from "next/link";

export default function AdminLogin() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <img src="/assets/logo.svg" alt="logo" />
        <h2>
          Welcome Back<span>.</span>
        </h2>
      </header>
      <LoginForm />
      <Link href={"/"}>Go Back to main site</Link>
    </main>
  );
}
