import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Navbar   from './components/Navbar.js';
import Landing  from './components/Landing.js';
import Blog     from './components/Blog.js';
import Travels  from './components/TravelsPage.js';
import Projects from './components/Project.js';


let App = React.createClass({  
  render() {
    return (
      <div>
	      <Navbar />
        <RouteHandler />
      </div>
    );
  }
});

let routes = (  
    <Route name="app" path="/" handler={App} >
      <Route name="home" path="/" handler={Landing.handler}/>
    <Route name="projects" path="/projects" handler={Projects.handler}/>
    <Route name="location" path="/travels/:regionId/:locationId" handler={Travels.LocationHandler}/>
    <Route name="region" path="/travels/:regionId" handler={Travels.RegionHandler}/>
    <Route name="blog" path="/blog" handler={Blog.handler}/>
    <Route name="travels" path="/travels" handler={Travels.ContinentsHandler}/>
    </Route>
);

window.onload = function() {
  Router.run(routes, function (Handler) {
    var appEl = document.body.querySelector(".app");
    React.render(<Handler/>, appEl);
  });
}
