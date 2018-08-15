import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import './styles/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import Dashboard from './components/Dashboard';
import EventDetails from './components/EventDetails';
import EventEdit from './components/EventEdit';
import AddEvent from './components/AddEvent';
import Profile from './components/Profile';
import Error from './components/Error';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  {
    auth: { authenticated: localStorage.getItem('userId') }
  },
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Switch>
          <Route path="/" component={App} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/signout" component={SignOut} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/events/:id" component={EventDetails} exact/>
          <Route path="/events/:id/edit" component={EventEdit} />
          <Route path="/add" component={AddEvent} />
          <Route path="/profile" component={Profile} />
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
