import React from 'react';
import PropTypes from 'prop-types';
import { EmptyCart } from '../EmptyCart/EmptyCart';

import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { api } from '../../../settings';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux';
import { getForm, addFormRequest } from '../../../redux/formsRedux';

import styles from './Summary.module.scss';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    form: PropTypes.array,
    addFormRequest: PropTypes.func,
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

  submitFormRequest = (event) => {
    const { form } = this.props;
    event.preventDefault();

    // console.log('click!');
    // console.log('form name:', form[0].name);

    const formData = new FormData();

    for (let key of ['name', 'address', 'email', 'delivery', 'payment', 'comment']) {
      formData.append(key, form[0][key]);
    }

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    this.props.addFormRequest(formData);
  };

  render() {
    const { products, form } = this.props;
    const { updateValue, calculateOrderValue, calculateTotal, submitFormRequest } = this;

    return (
      <div className={styles.root}>
        {console.log('form:', form)}
        <div className={styles.content}>
          <div className={styles.left}>
            {products.length > 0 ? (
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
                    <tr key={product._id}>
                      <td className={styles.td}>
                        <img src={`${api.imageUrl}${product.image}`} alt="product" className={styles.productImage}></img>
                        {product.name}
                      </td>
                      <td className={styles.td}>{product.price}</td>
                      <td className={styles.td}>{updateValue(product)}</td>
                      <td className={styles.td}>
                        <p>{product.amount}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <EmptyCart />
            )}
          </div>
          <div className={styles.right}>
            {form.length > 0 ? (
              <Container className={styles.formData}>
                <Row>
                  <Col>
                    <h2>Fierst name, last name:</h2>
                  </Col>
                  <Col>
                    <p>{form[0].name}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Address</h2>
                  </Col>
                  <Col>
                    <p>{form[0].address}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Email</h2>
                  </Col>
                  <Col>
                    <p>{form[0].email}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Delivery method:</h2>
                  </Col>
                  <Col>
                    <p>{form[0].delivery}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Payment method:</h2>
                  </Col>
                  <Col>
                    <p>{form[0].payment}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Additional remarks:</h2>
                  </Col>
                  <Col>
                    <p>{form[0].comment}</p>
                  </Col>
                </Row>
              </Container>
            ) : (
              <h1 className={styles.noFormData}>No form data found</h1>
            )}
          </div>
        </div>
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
            <Button as={Link} to="/cart" className={styles.buttonLeft}>
              <FaArrowCircleLeft className={styles.arrowLeft} />
              <p>Make changes</p>
            </Button>
            <Button as={Link} to="/Form" className={styles.buttonRight} onClick={submitFormRequest}>
              <p>Submit order</p>
              <FaArrowCircleRight className={styles.arrowRight} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: getCart(state),
  form: getForm(state),
});

const mapDispatchToProps = (dispatch) => ({
  addFormRequest: (payload) => dispatch(addFormRequest(payload)),
});

const SummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Summary,
  SummaryContainer as Summary,
  Component as SummaryComponent,
};
