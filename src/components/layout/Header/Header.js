import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import profileImage from '../../../images/profilePhoto.png';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({ children }) => (
  <Navbar bg="light" expand="lg">
    <div className={styles.navbar}>
      <Navbar.Brand as={Link} to="/" className={styles.brand}>
        <p>E-shop</p>
      </Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Hello, what are you looking for?" className={styles.search} />
      </Form>
      <div className={styles.rightSide}>
        <Button as={Link} to="/Cart" className={styles.cartButton}>
          <FiShoppingCart className={styles.cartIcon} />
          <p className={styles.number}>10</p>
        </Button>
        <Button className={styles.profileButton}>
          <img src={profileImage} alt="profile" />
          <p>Hi, John!</p>
          <IoIosArrowDown className={styles.arrowIcon} />
        </Button>
      </div>
    </div>
  </Navbar>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
