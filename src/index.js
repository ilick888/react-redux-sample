import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventShow from './components/events_show'
import * as serviceWorker from './serviceWorker';

const enhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvider>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={EventsIndex} />
            <Route exact path="/events/new" component={EventsNew} />
            <Route exact path="/events/:id" component={EventShow} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
