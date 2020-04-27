import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Product } from './components/views/Product/Product';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll, fetchAllProducts } from './redux/productsRedux';
import { v4 as uuidv4 } from 'uuid';

import { store } from './redux/store';
import { addUser } from './redux/usersRedux';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Cart } from './components/views/Cart/Cart';
import { Form } from './components/views/Form/Form';
import { Summary } from './components/views/Summary/Summary';
import { ThankYou } from './components/views/ThankYou/ThankYou';
import { NotFound } from './components/views/NotFound/NotFound';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    fetchAllProducts: PropTypes.func,
    addUser: PropTypes.func,
  };

  componentDidMount() {
    const { fetchAllProducts, addUser } = this.props;
    fetchAllProducts();
    addUser(uuidv4());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/form" component={Form} />
              <Route exact path="/summary" component={Summary} />
              <Route exact path="/thankyou" component={ThankYou} />
              <Route exact path="/product/:id" component={Product} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  addUser: (payload) => dispatch(addUser(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as App };
