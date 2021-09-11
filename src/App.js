import { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import AddAnArticle from "./components/AddAnArticle/AddAnArticle";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import Category from "./components/Category/Category";
import CategoryArticle from "./components/CategoryArticle/CategoryArticle";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import MakeAnAdmin from "./components/MakeAnAdmin/MakeAnAdmin";
import Navbar from './components/Navbar/Navbar';
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Slider from "./components/Slider/Slider";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Slider />
            <Category />
            <Footer />
          </Route>
          <Route path="/home">
            <Navbar />
            <Slider />
            <Category />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/articleDetails/:id">
            <ArticleDetails />
          </Route>
          <Route path="/articles/:category">
            <CategoryArticle />
          </Route>
          <PrivateRoute path="/dashboard">
            <Navbar />
            <div className="d-flex justify-content-center align-items-center">
            <AddAnArticle />
            <MakeAnAdmin />
            </div>
            <Footer />
          </PrivateRoute>
          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
