import "@/styles/globals.css";
import { DarkModeProvider } from "@/context/colors-context";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
