import React from 'react';
import {Redirect, NavLink, Route} from 'react-router-dom'
import CSS from './courses/CSS'
import HTML from './courses/HTML'
import JavaScript from './courses/JavaScript'
import { blueBright } from 'ansi-colors';


const Courses = () => (

<div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html' activeStyle={{backgroundColor: blueBright}}>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path="/courses" render={() => <Redirect to="/courses/HTML"/>} />
    <Route path="/courses/CSS" component={CSS}  />
    <Route path="/courses/HTML" component={HTML}  />
    <Route path="/courses/JavaScript" component={JavaScript}  />
  </div>
 
  );


export default Courses;