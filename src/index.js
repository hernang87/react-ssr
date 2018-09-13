import 'babel-polyfill';

import React from 'react';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/routes';
import renderer from './helpers/renderer.js'
import createStore from './helpers/createStore.js';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com/', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  );

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});


app.listen(3000, () => console.log('Listening on port 3000...'));