import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddBill from './pages/AddBill'
import BillForecast from './pages/BillForecast'
// Components
import Nav from './components/Nav';
import Layout from './components/Layout'

function App() {
  return (
      <Router>
        <Nav />
        
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Layout>
              <Switch>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/addBill">
                  <AddBill />
                </Route>
                <Route path="/billforecast">
                  <BillForecast />
                </Route>
              </Switch>
            </Layout>
          </Switch>
        
      </Router>
      
  );
}

export default App;