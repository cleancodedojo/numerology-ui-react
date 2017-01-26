import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import NumerologyPage from './components/NumerologyPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NumerologyPage}/>
    <Route path="numerology" component={NumerologyPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
