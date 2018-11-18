import React from 'react';

import style from './PageWrapper.css';

const PageWrapper = ({ children, pageTitle, className }) => (
  <div className={ className }>
    <h1 className={ style.header }>{ pageTitle }</h1>
    { children }
  </div>
);

export default PageWrapper;