import React from "react";
import thunk from 'redux-thunk';
import {render} from "react-dom";
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import reducer from './reducers';

render(
  <Provider store={store}>
    <Router>
      <div className="main-container">

      <navbar className="navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header page-scroll">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="AllOnBlock Logo" style={{height: 70 + "px", width: 150 + "px", paddingTop: 20 + "px", paddingLeft: 20 + "px"}}/>
          </a> + 
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li class="nav-item active">
            <Link className="nav-link" to="/detailPage">Supplier</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/inventory">Inventory</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/purchaseOrders">Purchase Orders</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/orders">Orders</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/finance">Finance</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/others">Other Modules</Link>
          </li>
          </ul>
        <ul className="nav navbar-nav navbar-right">
            <li>
                <a alt="Login or Register" data-toggle="tooltip" data-placement="bottom"
                  title="" href="/"  data-original-title="Login or Register">Login | Register</a>
            </li>
          </ul>
        </div>
      </div>
    </navbar>
        <div className="content">
          <Route exact path="/inventory" component={InventoryContainer}/>
          <Route exact path="/purchaseOrders" component={OrderContainer}/>
          <Route exact path="/orders" component={OrdersContainer}/>
          <Route exact path="/finance" component={FinanceContainer}/>
          <Route exact path="/others" component={OthersContainer}/>
          <Route exact path="/" component={LoginContainer}/>
          <Route exact path="/detailPage" component={DetailContainer}/>
          <Route exact path="/dynamicForms/:step" component={ApplicationContainer}/>
          <Route exact path="/dynamicFormsItemTable" component={ApplicationContainerItemTable}/>
          <Route exact path="/dynamicFormsLotMaster" component={ApplicationContainerLotMaster}/>
          <Route exact path="/dynamicFormsPurchaseOrder" component={PurchaseOrderContainer}/>
          <Route exact path="/viewHistory/:id" component={HistoryContainer}/>
        </div>
        <div className="footer">
              { `Copyright \u00A9 2018 All On Block Inc.` }
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('content-wrapper')
)
