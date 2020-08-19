import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navbar';
import Home from './pages/Home'
import Hero from './components/Jumbotron';
import './App.css';

function App() {
  return (
    <Router>
    
      <Container className="p-0" fluid={true}>
        <Navigation />
      </Container>
      <Switch>
        <Route exact path="/" component={Home} />

      </Switch>
      
    </Router>
  );
}

export default App;


