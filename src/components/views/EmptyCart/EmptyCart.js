import React from 'react';
import PropTypes from 'prop-types';
import emptyCart from '../../../images/emptyCart.png';

import styles from './EmptyCart.module.scss';

const Component = () => (
  <div className={styles.root}>
    <img className={styles.img} src={emptyCart} alt="empty cart"></img>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as EmptyCart, Component as EmptyCartComponent };
