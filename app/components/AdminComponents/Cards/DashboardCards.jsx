import React from "react";
import styles from "./cards.module.css";
import Link from "next/link";
import {
  ChartNoAxesColumnIncreasing,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
export default function DashboardCards({ item }) {
  return (
    <div className={styles.dashboard_card}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "0.75rem",
        }}
      >
        <ChartNoAxesColumnIncreasing className={styles.icon} />
        <span>
          <p>
            $
            {item.amount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <small>{item.title}</small>
        </span>
      </div>

      {item.trend.direction === "up" ? (
        <small className={styles.trendup}>
          <TrendingUp className={styles.trendup} />
          <p>{item.trend.percent.toFixed(2)}%</p>
        </small>
      ) : (
        <small className={styles.trenddown}>
          <TrendingDown />
          <p>{item.trend.percent.toFixed(2)}%</p>
        </small>
      )}
    </div>
  );
}
