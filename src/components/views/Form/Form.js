import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Form.module.scss';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    // const { products } = this.props;

    return (
      <Form className={styles.root}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First name, last name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Your address" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Delivery method:</Form.Label>
          <Form.Control as="select" custom>
            <option>Courier</option>
            <option>Parcel locker</option>
            <option>Personal pickup</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Payment method:</Form.Label>
          <Form.Control as="select" custom>
            <option>Transfer</option>
            <option>Upon receipt</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Additional remarks:</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept terms and conditions" />
        </Form.Group>
        <Button variant="primary" type="submit" className={styles.submitButton}>
          Submit
        </Button>
      </Form>
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
  Component as Form,
  // Container as Form,
  Component as FormComponent,
};
