import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddRemoveButton } from '../../features/AddRemoveButton/AddRemoveButton';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';

import { removeFromCart } from '../../../redux/productsRedux';
import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux';

import styles from './Cart.module.scss';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    removeFromCart: PropTypes.func,
  };

  removeFromCartHandler = (product, event) => {
    this.props.removeFromCart(product.id);
  };

  render() {
    const { products } = this.props;
    const { removeFromCartHandler } = this;

    return (
      <div className={styles.root}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit price</th>
              <th>Value</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className={styles.td}>
                  <img src={product.image} alt="product"></img>
                  {product.name}
                </td>
                <td className={styles.td}>{product.price}</td>
                <td className={styles.td}>{product.price}</td>
                <td className={styles.td}>
                  <AddRemoveButton product={product} />
                </td>
                <td className={styles.td}>
                  <Button className={styles.removeButton} onClick={(event) => removeFromCartHandler(product, event)}>
                    <MdRemoveShoppingCart className={styles.removeIcon} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className={styles.summary}>
          <div className={styles.prices}>
            <div className={styles.leftSummary}>
              <p className={styles.info}>Order value:</p>
              <p className={styles.info}>Shipping cost:</p>
              <p className={styles.info}>To pay:</p>
            </div>
            <div className={styles.rightSummary}>
              <p className={styles.info}>400</p>
              <p className={styles.info}>5</p>
              <p className={styles.info}>405</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button as={Link} to="/" className={styles.buttonLeft}>
              <FaArrowCircleLeft className={styles.arrowLeft} />
              <p>Continue shopping</p>
            </Button>
            <Button as={Link} to="/Form" className={styles.buttonRight}>
              <p>Make order</p>
              <FaArrowCircleRight className={styles.arrowRight} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (payload) => dispatch(removeFromCart(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Cart,
  Component as CartComponent,
};
