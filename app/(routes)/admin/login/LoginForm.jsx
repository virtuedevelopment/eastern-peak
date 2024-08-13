"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import Link from "next/link";
import { UseUser } from "@/app/components/AdminComponents/UserContext";

export default function LoginForm() {
  const router = useRouter();
  const { login, isAuthenticated } = UseUser();
  const [id, setId] = useState(""); //username
  const [password, setPassword] = useState(""); //password
  const [loading, setLoading] = useState(false); //loading
  const [error, setError] = useState(""); //for failed login attempts

  //if user is authenticated
  useEffect(() => {
    if (isAuthenticated === true) {
      router.push("/admin/dashboard");
    }
  }, [isAuthenticated]);

  //on login
  const submitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    //convert str  to num
    const code = +password;

    //pass in id and password into login function
    const request = await login({ userid: id, passcode: code });

    //if error or success
    if (request.error) {
      setLoading(false);
      setError(request.error);
    } else {
      // router.push("/admin/dashboard");
      console.log("Loggedin successfully!");
    }
  };

  return (
    <div className={styles.loginbox}>
      <form onSubmit={submitLogin}>
        <input
          type="text"
          value={id}
          placeholder="user Id"
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="number"
          value={password}
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <span className="error">{error}</span>}
        <button type="submit" disabled={loading} className="button1">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
