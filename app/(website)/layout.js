import UserProvider from "@/components/Providers/UserProvider";
import "./globals.css";

export const metadata = {
  title: "Danone Hackathon",
  description: "By Nuwe",
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </UserProvider>
  );
}
