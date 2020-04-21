import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Form.module.scss';

class Component extends React.Component {
  state = {
    order: {
      name: '',
      address: '',
      email: '',
      delivery: 'Courier',
      payment: 'Transfer',
      comment: '',
      accept: false,
    },
  };

  handleChange = ({ target }) => {
    const { order } = this.state;
    const { value, name } = target;

    this.setState({ order: { ...order, [name]: value } });
  };

  handleAccept = (event) => {
    const { order } = this.state;

    if (event.target.checked === true) {
      this.setState({ order: { ...order, accept: true } });
    } else {
      this.setState({ order: { ...order, accept: false } });
    }
  };

  submitForm = (event) => {
    const { order } = this.state;
    event.preventDefault();

    if (order.accept) {
      const formData = new FormData();

      for (let key of ['name', 'address', 'email', 'delivery', 'payment', 'comment']) {
        formData.append(key, order[key]);
      }

      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
    }
  };

  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    const { submitForm, handleChange, handleAccept } = this;
    // const { order } = this.state;

    return (
      <Form onSubmit={submitForm} className={styles.root}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First name, last name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" name="name" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Your address" name="address" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Delivery method:</Form.Label>
          <Form.Control as="select" custom name="delivery" onChange={handleChange}>
            <option>Courier</option>
            <option>Parcel locker</option>
            <option>Personal pickup</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom" name="payment" onChange={handleChange}>
          <Form.Label>Payment method:</Form.Label>
          <Form.Control as="select" custom name="payment" onChange={handleChange}>
            <option>Transfer</option>
            <option>Upon receipt</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Additional remarks:</Form.Label>
          <Form.Control as="textarea" rows="3" name="comment" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept terms and conditions" onChange={handleAccept} />
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
