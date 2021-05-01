import "./App.css";

import Detail from "./components/Detail"
import {
  BrowserRouter as Router,
  Switch,
  StaticRouter,
  Route,
  Link,
} from "react-router-dom";
import Home from "./screen/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "/detail">
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
