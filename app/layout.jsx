import { Spline_Sans } from "next/font/google";
import "./globals.css";
import configurations from "@/_data/config";
import { UserProvider } from "./components/AdminComponents/UserContext";

const spline = Spline_Sans({ subsets: ["latin"] });

export const metadata = {
  title: configurations.metadata.title,
  description: configurations.metadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={spline.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
