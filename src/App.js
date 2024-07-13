import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Users from "./User/Pages/Users";
import NewPlace from "./Places/Pages/NewPlace";

import User from "./User/User";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation/MainNavigation";
import UserPlaces from "./Places/Pages/UserPlaces/UserPlaces";
import PlaceClass from "./Places/PlaceClass";
import CoordinateClass from "./Places/CoordinateClass";

const App = () => {
  const users = [
    new User(
      0,
      "Eve Bouchard",
      "https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.jpg",
      2
    ),
    new User(
      1,
      "Nicolas Canon",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/800px-Nile_crocodile_head.jpg",
      0
    )
  ];

  const places = [
    new PlaceClass(
      0,
      "Boirargues",
      "https://tramwaydemontpellier.net/wp-content/uploads/2015/04/img_0548boirargues110420151.jpg?w=848",
      "Chez Eve",
      "1130 avenue des platanes",
      users[0].id,
      new CoordinateClass(43.0, 44.0)
    ),
    new PlaceClass(
      1,
      "Port Ariane",
      "https://legrandmontpellier.fr/wp-content/uploads/2020/03/port-ariane-lattes-14-1024x576.jpg",
      "Chez Nico",
      "909 leonard de vinci",
      users[1].id,
      new CoordinateClass(15.0, 563.0)
    ),
    new PlaceClass(
      2,
      "Montagne",
      "https://www.belambra.fr/les-echappees/wp-inside/uploads/2018/08/vacances-ete-montagne-sante-bienfaits-1280x720.png",
      "Chez Nico et Eve",
      "Quelque part en France",
      users[0].id,
      new CoordinateClass(55.0, 23.0)
    )
  ];

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route
            path='/'
            exact>
            <Users users={users} />
          </Route>
          <Route
            path='/places/new'
            exact>
            <NewPlace />
          </Route>

          {users.map((user) => (
            <Route
              path={`/${user.id}/places`}
              exact>
              <UserPlaces
                places={places}
                creatorId={user.id}
              />
            </Route>
          ))}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
