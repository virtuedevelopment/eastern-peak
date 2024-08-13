"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UseUser } from "@/app/components/AdminComponents/UserContext";

export default function Authenticate({ children }) {
  const { isAuthenticated } = UseUser();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if isAuthenticated is explicitly false
    if (isAuthenticated === false) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, router]);

  // Render the children if the user is authenticated or while checking authentication
  if (isAuthenticated === false) {
    return null; // Optionally, render a loading spinner or a placeholder here
  }

  return <>{children}</>;
}
