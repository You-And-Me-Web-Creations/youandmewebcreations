import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const WebDevPage = lazy(() => import("./pages/webdevpage/webdevpage"));
const PortfolioPage = lazy(() => import("./pages/portfoliopage/portfoliopage"));
const ContactPage = lazy(() => import("./pages/contactpage/contactpage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" render={props => <HomePage {...props} />} />
              <Route
                path="/WebDevelopment"
                render={props => <WebDevPage {...props} />}
              />
              <Route
                path="/Portfolio"
                render={props => <PortfolioPage {...props} />}
              />
              <Route
                path="/Contact_Us"
                render={props => <ContactPage {...props} />}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </>
    </ThemeProvider>
  );
}
export default App;
