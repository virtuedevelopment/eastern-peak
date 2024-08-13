"use client";
import React from "react";
import styles from "./navigation.module.css";
import Link from "next/link";
import { UseUser } from "../UserContext";
import {
  LogOut,
  User,
  Newspaper,
  ChartPie,
  ChartLine,
  Bell,
} from "lucide-react";
const nav_options = [
  { name: "Dashboard", icon: <Newspaper />, url: "/admin/dashboard" },
  { name: "Profile", icon: <User />, url: "/admin/profile" },
  { name: "Portfolio", icon: <ChartPie />, url: "/admin/portfolio" },
  { name: "Command", icon: <ChartLine />, url: "/admin/command-center" },
  { name: "Notifications", icon: <Bell />, url: "/admin/notifications" },
];

export default function AdminNav() {
  const { logout } = UseUser();

  return (
    <aside className={styles.admin_nav}>
      <Link href={"/admin/dashboard"}>
        <img src="/assets/logo.svg" alt="logo" />
      </Link>

      <ul>
        {nav_options.map((nav_item) => (
          <li key={nav_item.url}>
            <Link href={nav_item.url}>
              {nav_item.icon}
              <p>{nav_item.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      <button className={styles.logout} onClick={logout}>
        <LogOut />
      </button>
    </aside>
  );
}
