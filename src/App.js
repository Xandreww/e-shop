import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Product } from './components/views/Product/Product';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll, fetchAllProducts } from './redux/productsRedux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Cart } from './components/views/Cart/Cart';
import { Form } from './components/views/Form/Form';
import { NotFound } from './components/views/NotFound/NotFound';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    fetchAllProducts: PropTypes.func,
  };

  componentDidMount() {
    const { fetchAllProducts } = this.props;
    fetchAllProducts();
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
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as App };

// const App = () => (
//   <Provider store={store}>
//     <BrowserRouter>
//       <MainLayout>
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <Route exact path="/cart" component={Cart} />
//           <Route exact path="/form" component={Form} />
//           <Route exact path="/product/:id" component={Product} />
//           <Route path="*" component={NotFound} />
//         </Switch>
//       </MainLayout>
//     </BrowserRouter>
//   </Provider>
// );

// export { App };
