import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddBill from './pages/AddBill'
// Components
import Nav from './components/Nav';
import Layout from './components/Layout'

function App() {
  return (
      <Router>
        <Nav />
        <Layout>
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
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/addBill">
              <AddBill />
            </Route>
          </Switch>
        </Layout>
      </Router>
      
  );
}

export default App;