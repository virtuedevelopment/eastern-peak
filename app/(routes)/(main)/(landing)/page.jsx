import React from "react";
import styles from "./landing.module.css";
import Link from "next/link";
import configurations from "@/_data/config";

export default function Landing() {
  return (
    <main className={styles.main}>
      <Link href={"/admin/login"}>Admin Login</Link>
      <section className={styles.body}>
        <img src="/assets/logo.svg" alt="eastern peak logo" />
        <p>{configurations.metadata.status}</p>
      </section>
    </main>
  );
}
