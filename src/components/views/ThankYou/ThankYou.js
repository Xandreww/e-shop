import React from 'react';
import PropTypes from 'prop-types';
import thankyou from '../../../images/thankyou.jpg';

import styles from './ThankYou.module.scss';

const Component = () => (
  <div className={styles.root}>
    <img className={styles.img} src={thankyou} alt="thank you for your order"></img>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as ThankYou,
  // Container as ThankYou,
  Component as ThankYouComponent,
};
