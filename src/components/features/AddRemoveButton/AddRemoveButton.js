import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { increaseAmount, decreaseAmount } from '../../../redux/productsRedux';

import styles from './AddRemoveButton.module.scss';

class Component extends React.Component {
  static propTypes = {
    increaseAmount: PropTypes.func,
    decreaseAmount: PropTypes.func,
    product: PropTypes.object,
  };

  increaseHandler = () => {
    this.props.increaseAmount(this.props.product);
  };

  decreaseHandler = () => {
    const { product, decreaseAmount } = this.props;
    if (product.amount > 1) {
      decreaseAmount(product);
    }
  };

  render() {
    const { product } = this.props;
    const { increaseHandler, decreaseHandler } = this;

    return (
      <div className={styles.root}>
        <div className={styles.addRemove}>
          <Button className={styles.removeButton} onClick={decreaseHandler}>
            <IoMdRemove className={styles.icon} />
          </Button>
          <p>{product.amount}</p>
          <Button className={styles.addButton} onClick={increaseHandler}>
            <IoMdAdd className={styles.icon} />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  // product: getSingleProduct(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  increaseAmount: (payload) => dispatch(increaseAmount(payload)),
  decreaseAmount: (payload) => dispatch(decreaseAmount(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as AddRemoveButton,
  Container as AddRemoveButton,
  Component as AddRemoveButtonComponent,
};
