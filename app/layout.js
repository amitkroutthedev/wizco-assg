import "../styles/globals.css";
import Navbar from "./navbar/Navbar";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
