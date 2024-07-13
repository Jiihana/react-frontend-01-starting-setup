import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './User/Pages/Users';
import NewPlace from './Places/Pages/NewPlace';

import User from "./User/User";

function App() {

  const users = [
    new User(0, "Eve Bouchard", "https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.jpg", 2),
    new User(1, "Nicolas Canon", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/800px-Nile_crocodile_head.jpg", 0)
  ];

  return <Router>
    <Switch>
      <Route path="/" exact>
      </Route>

      <Route path="/users" exact>
        <Users users={users} />
      </Route>

      <Redirect to="/" />
    </Switch>
  </Router>
}

export default App;
