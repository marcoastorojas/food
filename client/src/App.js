import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { LandinPage } from './pages/landinPage/LandinPage';
import Routes from './pages/Routes';
function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/landinPage"} component={LandinPage}/>
        <Route path={"/recipes"} component={Routes}/>
        <Route path={"*"}>
          <Redirect to={"/landinPage"}/>
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
