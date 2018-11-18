import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navigation from '../pages/Navigation/Navigation';
import Home from '../pages/Home/Home';
import Who from '../pages/Who/Who';
import NotFound from '../pages/NotFound/NotFound';

import style from './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ show: true }) }, 2000)
  }

  render() {
    const { show } = this.state;

    return(
      <BrowserRouter>
        <Fragment>
          <Header />
          { show && (
            <div className={ style.fadeIn }>
              <Navigation />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/who" component={Who} />
                <Route component={NotFound} />
              </Switch>
            </div>
          ) }
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

//before Navigation and Switch were wrapped by 