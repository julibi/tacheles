import React, { Component } from 'react';
import Typewriter from '../../lib/Typewriter/Typewriter';

import style from './Header.css';

const toBeTyped = "Tacheles";

class Header extends Component {
  render() {
    return(
      <div className={ style.root }>
        <Typewriter text="Tacheles" speed={ 200 }/>
      </div>
    );
  }
};

export default Header;
