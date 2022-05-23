import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AllCourses from "./components/AllCourses/AllCourses";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Privacy from "./components/Privacy/Privacy";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <AllCourses></AllCourses>
            </Route>
            <Route path="/about-me">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/privacy">
              <Privacy></Privacy>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
