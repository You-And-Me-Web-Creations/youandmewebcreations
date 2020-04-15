import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const WebDevPage = lazy(() => import("./pages/webdevpage/webdevpage"));
const PortfolioPage = lazy(() => import("./pages/portfoliopage/portfoliopage"));
const ContactPage = lazy(() => import("./pages/contactpage/contactpage"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route
                  exact
                  path="/"
                  render={(props) => <HomePage {...props} />}
                />
                <Route
                  path="/WebDevelopment"
                  render={(props) => <WebDevPage {...props} />}
                />
                <Route
                  path="/Portfolio"
                  render={(props) => <PortfolioPage {...props} />}
                />
                <Route
                  path="/Contact_Us"
                  render={(props) => <ContactPage {...props} />}
                />
                <Route
                  exact
                  path="/Sign_In"
                  render={(props) =>
                    this.props.currentUser ? (
                      <Redirect to="/" />
                    ) : (
                      <SignInAndSignUpPage {...props} />
                    )
                  }
                />
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </>
      </ThemeProvider>
    );
  }
}
export default App;
