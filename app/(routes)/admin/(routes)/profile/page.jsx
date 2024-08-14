"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile.module.css";
import { CircleUserRound } from "lucide-react";
import { UseUser } from "@/app/components/AdminComponents/UserContext";

export default function ProfilePage() {
  const { profile, editProfile } = UseUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [newProfile, setNewProfile] = useState({
    ...profile.personal_information,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const request = await editProfile({ userid: profile.userid, newProfile });

    if (request.success) {
      setLoading(false); // Stop loading
      alert("Profile updated successfully!");
    } else if (request.error) {
      setLoading(false);
      alert(request.error);
    }
  };

  return (
    <main className={styles.main}>
      <header>
        <h2>
          <CircleUserRound />
          {`${profile.personal_information.firstName}'s Profile`} <span>.</span>
        </h2>
        <small>
          Keep your profile up to date to ensure accurate communication and
          personalized experience. Update your personal information, contact
          details, and account settings here.
        </small>
      </header>

      <section className={styles.form}>
        <form onSubmit={submit}>
          <span>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={newProfile.email}
              onChange={handleChange}
            />
          </span>

          <span>
            <label htmlFor="title">Company Title</label>
            <input
              type="text"
              name="title"
              placeholder="Company Title"
              value={newProfile.title}
              onChange={handleChange}
            />
          </span>

          <span>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              placeholder="YYYY-MM-DD"
              value={newProfile.dateOfBirth}
              onChange={handleChange}
            />
          </span>

          <span style={{ gridColumn: "1/-1" }}>
            <label htmlFor="bio">Biography</label>
            <textarea
              name="bio"
              placeholder="Biography"
              value={newProfile.bio}
              onChange={handleChange}
            />
          </span>

          <button
            style={{ gridColumn: "1/-1" }}
            type="submit"
            className="button1"
            disabled={loading}
          >
            {loading ? "Loading" : " Submit Changes"}
          </button>
        </form>
      </section>

      <footer></footer>
    </main>
  );
}
