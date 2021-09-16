import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './views/Blog';
import MovieList from './views/MovieList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/blog'>
          <Blog />
        </Route>

        <Route path='/'>
          <MovieList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
