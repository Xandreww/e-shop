import React from 'react';
import PropTypes from 'prop-types';
import { EmptyCart } from '../EmptyCart/EmptyCart';

import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddRemoveButton } from '../../features/AddRemoveButton/AddRemoveButton';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { api } from '../../../settings';

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

  updateValue = (product) => {
    return product.price * product.amount;
  };

  calculateOrderValue = () => {
    let orderValue = 0;
    const products = this.props.products;
    for (let product of products) {
      orderValue += product.price * product.amount;
    }
    return orderValue;
  };

  calculateTotal = (orderValue) => {
    return orderValue + 5;
  };

  render() {
    const { products } = this.props;
    const { removeFromCartHandler, updateValue, calculateOrderValue, calculateTotal } = this;

    return (
      <div className={styles.root}>
        {products.length > 0 ? (
          <>
            <Table bordered hover>
              <thead>
                <tr>
                  <th className={styles.header}>Product</th>
                  <th className={styles.header}>Unit price</th>
                  <th className={styles.header}>Value</th>
                  <th className={styles.header}>Amount</th>
                  <th className={styles.header}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td className={styles.td}>
                      <img src={`${api.imageUrl}${product.image}`} alt="product"></img>
                      {product.name}
                    </td>
                    <td className={styles.td}>{product.price}</td>
                    <td className={styles.td}>{updateValue(product)}</td>
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
                  <p className={styles.info}>{calculateOrderValue()}</p>
                  <p className={styles.info}>5</p>
                  <p className={styles.info}>{calculateTotal(calculateOrderValue())}</p>
                </div>
              </div>
              <div className={styles.buttons}>
                <Button as={Link} to="/" className={styles.buttonLeft}>
                  <FaArrowCircleLeft className={styles.arrowLeft} />
                  <p className={styles.paragraph}>Continue shopping</p>
                </Button>
                <Button as={Link} to="/Form" className={styles.buttonRight}>
                  <p className={styles.paragraph}>Make order</p>
                  <FaArrowCircleRight className={styles.arrowRight} />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
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
