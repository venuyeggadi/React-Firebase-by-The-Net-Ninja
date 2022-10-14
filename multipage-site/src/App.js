import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App