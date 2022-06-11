import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// Public pages
import Home from "../pages/home";
import Features from "../pages/public/features";
import Help from "../pages/public/help";
import Pricing from "../pages/public/pricing";
// Auth pages
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Account from "../pages/account";
// System pages
import Items from "../pages/items";
import Reports from "../pages/reports";
import Invoices from "../pages/invoices";
import Expenses from '../pages/expenses';
import Business from "../pages/business";
import Outbuilding from "../pages/outbuilding";
import Settings from "../pages/settings";
import Contacts from '../pages/contacts';
// Offices pages
import Offices from "../pages/offices";
import OfficeDetail from "../pages/offices/details";
import OfficeCreate from "../pages/offices/create";
// Customers pages
import Customers from '../pages/contacts/customers/CustomersIndex';
import CustomerForm from '../pages/contacts/customers/CustomerForm';
import CustomerDetail from '../pages/contacts/customers/CustomerDetail';

function Routes(){
  return(
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/features" component={Features} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/pricing" component={Pricing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/account" component={Account} />
      <Route exact path="/invoices" component={Invoices} />
      <Route exact path="/expenses" component={Expenses} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/business" component={Business} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/outbuilding" component={Outbuilding} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/offices" component={Offices} />
      <Route path="/offices/show/:id" component={OfficeDetail} />
      <Route path="/offices/new" component={OfficeCreate} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/customers/edit/:id" component={CustomerDetail} />
      <Route exact path="/customers/new" component={CustomerForm} />
    </Router>
  )
};

export default Routes;