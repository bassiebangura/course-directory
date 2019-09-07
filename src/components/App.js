import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from './Featured'


const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />
        <Route path='/teachers/:topic/:name' component={Featured} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
