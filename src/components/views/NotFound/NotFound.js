import React from 'react';
import PropTypes from 'prop-types';
import notFound from '../../../images/notFound.jpg';

import styles from './NotFound.module.scss';

const Component = () => (
  <div className={styles.root}>
    <img className={styles.img} src={notFound} alt="page not found"></img>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as NotFound, Component as NotFoundComponent };
