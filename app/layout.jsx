import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Roboto, Saira_Condensed } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const saira = Saira_Condensed({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <meta
        name="description"
        content="Monster Web"
      />
      <title>Monster</title>
      <body className={saira.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
