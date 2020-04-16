import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { Button } from 'react-bootstrap';

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
          <p>{product.availability}</p>
          <div className={styles.rating}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <p className={styles.description}>{product.descriptionFull}</p>
          <div>
            <IoMdAdd />
            <p>1</p>
            <IoMdRemove />
          </div>
          <Button>Add to cart</Button>
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
