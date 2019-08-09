import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, RoomDetail } from '../Sites';

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cuartos/:id" component={RoomDetail} />
    </Switch>
  )
};

export default Routes;