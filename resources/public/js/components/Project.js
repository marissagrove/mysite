import React from 'react';

var Projects = React.createClass({
    render: function() {
        return (
	        <div>
	        <ul className="projects">
		<li className="project">
	        <a className="link" href="https://www.npmjs.com/package/react-embedded-twitter-timeline"> npm package react component for an embedded Twitter timeline</a>
	        <p className="project"> Install this npm package to embed your Twitter timeline in a react project, deals with operation order issues for you.</p>
	        </li>
	        <li className="project">
	        <a className="link" href="http://alarmtube.marissagrove.com"> Alarmtube-JS </a>
	        <p className="project"> An alarm that plays YouTube videos when the alarm is triggered. JavaScript</p>
	        </li>
	        <li className="project">
	        <a className="link" href="http://findaplace.marissagrove.com"> Find a Place </a>
	        <p className="project"> Platform for rating and reviewing businesses. Python</p>
	        </li>
	        </ul>
	        </div>
        );
    }
});

var exports = {
  handler: Projects
}

export default exports;	    
