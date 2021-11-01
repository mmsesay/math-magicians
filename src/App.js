import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Home, Calculator, Quote } from './components';
import './components/css/styles.css';

const App = () => (
  <div className="App">
    <head>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
        rel="stylesheet"/>
    </head>
    <main className="bg-gray-600 h-screen">
      <Router>
        <div className="w-full overflow-hidden">
          <nav className="flex p-4 px-20 h-24 bg-gray-900 items-center justify-between text-gray-300 shadow-2xl">
            <a className="w-auto text-2xl">Math Magicians</a>
            <ul className="flex text-xl space-x-5">
              <li>
                <Link to="/">Home</Link>
                <span className="ml-5">|</span>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
                <span className="ml-5">|</span>
              </li>
              <li>
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/quote">
              <Quote />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
  </div>
);

export default App;
