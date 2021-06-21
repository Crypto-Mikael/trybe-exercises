import Main from './components/Main';
import About from './components/About';
import Howto from './components/Howto';
import Profile from './components/Profile';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/howto" component={Howto} />
      <Route path="/profile"><Profile/></Route>
    </BrowserRouter>
  );
}

export default App;
