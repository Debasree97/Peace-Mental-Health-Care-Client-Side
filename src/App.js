import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp/SignUp";
import ViaEmail from "./Pages/SignUp/ViaEmail/ViaEmail";
import Details from "./Pages/Details/Details";

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
          <Route path="/detail/:disabiltyId">
            <Details></Details>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route to="/viaemail">
            <ViaEmail></ViaEmail>
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
