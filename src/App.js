import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Header from "./components/header/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
}
export default App;
