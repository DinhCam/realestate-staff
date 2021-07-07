import React, { useEffect, useContext, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useAuth, useResolved } from "./hooks";
import { Login } from "./components/Login";
import { Context } from "./ChatContext";
import Home from "./components/home/Home.jsx";

const App = () => {
  const history = useHistory();
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? "/" : "/login");
    }
  }, [authResolved, authUser, history]);

  return authResolved ? (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

export default App;
