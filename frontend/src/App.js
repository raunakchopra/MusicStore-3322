import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Signup from './screens/Signup';
import Login from './screens/Login'
import MainPage from './screens/MainPage';
import Music from './screens/Music';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/music/:id">
            <Music />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
