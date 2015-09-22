import React from 'react';
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var Navbar = React.createClass({
render: function() {
return (
<div className="navbar">
  <div className="left">
    <ul className="directory">
      <li className="directory-item">
	<Link  to="projects"> Projects </Link>
      </li>
      <li className="directory-item">
	<Link to="/travels"> Travels </Link>
      </li>
      <li className="directory-item">
	<Link to="/blog"> Blog </Link>
      </li>
    </ul>
  </div>
  <div className="social-container">
    <ul className="social-media">
      <li className="social-media-list"> Connect 
	<ul className="social-items">
	  <li id="github" className="social-item">
	    <a className="media" href="https://github.com/marissagrove" target="_blank"> GitHub </a>
	  </li>
	  <li id="twitter" className="social-item">
	    <a className="media" href="https://twitter.com/MarissaGrove" target="_blank"> Twitter </a>
	  </li>
	  <li id="instagram" className="social-item">
	    <a className="media" href="https://instagram.com/marissagrove" target="_blank"> Instagram </a>
	  </li>
	</ul>
      </li>
    </ul>
  </div>
  <h1 className="title">
    <a href="/"> MARISSA </a>
  </h1>
</div>
);
}
});

export default Navbar;  
