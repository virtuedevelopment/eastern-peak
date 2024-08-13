import React from "react";
import AdminNav from "@/app/components/AdminComponents/navigation/AdminNav";
import Authenticate from "../Authenticate";
export default function AdminLayout({ children }) {
  return (
    <Authenticate>
      <main className="admin_layout">
        <AdminNav />
        {children}
      </main>
    </Authenticate>
  );
}
