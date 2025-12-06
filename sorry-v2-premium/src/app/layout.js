import { Bricolage_Grotesque, Dancing_Script } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata = {
  title: "I’m Sorry!",
  description: "I made this little website to say I’m really sorry. I hope you can feel my heart in every word.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ "--font-bricolage": bricolage.style.fontFamily, "--font-dancing": dancingScript.style.fontFamily }}>
      <body
        className={`${bricolage.className} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
