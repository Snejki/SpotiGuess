import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./pages/Home/HomeContainer";
import { Switch, Router, Route } from "react-router-dom";
import RedirectContainer from "./pages/Redirect/RedirectContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/redirect" component={RedirectContainer} />
        </Switch>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
