import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp/SignUp";
import Details from "./Pages/Details/Details";
import Research from "./Pages/Research/Research";
import LogIn from "./Pages/SignUp/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="font-link">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/detail/:disorderId">
            <Details></Details>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/research">
            <Research></Research>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route to="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
