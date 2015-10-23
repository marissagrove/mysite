import React from 'react';

var twitterDidMount = function(d,s,id){
    var js
    , fjs = d.getElementsByTagName(s)[0]
    , p = /^http:/.test(d.location)?'http':'https';

    js = d.createElement(s);
    js.id = id;
    js.src = p+"://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
};

var LandingPage = React.createClass({
    componentDidMount: function() {
	twitterDidMount(document,"script","twitter-wjs");
	var fixStyles = function() {
	    var twitterIframeEl = document.querySelector('iframe#twitter-widget-0')
	    , twitterIsFinishedLoading = twitterIframeEl && twitterIframeEl.style.height == '600px' && twitterIframeEl.style.position == 'static';
	    //In order for style changes to apply we have to wait
	    //until the iframe has loaded to manipulate the js. Run
	    //twitterIsFishedLoading every 100 milliseconds until
	    //iframe is loaded and original styles are set, then run the code to change the
	    //styles through js.
	    if (twitterIsFinishedLoading) {
		var twitterTimelineEl = twitterIframeEl.contentWindow.document.querySelector('.timeline');
		twitterIframeEl.style.width = '100%';
		twitterIframeEl.style.height = '100%';
		twitterIframeEl.style.position = 'absolute';
		twitterIframeEl.style.left = '0px';
		twitterIframeEl.style.top = '0px';
		twitterTimelineEl.style.borderRadius = '0px';
	    } else {
		setTimeout(fixStyles, 100);
	    };
	};
	fixStyles();
    },
    componentWillUnmount: function() {
	var twitterScript = document.getElementById("twitter-wjs");
	var scriptParent = twitterScript.parentNode;
	scriptParent.removeChild(twitterScript);
	},
render: function() {
  return (
       <div className="center">
        <img className="landingimage" src="https://s3-us-west-1.amazonaws.com/mgsite-media/jordan.jpg" />
       <div className="twitter-iframe-container">
        <a className="twitter-timeline" href="https://twitter.com/MarissaGrove" data-widget-id="657316528136695808">Tweets by @MarissaGrove</a>
       </div>
       </div>
  );
}
});

var exports = {
  handler: LandingPage
};

export default exports;
