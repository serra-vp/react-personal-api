import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Heroes from './Components/Heroes/Heroes';
import Hero from './Components/Heroes/Hero';
import PlayerSearch from './Components/Players/PlayerSearch';

class Routes extends Component {
  render() { 
    return(
      <Switch>
        <Route exact component={Heroes} path="/" />
        <Route component={Hero} path="/heroes/:heroID" />
        <Route component={PlayerSearch} path="/players" />
      </Switch>
    );
  }
}
 
export default Routes;