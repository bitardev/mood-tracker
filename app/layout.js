import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export const metadata = {
  title: "MoodTracker",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between">
      <Link href={"/"}>
        <h1 className={`${fugaz.className} text-base sm:text-lg textGradient `}>
          MoodTracker
        </h1>
      </Link>
      <div className="flex items-center justify-between">
        PLACEHOLDER CTA || STATS
      </div>
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`${fugaz.className} text-indigo-400`}>Created with ❤️</p>
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
