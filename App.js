import logo from './logo.svg';
import './App.css';


import Grid from '@material-ui/core/Grid';
import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import {AppBar, Container} from "@material-ui/core";
import CustomLink from "./components/CustomLink";
import Error404 from "./pages/Error404";
import Page from "./components/Page";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";



function App() {


  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }


  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Grid container direction="column">
          {/*<Grid item>*/}
          {/*  <AppBar color="secondary">*/}
          {/*    <Container>*/}
          {/*      <Grid container alignItems="center" spacing={4}>*/}
          {/*        <Grid item>*/}
          {/*          <h2>PopMovie</h2>*/}
          {/*        </Grid>*/}
          {/*        <Grid item>*/}
          {/*          <CustomLink color="inherit" to="/">Home</CustomLink>*/}
          {/*        </Grid>*/}
          {/*        <Grid item>*/}
          {/*          <CustomLink color="inherit" to="/about">About Me</CustomLink>*/}
          {/*        </Grid>*/}
          {/*      </Grid>*/}
          {/*    </Container>*/}
          {/*  </AppBar>*/}
          {/*</Grid>*/}
          <Grid item>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <AboutMe />
              </Route>
              <Route status={404}>
                <Error404 />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
