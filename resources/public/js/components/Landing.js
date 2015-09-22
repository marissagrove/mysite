import React from 'react';

var LandingPage = React.createClass({
render: function() {
  return (
	  <div className="landingimage">
	   <img src="https://s3-us-west-1.amazonaws.com/mgsite-media/jordan.jpg" />
	  </div>
  );
}
});

var exports = {
  handler: LandingPage
};

export default exports;
