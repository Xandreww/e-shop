import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { GoSearch } from 'react-icons/go';
import profileImage from '../../../images/profilePhoto.png';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux';

import styles from './Header.module.scss';

class Component extends React.Component {
  state = {
    viewportWidth: 0,
    active: false,
  };

  static propTypes = {
    products: PropTypes.array,
  };

  componentWillMount() {
    this.setState({ viewportWidth: window.innerWidth });
  }

  numberOfProducts = () => {
    const { products } = this.props;

    if (products.length > 0) {
      return products.length;
    } else {
      return null;
    }
  };

  toggleClass = () => {
    this.setState({ active: true });
  };

  render() {
    const { numberOfProducts, toggleClass } = this;
    const { viewportWidth, active } = this.state;

    return (
      <>
        <Navbar bg="light" expand="lg">
          {console.log('viewportWidth:', viewportWidth)}
          {console.log('active:', active)}
          <div className={styles.navbar}>
            <Navbar.Brand as={Link} to="/" className={styles.brand}>
              <p>E-shop</p>
            </Navbar.Brand>
            {viewportWidth > 675 ? (
              <Form inline>
                <FormControl type="text" placeholder="Hello, what are you looking for?" className={styles.search} />
              </Form>
            ) : (
              <GoSearch className={active && styles.hideSearchIcon} onClick={toggleClass} />
            )}
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
        {active && <FormControl type="text" placeholder="Hello, what are you looking for?" className={styles.formControl} />}
      </>
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
