import React from 'react';
// import PropTypes from 'prop-types';
import xbox from '../../../images/xbox.jpg';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { Button } from 'react-bootstrap';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

class Component extends React.Component {
  // static propTypes = {};

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <img src={xbox} alt="product"></img>
        </div>
        <div className={styles.right}>
          <h1>Produt name</h1>
          <p>Product available</p>
          <div className={styles.rating}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
            id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
            lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
            vel vitae erat.
          </p>
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

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Product,
  // Container as Product,
  Component as ProductComponent,
};
