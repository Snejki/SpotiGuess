import logo from "./logo.svg";
import "./App.css";
import { Switch, Router, Route } from "react-router-dom";
import HomeContainer from "./pages/Home/HomeContainer";
import GameContainer from "./pages/Game/GameContainer";
import RedirectContainer from "./pages/Redirect/RedirectContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/redirect" component={RedirectContainer} />
          <Route path="/details" component={GameContainer} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
