import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.css";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const WebDevPage = lazy(() => import("./pages/webdevpage/webdevpage"));
const PortfolioPage = lazy(() => import("./pages/portfoliopage/portfoliopage"));
const ContactPage = lazy(() => import("./pages/contactpage/contactpage"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
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
          <Header />
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
