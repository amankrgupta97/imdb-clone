import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./component/Header";
import DarkThemeProviders from "./DarkThemeProviders";
import Navbar from "./component/Navbar";
import SearchBox from "./component/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Created by amankrgupta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkThemeProviders>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </DarkThemeProviders>
      </body>
    </html>
  );
}
