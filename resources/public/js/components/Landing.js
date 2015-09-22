import React from 'react';

var LandingPage = React.createClass({
render: function() {
  return (
      <div>
      Welcome to the site of Marissa Grove, Me. It's my site
      <br />
      <img src="https://s3-us-west-1.amazonaws.com/mgsite-media/austria24.jpg" />
      </div>
  );
}
});

var exports = {
  handler: LandingPage
};

export default exports;
