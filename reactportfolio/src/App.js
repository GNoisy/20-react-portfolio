import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// import Hero from './components/Jumbotron';
import './App.css';

function App() {
  return (
    <Router>
    
      <Container className="p-0" fluid={true}>
        <Navigation />
      </Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

      </Switch>
      
    </Router>
  );
}

export default App;


