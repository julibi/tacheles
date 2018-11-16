import React from 'react';

import style from './Home.css';

const Home = () => (
  <div className={ style.root }>
    <h1 className={ style.header }>HOME</h1>
    <div className={ style.random }>RANDOMBOX</div>
  </div>
);

export default Home;