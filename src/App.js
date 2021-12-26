import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Download from "./Download";
import Explore from "./Explore";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />

        <div className="content">
          <Switch>

            <Route exact path="/">
              <Download />
            </Route>

            <Route exact path='/explore'> 
              <Explore />
            </Route>

            <Route exact path='/about'>
              <About />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
