import UserProvider from "@/components/Providers/UserProvider";
import { ReactLenisProvider } from "@/components/Providers/ReactLenisProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Danone Hackathon",
  description: "By Nuwe",
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <ReactLenisProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
            <div className="bodyBackground"></div>
          </body>
        </html>
      </ReactLenisProvider>
    </UserProvider>
  );
}
