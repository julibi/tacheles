import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Who from './Who/Who';
import NotFound from './NotFound/NotFound';

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