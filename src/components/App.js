import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";


const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Teachers" component={Teachers} />
        <Route path="/Courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
