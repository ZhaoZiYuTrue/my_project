import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Icon from './routes/Icon/icon'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/icon" exact component={Icon} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
