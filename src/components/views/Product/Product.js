import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { AddRemoveButton } from '../../features/AddRemoveButton/AddRemoveButton';

import { connect } from 'react-redux';
import { getSingleProduct } from '../../../redux/productsRedux';

import styles from './Product.module.scss';

class Component extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    match: PropTypes.object,
  };

  render() {
    const { product } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <img src={product.image} alt="product"></img>
        </div>
        <div className={styles.right}>
          <h1>{product.name}</h1>
          {product.available ? (
            <p className={styles.available}>Available</p>
          ) : (
            <p className={styles.notAvailable}>Product temporarily not available</p>
          )}
          <div className={styles.rating}>
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaRegStar className={styles.icon} />
          </div>
          <p className={styles.description}>{product.descriptionFull}</p>
          <div className={styles.addRemove}>
            <AddRemoveButton number={1} />
            <Button className={styles.addToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getSingleProduct(state, props.match.params.id),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
