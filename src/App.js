import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./app.scss";
import { LIGHT, DARK } from "./Helper/constant";
import Navbar from "./Header/nav";
import HomePage from "./Page/page";

const HomeClass = (props) => {
  console.log(props);
  return <div>Home Page Loaded</div>;
};
const App = () => {
  const [theme, setTheme] = useState(LIGHT);

  const themeSelect = (theme) => {
    theme !== LIGHT ? setTheme(LIGHT) : setTheme(DARK);
  };

  return (
    <React.Fragment>
      <div className={theme === LIGHT ? "theme--default" : "theme--dark"}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route path="/home" component={HomeClass}></Route>
          </Switch>
          <HomePage theme={theme} themeSelect={themeSelect}></HomePage>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
};

export default App;
