import './App.css';
import { Route } from 'react-router-dom';
import ProductsPage from './pages/products';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ProductsPage}/>
      </Switch>
    </div>
  );
}

export default App;
