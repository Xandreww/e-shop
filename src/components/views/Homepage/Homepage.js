import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { IoIosPricetag } from 'react-icons/io';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import styles from './Homepage.module.scss';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    const { products } = this.props;

    return (
      <div className={styles.root}>
        {products.map((product) => (
          <Card key={product.id} className={styles.card}>
            <Card.Img variant="top" src={product.image} className={styles.image} />
            <Card.Body className={styles.cardBody}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.descriptionShort}</Card.Text>
              <Button variant="primary" className={styles.priceButton}>
                <IoIosPricetag className={styles.priceTag} />
                {product.price}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
