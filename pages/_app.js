import Script from "next/script";
import { ThemeProvider } from "next-themes";

import { Navbar, Footer } from "../components";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/c7d9204842.js" crossOrigin="anonymous" />
    </ThemeProvider>
  )
}
