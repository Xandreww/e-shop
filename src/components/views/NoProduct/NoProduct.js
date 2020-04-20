import React from 'react';
import styles from './NoProduct.module.scss';
import noProduct from '../../../images/noProduct.png';

const Component = () => (
  <div className={styles.root}>
    <img className={styles.img} src={noProduct} alt="no products available"></img>
  </div>
);

export { Component as NoProduct, Component as NoProductComponent };
