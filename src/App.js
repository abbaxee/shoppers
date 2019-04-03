import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from './components/common/NotFound';
import About from './components/about/About';
import CartContainer from './components/shop/CartContainer'
import Contact from './components/Contact';
import SingleItemContainer from './components/shop/SingleItemContainer'
import HomeComponent from './components/homepage/Home'
import AddCategoryComponent from './components/catalog/AddCategory'
import CategoriesComponent from './components/Categories';
import Shop from './components/shop/Shop';
import CategoryComponent from './components/shop/Category';
import Catalog from './components/catalog/Catalog';
import AddCatalogComponent from './components/catalog/AddCatalog';
import HeaderContainer from './components/header/HeaderContainer'
import EditCatalogComponent from './components/catalog/EditCatalog';
import Footer from './components/common/Footer';

import ScrollToTop from './ScrollToTop'
import { Provider } from 'react-redux';
import store, { history } from './store';


class App extends Component {
  
  render() {  
    return (
      <Provider store={store}>
        <BrowserRouter basename="/shoppers" history={history}>
          <ScrollToTop>
            <HeaderContainer />
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route path="/about" component={About} />
              <Route exact path="/shop" component={Shop} />
              <Route path="/shop/:id" component={SingleItemContainer} />
              <Route exact path="/category" component={CategoriesComponent}/>
              <Route exact path="/category/:name" component={CategoryComponent}/>
              <Route path="/cart" component={CartContainer} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/catalog" component={Catalog} />
              <Route path="/catalog/add" component={AddCatalogComponent} />
              <Route path="/catalog/edit" component={EditCatalogComponent} />
              <Route path="/catalog/add-category" component={AddCategoryComponent} />
              <Route component={NotFound} />
            </Switch> 
            <Footer />   
          </ScrollToTop>
        </BrowserRouter>  
      </Provider>
    );
  }
}

export default App;
