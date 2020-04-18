import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux';

import styles from './Cart.module.scss';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    const { products } = this.props;

    return <h2>Cart view</h2>;
  }
}

const mapStateToProps = (state) => ({
  products: getCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Cart,
  Component as CartComponent,
};
