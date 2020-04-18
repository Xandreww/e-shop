import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddRemoveButton } from '../../features/AddRemoveButton/AddRemoveButton';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux';

import styles from './Cart.module.scss';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    const { products } = this.props;

    return (
      <div className={styles.root}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit price</th>
              <th>Value</th>
              <th>Amount</th>
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
                  <AddRemoveButton number={product.amount} />
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
            <Button as={Link} to="/" className={styles.buttonRight}>
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

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Cart,
  Component as CartComponent,
};
