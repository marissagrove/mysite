import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Navbar   from './components/Navbar.js';
import Blog     from './components/Blog.js';
import Travels  from './components/TravelsPage.js';
import Projects from './components/Project.js';


let App = React.createClass({  
  render() {
    return (
      <div>
	    <Navbar />
            <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
	<Route name="app" path="/" handler={App} >
	<Route name="projects" path="/projects" handler={Projects.handler}/>
	<Route name="travels" path="/travels" handler={Travels.handler}/>
	<Route name="blog" path="/blog" handler={Blog.handler}/>
	<Route name="continents" path="/continents" handler={Travels.ContinentsHandler}/>
	</Route>
	
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});
