import React from 'react';
import PropTypes from 'prop-types';
import { NoProduct } from '../NoProduct/NoProduct';
import { FaStar, FaRegStar, FaLuggageCart } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../../../settings';

import { connect } from 'react-redux';
import { getSingleProduct, addToCart } from '../../../redux/productsRedux';

import styles from './Product.module.scss';

class Component extends React.Component {
  state = {
    clicked: false,
  };

  static propTypes = {
    product: PropTypes.object,
    match: PropTypes.object,
    addToCart: PropTypes.func,
  };

  addToCartHandler = () => {
    this.props.addToCart(this.props.product);
    this.setState({ clicked: true });
  };

  render() {
    const { product } = this.props;
    const { addToCartHandler } = this;
    const { clicked } = this.state;

    return (
      <div className={styles.root}>
        {product.name ? (
          <>
            <div className={styles.left}>
              <img src={`${api.imageUrl}${product.image}`} alt="product"></img>
            </div>
            <div className={styles.right}>
              <h1 className={styles.header}>{product.name}</h1>
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
              <div className={styles.button}>
                {!clicked ? (
                  <Button as={Link} to="/Cart" className={styles.addToCart} onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                ) : (
                  <Button className={styles.added}>
                    <FaLuggageCart className={styles.luggageCart} /> Product added to cart
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          <NoProduct />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getSingleProduct(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch(addToCart(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
