import React from 'react';
import PropTypes from 'prop-types';

import style from './TextContainer.css';

const TextContainer = ({ firstTitle, secondTitle, text, author, written, lastUpdated, comment }) => {
  return(
    <div className={ style.root }>
      <h2>{ firstTitle }</h2>
      { secondTitle && <h3 className={ style.secondTitle }>{ secondTitle }</h3> }
      <p>{ text }</p>
      <p>von { author }</p>
    </div>
  );
};

TextContainer.propType = {
  firstTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  secondTitle: PropTypes.string,
  author: PropTypes.string.isRequired,
  written: PropTypes.instanceOf(Date),
  lastUpdated: PropTypes.instanceOf(Date),
  comment: PropTypes.string
};

export default TextContainer;