import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]

})

export const metadata = {
  title: "Dragon News",
  description: "Best News Portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full`}>
        {children}
      </body>
    </html>
  );
}
