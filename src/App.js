import { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import AddAnArticle from "./components/AddAnArticle/AddAnArticle";
import AllArticle from "./components/AllArticle/AllArticle";
import Category from "./components/Category/Category";
import Login from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
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
          <AllArticle />
          <AddAnArticle />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
