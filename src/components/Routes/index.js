import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, RoomDetail, AboutUs } from '../Sites';

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cuartos/:id" component={RoomDetail} />
      <Route exact path="/nosotros" component={AboutUs} />
    </Switch>
  )
};

export default Routes;