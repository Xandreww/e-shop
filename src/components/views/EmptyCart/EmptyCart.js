import React from 'react';
import styles from './EmptyCart.module.scss';
import emptyCart from '../../../images/emptyCart.png';

const Component = () => (
  <div className={styles.root}>
    <img className={styles.img} src={emptyCart} alt="empty cart"></img>
  </div>
);

export { Component as EmptyCart, Component as EmptyCartComponent };
