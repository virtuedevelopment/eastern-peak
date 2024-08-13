"use client";
import React from "react";
import styles from "./dashboard.module.css";
import Link from "next/link";
import { Bell, ChartPie } from "lucide-react";
import { UseUser } from "@/app/components/AdminComponents/UserContext";

import DashboardCards from "@/app/components/AdminComponents/Cards/DashboardCards";

const dash_info = [
  {
    title: "Networth",
    amount: 50000,
    trend: { direction: "up", percent: 3.36 },
  },
  {
    title: "Expenses /month ",
    amount: 1400.65,
    trend: { direction: "down", percent: 1.75 },
  },
  {
    title: "Cash flow /month",
    amount: 7300.77,
    trend: { direction: "up", percent: 7.0 },
  },
];

export default function AdminDashboard() {
  const { profile } = UseUser();
  return (
    <main className={styles.main}>
      <header className={styles.welcome}>
        <div>
          <h2>
            Welcome{" "}
            <span>{profile && profile.personal_information.firstName}</span>.
          </h2>
          <small>{profile && profile.personal_information.title}</small>
        </div>

        <div className={styles.options}>
          <Link className={styles.notifications} href={"/"}>
            <Bell />
          </Link>

          <Link className="button2" href={"/admin/profile"}>
            Profile
          </Link>
        </div>
      </header>

      <section className={styles.primary_statistics}>
        {dash_info.map((info, index) => (
          <div
            key={index}
            className="fade-up-in"
            style={{ animationDelay: `${0.5 + index * 0.3}s` }} // Stagger delay for each card
          >
            <DashboardCards item={info} />
          </div>
        ))}
      </section>

      <section className={styles.apps}>
        <section className={styles.transactions}>transactions app</section>
        <section className={styles.piechart}> piechart app </section>
      </section>
    </main>
  );
}
