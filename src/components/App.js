import React from "react";
import "./../styles/App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Category from "./Category";
import Item from "./Item";

const App = () => {
  return (
    <main>
      {/* Do not remove the main div */}
      <div>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/:category" component={Category} />
          <Route path="/:category/:item" component={Item} />
        </Switch>
      </div>
    </main>
  );
};

export default App;
