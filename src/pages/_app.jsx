import { DarkModeProvider } from "@/context/colors-context";
import GlobalStyles from "@/styles/globalReset";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
