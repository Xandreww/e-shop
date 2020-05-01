import React from 'react';
import PropTypes from 'prop-types';
import { EmptyCart } from '../EmptyCart/EmptyCart';
import { withRouter } from 'react-router';

import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { api } from '../../../settings';

import { connect } from 'react-redux';
import { getCart, postCartRequest, clearCart } from '../../../redux/productsRedux';
import { getForm, addFormRequest, clearForm } from '../../../redux/formsRedux';
import { getUser, postUserRequest, clearUser } from '../../../redux/usersRedux';

import styles from './Summary.module.scss';

class Component extends React.Component {
  state = {
    viewportWidth: 0,
  };

  static propTypes = {
    products: PropTypes.array,
    form: PropTypes.array,
    user: PropTypes.array,
    addFormRequest: PropTypes.func,
    postCartRequest: PropTypes.func,
    postUserRequest: PropTypes.func,
    clearForm: PropTypes.func,
    clearCart: PropTypes.func,
    clearUser: PropTypes.func,
    history: PropTypes.object,
  };

  componentWillMount() {
    this.setState({ viewportWidth: window.innerWidth });
  }

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
    const { form, user } = this.props;
    const { postCartRequest, addFormRequest, postUserRequest, clearForm, clearCart, clearUser } = this.props;
    event.preventDefault();

    const formData = new FormData();

    for (let key of ['name', 'address', 'email', 'delivery', 'payment', 'comment']) {
      formData.append(key, form[0][key]);
    }

    formData.append('user', user[0]);

    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    addFormRequest(formData);
    postCartRequest();
    postUserRequest({ id: user[0] });
    clearForm();
    clearCart();
    clearUser();
    this.props.history.push('/thankyou');
  };

  render() {
    const { products, form } = this.props;
    const { viewportWidth } = this.state;
    const { updateValue, calculateOrderValue, calculateTotal, submitFormRequest } = this;

    return (
      <div className={styles.root}>
        {console.log('viewportWidth:', viewportWidth)}
        <div className={styles.content}>
          <div className={styles.left}>
            {products.length > 0 ? (
              <Table bordered hover>
                <thead>
                  <tr>
                    <th className={styles.productHeader}>Product</th>
                    <th className={styles.productHeader}>Unit price</th>
                    <th className={styles.productHeader}>Value</th>
                    <th className={styles.productHeader}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className={styles.td}>
                        {viewportWidth > 320 && (
                          <img src={`${api.imageUrl}${product.image}`} alt="product" className={styles.productImage}></img>
                        )}
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
                    <h2 className={styles.formHeader}>First name, last name:</h2>
                  </Col>
                  <Col>
                    <p className={styles.text}>{form[0].name}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className={styles.formHeader}>Address</h2>
                  </Col>
                  <Col>
                    <p className={styles.text}>{form[0].address}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className={styles.formHeader}>Email</h2>
                  </Col>
                  <Col>
                    <p className={styles.text}>{form[0].email}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className={styles.formHeader}>Delivery method:</h2>
                  </Col>
                  <Col>
                    <p className={styles.text}>{form[0].delivery}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className={styles.formHeader}>Payment method:</h2>
                  </Col>
                  <Col>
                    <p className={styles.text}>{form[0].payment}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className={styles.formHeader}>Additional remarks:</h2>
                  </Col>
                  <Col>
                    <p className={styles.text}>{form[0].comment}</p>
                  </Col>
                </Row>
              </Container>
            ) : (
              <h1 className={styles.noFormData}>No form data found</h1>
            )}
          </div>
        </div>
        {products.length > 0 && (
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
                <p className={styles.buttonText}>Make changes</p>
              </Button>
              <Button as={Link} to="/Form" className={styles.buttonRight} onClick={submitFormRequest}>
                <p className={styles.buttonText}>Submit order</p>
                <FaArrowCircleRight className={styles.arrowRight} />
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: getCart(state),
  form: getForm(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  addFormRequest: (payload) => dispatch(addFormRequest(payload)),
  postCartRequest: (payload) => dispatch(postCartRequest(payload)),
  postUserRequest: (payload) => dispatch(postUserRequest(payload)),
  clearForm: (payload) => dispatch(clearForm(payload)),
  clearCart: (payload) => dispatch(clearCart(payload)),
  clearUser: (payload) => dispatch(clearUser(payload)),
});

const SummaryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));

export {
  // Component as Summary,
  SummaryContainer as Summary,
  Component as SummaryComponent,
};
