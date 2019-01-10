import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { siteMenuClone } from './script'
import NotFound from './components/NotFound';
import About from './components/About';
import CartComponent from './components/Cart'
import Contact from './components/Contact';
import SingleItemComponent from './components/SingleItem'
import HomeComponent from './components/Home'
import AddCategoryComponent from './components/AddCategory'
import CategoriesComponent from './components/Categories';
import ShopComponent from './components/Shop';
import CategoryComponent from './components/Category';
import CatalogComponent from './components/Catalog';
import AddCatalogComponent from './components/AddCatalog';

import { Provider } from 'react-redux';
import store, { history } from './store';

class App extends Component {
  componentDidMount() {
    siteMenuClone();
  }
  render() {  
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={About} />
            <Route exact path="/shop" component={ShopComponent} />
            <Route path="/shop/:id" component={SingleItemComponent} />
            <Route exact path="/category" component={CategoriesComponent}/>
            <Route exact path="/category/:name" component={CategoryComponent}/>
            <Route path="/cart" component={CartComponent} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/catalog" component={CatalogComponent} />
            <Route path="/catalog/add" component={AddCatalogComponent} />
            <Route path="/catalog/add-category" component={AddCategoryComponent} />
            <Route component={NotFound} />
          </Switch>
        </Router>  
      </Provider>
    );
  }
}

export default App;
