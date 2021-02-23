import logo from './logo.svg';
import './App.css';
import {Route,Link} from 'react-router-dom';
/* -- Pages -- */
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3'
/* -- Components -- */
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
    <NavBar />
    <Route exact path = '/' component={Page1} />
    <Route exact path = '/Page2' component={Page2} />
    <Route exact path = '/Page3' component={Page3} />
    </div>
  );
}

export default App;
