import React from 'react';

var Projects = React.createClass({
render: function() {
return (
	<div>
	<ul className="projects">
        <li className="project">
        <a className="link" href="http://alarmtube.marissagrove.com"> Alarmtube-JS </a>
        <p className="project"> An alarm that plays YouTube videos when the alarm is triggered. Written in JavaScript.</p>
	</li>
	<li className="project">
        <a className="link" href="http://cljsalarmtube.marissagrove.com"> Alarmtube-CLJS </a>
        <p className="project"> An alarm that plays YouTube videos when the alarm is triggered. Written in ClojureScript.</p>
	</li>
	<li className="project">
        <a className="link" href="http://findaplace.marissagrove.com"> Find a Place </a>
        <p className="project"> Platform for rating and reviewing businesses. Written in Python.</p>
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
