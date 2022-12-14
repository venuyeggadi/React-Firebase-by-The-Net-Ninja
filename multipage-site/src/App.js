import './App.css'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';


function App() {
  return (

    <div className="App">
      <BrowserRouter>  
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about" exact>About</NavLink>
          <NavLink to="/contact" exact>Contact</NavLink>
        </nav>
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/about" exact >
            <About />
          </Route>
          <Route path="/contact" exact >
            <Contact />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App