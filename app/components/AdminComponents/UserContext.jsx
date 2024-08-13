"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const UserContext = createContext();
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getProfile({ userid, passcode }) {
  const { data, error } = await supabase
    .from("eastern_peak_admin_profiles")
    .select("*")
    .eq("userid", userid)
    .single(); // Assuming userid is unique

  if (error) {
    return { error: "Something went wrong.. please refresh and try again" };
  }

  if (!data) {
    return { error: "Account doesn't exist" };
  }

  if (data.passcode !== passcode) {
    return { error: "Incorrect user passcode" };
  }

  return { profile: data }; // Assuming data contains the user profile
}

export function UserProvider({ children }) {
  const [profile, setProfile] = useState(null); // User profile pulled from DB
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Used for access to specific pages
  const router = useRouter();

  // Load cookies to keep local storage of state
  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const res = await fetch("/api/cookies"); // Fetch cookies from the API
        if (!res.ok) {
          throw new Error("Failed to fetch cookies");
        }

        const data = await res.json();

        // Set authenticated state based on the fetched cookie data
        setIsAuthenticated(data.isAuthenticated === "true");

        // Set profile if it exists
        if (data.profile) {
          setProfile(JSON.parse(data.profile));
        }
      } catch (error) {
        console.error("Error fetching cookies:", error);
        setIsAuthenticated(false);
      }
    };

    fetchCookies();
  }, []);

  // Update cookies on profile or authentication state change
  useEffect(() => {
    const updateCookies = async () => {
      try {
        await fetch("/api/cookies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            profile: profile ? JSON.stringify(profile) : null,
            isAuthenticated: isAuthenticated.toString(),
          }),
        });
      } catch (error) {
        console.error("Error updating cookies:", error);
      }
    };

    if (profile !== null) {
      updateCookies();
    }
  }, [profile, isAuthenticated]);

  // Login function
  const login = async ({ userid, passcode }) => {
    const result = await getProfile({ userid, passcode });

    if (result.error) {
      return { error: result.error };
    } else {
      setProfile(result.profile);
      setIsAuthenticated(true);
      return true;
    }
  };

  // Logout function
  const logout = async () => {
    console.log("Logging out...");
    setProfile(null);
    setIsAuthenticated(false);

    // Optionally clear cookies on logout
    await fetch("/api/cookies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profile: null,
        isAuthenticated: "false",
      }),
    });

    router.push("/admin/login"); // Redirect to login page
  };

  return (
    <UserContext.Provider value={{ profile, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function UseUser() {
  return useContext(UserContext);
}
