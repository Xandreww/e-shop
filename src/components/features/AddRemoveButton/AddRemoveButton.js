import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { Button } from 'react-bootstrap';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './AddRemoveButton.module.scss';

const Component = ({ number }) => (
  <div className={styles.root}>
    <div className={styles.addRemove}>
      <Button className={styles.addButton}>
        <IoMdAdd className={styles.icon} />
      </Button>
      <p>{number}</p>
      <Button className={styles.removeButton}>
        <IoMdRemove className={styles.icon} />
      </Button>
    </div>
  </div>
);

Component.propTypes = {
  number: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as AddRemoveButton,
  // Container as AddRemoveButton,
  Component as AddRemoveButtonComponent,
};
