import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../../globals.css";


export const metadata = {
  title: "EzReturnit",
  description: "Returns Made Simple Signup Today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
