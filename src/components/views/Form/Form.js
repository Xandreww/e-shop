import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { validateForm } from '../../../utils/validateForm';

import { connect } from 'react-redux';
import { addForm } from '../../../redux/formsRedux.js';

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
    },
    accept: false,
    showInstruction: false,
  };

  static propTypes = {
    addFormRequest: PropTypes.func,
    addForm: PropTypes.func,
    history: PropTypes.object,
  };

  handleChange = ({ target }) => {
    const { order } = this.state;
    const { value, name } = target;

    this.setState({ order: { ...order, [name]: value } });
  };

  handleAccept = (event) => {
    if (event.target.checked === true) {
      this.setState({ accept: true });
    } else {
      this.setState({ accept: false });
    }
  };

  handleProceed = (event) => {
    const { order, accept } = this.state;
    event.preventDefault();

    if (accept) {
      if (validateForm(order.name, order.address, order.email, order.delivery, order.payment)) {
        this.props.addForm(order);
        this.props.history.push('/summary');
      }
    } else {
      this.setState({ showInstruction: true });
    }
  };

  render() {
    const { handleChange, handleAccept, handleProceed } = this;
    const { showInstruction } = this.state;

    return (
      <Form onSubmit={handleProceed} className={styles.root}>
        <Form.Group className={styles.formGroup} controlId="formBasicEmail">
          <Form.Label className={styles.label}>First name, last name</Form.Label>
          <Form.Control className={styles.control} type="text" placeholder="John Doe" name="name" onChange={handleChange} />
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="formBasicEmail">
          <Form.Label className={styles.label}>Address</Form.Label>
          <Form.Control className={styles.control} type="text" placeholder="Your address" name="address" onChange={handleChange} />
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="formBasicEmail">
          <Form.Label className={styles.label}>Email</Form.Label>
          <Form.Control className={styles.control} type="email" placeholder="Enter email" name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="exampleForm.SelectCustom">
          <Form.Label className={styles.label}>Delivery method:</Form.Label>
          <Form.Control className={styles.control} as="select" custom name="delivery" onChange={handleChange}>
            <option>Courier</option>
            <option>Parcel locker</option>
            <option>Personal pickup</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="exampleForm.SelectCustom" name="payment" onChange={handleChange}>
          <Form.Label className={styles.label}>Payment method:</Form.Label>
          <Form.Control className={styles.control} as="select" custom name="payment" onChange={handleChange}>
            <option>Transfer</option>
            <option>Upon receipt</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="exampleForm.ControlTextarea1">
          <Form.Label className={styles.label}>Additional remarks:</Form.Label>
          <Form.Control className={styles.control} as="textarea" rows="3" name="comment" onChange={handleChange} />
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept terms and conditions" onChange={handleAccept} className={styles.label} />
          {showInstruction && <p className={styles.instruction}>To proceed, you need to accept terms and conditions</p>}
        </Form.Group>
        <Button variant="primary" className={styles.submitButton} onClick={handleProceed}>
          Proceed to summary
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addForm: (payload) => dispatch(addForm(payload)),
});

const Container = withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));

export {
  // Component as Form,
  Container as Form,
  Component as FormComponent,
};
