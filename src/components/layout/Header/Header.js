import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import profileImage from '../../../images/profilePhoto.png';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux';

import styles from './Header.module.scss';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  numberOfProducts = () => {
    const { products } = this.props;

    if (products.length > 0) {
      return products.length;
    } else {
      return null;
    }
  };

  render() {
    const { numberOfProducts } = this;
    return (
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
              <p className={styles.number}>{numberOfProducts()}</p>
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
  }
}

const mapStateToProps = (state) => ({
  products: getCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
