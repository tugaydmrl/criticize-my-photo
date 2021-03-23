import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Comments from "./components/Comments/Comments";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
		  <Route path="/">
		    <Dashboard />
		  </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
