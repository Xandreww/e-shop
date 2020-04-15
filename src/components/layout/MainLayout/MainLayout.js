import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import { Container } from 'react-bootstrap';

import styles from './MainLayout.module.scss';

const Component = ({ className, children }) => (
  <div className={styles.root}>
    <Header />
    <Container>{children}</Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  // Container as MainLayout,
  // Component as MainLayoutComponent,
};
