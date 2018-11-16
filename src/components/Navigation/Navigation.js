import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.css';

const Navigation = () => (
  <div className={ style.root }>
    <div className={ style.navLinksWrapper }>
      <NavLink className={ style.navLink } activeClassName={ style.strikethrough } to="/" exact>HAUS</NavLink>
      <NavLink className={ style.navLink } activeClassName={ style.strikethrough } to="/who">WHO</NavLink>
    </div>
  </div>
);

export default Navigation;

//location.pathname !== "/who"? null : style.activeNavLink