import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Icon from './routes/Icon/icon';
import Capsule from './routes/Capsule/capsule';
import CartoonBar from './routes/CartoonBar/cartoonBar'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/icon" exact component={Icon} />
        <Route path="/capsule" exact component={Capsule} />
        <Route path="/cartoonBar" exact component={CartoonBar} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
