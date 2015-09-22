import React from 'react';
import { Link } from 'react-router';

var ContinentImage = React.createClass({
render: function() {
  return (
      <div className="center">
      <Link to={this.props.destination} className="place-title">
      <div className="overlay">
      <img className="direct-image" alt="" src={this.props.src} />
      </div>
      {this.props.text}
    </Link>
      </div>
  );
}
});

var ContinentPage = React.createClass({
render: function() {
  return (
      <div>
      <ContinentImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/africa_travels.jpg" text="Africa" destination="/travels/africa" />
      <ContinentImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/canada_travels.jpg" text="Cananda" destination="/travels/canada/vancouver" />
      <ContinentImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/europe_travels.jpg" text="Europe" destination="/travels/europe" />
      <ContinentImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/uk_travels.jpg" text="Great Britain" destination="/travels/uk" />
      <ContinentImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/japan_travels.jpg" text="Japan" destination="/travels/japan" />
      <ContinentImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/jordan_travels.jpg" text="Jordan" destination="/travels/jordan/jordan" />
      </div>
  );
}
});

var SideA = React.createClass({
  render: function() {
    return (
        <div className="sidea">
        <Link to={this.props.to}>
        <div className="overlay">
        <img className="direct-image" src={this.props.titleImageSource} />
        </div>
        <h1 className="titles">{this.props.title}</h1>
        </Link>
        </div>
    );
  }
});

var SideB = React.createClass({
  render: function() {
    return (
        <div className="sideb">
        <Link to={this.props.to}>
        <div className="overlay">
        <img className="direct-image" src={this.props.titleImageSource} />
        </div>
        <h1 className="titles">{this.props.title}</h1>
        </Link>
        </div>
    );
  }
});

var Region = React.createClass({
render: function() {
var left = <SideA href={this.props.destinationA} titles={this.props.titleA} />;
var right = <div></div>;
if (!!this.props.destinationB && !!this.props.titleB)  {
right = <SideB href={this.props.destinationB} titles={this.props.titleB} />;
}

return (
<div className="center">
{left}
{right}
</div>
);
}
});

var AllRegions = React.createClass({
    render: function() {
	    return (<div></div>);
    }
});

var AllLocationImages = {
  austria: [{className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria24.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria13.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria18.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria19.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria20.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria22.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria25.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria26.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria27.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria28.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria29.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria1.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria2.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria3.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria5.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria6.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria30.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria33.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria36.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria35.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria34.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria37.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria39.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria43.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria44.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria46.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria47.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria48.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria54.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria52.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria10.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria11.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria57.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/austria58.jpg"}],
  vancouver: [{className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada22.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada20.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada3.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada21.jpg"},
              {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada18.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada19.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada23.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada26.jpg"},
              {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada25.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada24.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada28.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada29.jpg"},
              {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada31.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada32.jpg"},
              {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada33.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada34.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada35.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada36.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada37.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada5.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada8.jpg"},
              {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada9.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada11.jpg"},
              {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada17.jpg"},
              {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada16.jpg"},
              {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada14.jpg"}],
  croatia: [{className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia3.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia4.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia35.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia36.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia38.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia40.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia42.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia43.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia44.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia45.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia7.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia5.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia6.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia8.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia9.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia10.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia12.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia11.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia14.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia24.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia25.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia28.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia27.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia31.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia30.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia34.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia46.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia73.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia67.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia68.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia71.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia75.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia77.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia78.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia79.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia80.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia81.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia99.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia82.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia84.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia91.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia94.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia87.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia95.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia97.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia101.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia102.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia104.jpg"}],
  england: [{className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england143.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england26.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england28.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england31.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england35.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england37.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england38.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england39.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england41.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england42.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england43.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england150.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england152.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england73.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england95.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england96.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england97.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england98.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england99.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england101.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england102.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england103.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england107.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england109.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england110.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england111.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england115.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england135.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england136.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england137.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england140.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england142.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england144.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england148.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england153.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/england1.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia81.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia99.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia82.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia84.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia91.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia94.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia87.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia95.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia97.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia101.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia102.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia104.jpg"}],
  france:  [{className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france138.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france139.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france140.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris1.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris2.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris4.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris6.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris7.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris10.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris11.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris12.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris13.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris19.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris15.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris16.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris17.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris18.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris21.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris25.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris34.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris5.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris22.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris23.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris24.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris27.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris28.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris32.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris35.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france132.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france142.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france129.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris36.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris37.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris38.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris39.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris41.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris42.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris45.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris47.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris50.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris51.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris54.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris55.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris57.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris58.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris59.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris61.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris62.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris63.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris64.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris65.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris66.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris67.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris63.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris64.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris65.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris66.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris67.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris70.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris72.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris69.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris74.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris78.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris79.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france146.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france148.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris80.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris81.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/paris82.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france149.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france150.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france151.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france158.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france160.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france162.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france130.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france164.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france165.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france90.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france91.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france125.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france126.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france136.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france137.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france135.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france141.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france144.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france152.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france156.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france157.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france163.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france166.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/france167.jpg"}],
  germany: [{className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin1.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin3.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany7.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin4.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin5.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin2.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany1.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany2.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany12.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany16.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany11.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany17.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany20.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany21.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany28.jpg"},
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany30.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/germany31.jpg"}],
  italy:   [{className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy2.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy5.jpg"}, 
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy3.jpg"}, 
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy4.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy6.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy7.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy10.jpg"}, 
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy13.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy15.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy16.jpg"}, 
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy17.jpg"}, 
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy18.jpg"},
            {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy21.jpg"},
            {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy22.jpg"}, 
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy23.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy24.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy26.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy28.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy29.jpg"}, 
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy30.jpg"}, 
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy34.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy35.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy36.jpg"}, 
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy37.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy38.jpg"},
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy39.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy40.jpg"}, 
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy41.jpg"},
            {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy44.jpg"}, 
            {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy46.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy47.jpg"}, 
            {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/italy50.jpg"}],
  jordan: [{className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan6.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan14.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan58.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan67.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan60.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan65.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan29.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan80.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan28.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan16.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan81.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan26.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan19.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan82.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan32.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan33.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan34.jpg" },
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan35.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan36.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan37.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan38.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan39.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan40.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan42.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan43.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan44.jpg" },
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan73.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan74.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan75.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/wadirum.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan5.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan21.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan22.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan47.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan49.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan50.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan51.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan53.jpg"},
           {className: "half",src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan54.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan56.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan57.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan1.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan68.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan69.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan70.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan71.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan20.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan46.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan77.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan72.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan24.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan27.jpg"}],
  kyoto : [{className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto2.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto1.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto3.jpg"},
           {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto4.jpg"},
           {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto6.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto8.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto9.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto10.jpg"},    
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto11.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto13.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto14.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto16.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto18.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto19.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto20.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto21.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto22.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto23.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto24.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto25.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto26.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto27.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto28.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto29.jpg"}],
  osaka:  [{className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka4.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka2.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka3.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka25.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka5.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka6.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka7.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka8.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka9.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka11.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka12.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka13.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka14.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka16.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka17.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka18.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka19.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka20.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka23.jpg"},
           {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka24.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka1.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka26.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka28.jpg"},
           {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka29.jpg"},
           {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka30.jpg"}],
  scotland: [{className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland2.jpg"},
             {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland4.jpg"},
             {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland3.jpg"},
             {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland5.jpg"},
             {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland6.jpg"},
             {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland7.jpg"},
             {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland8.jpg"},
             {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland9.jpg"},
             {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland10.jpg"},
             {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland11.jpg"},
             {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland12.jpg"},
             {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland14.jpg"},
             {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland15.jpg"},
             {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland17.jpg"},
             {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland20.jpg"},
             {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland21.jpg"},
             {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland22.jpg"},
             {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland23.jpg"},
             {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland24.jpg"}],
  southAfrica: [{className: "vert-thirds", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa1.jpg"},
                {className: "thirds", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa11.jpg"},
                {className: "thirds", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa15.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa25.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa26.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa27.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa23.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa31.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa36.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa4.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa3.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa9.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa10.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa14.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa17.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa41.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa44.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa37.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa45.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/sa46.jpg"}],
  spain:       [{className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/spain1.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/spain11.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/spain3.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/spain2.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/spain5.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/spain8.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/spain10.jpg"}],
  tanzania:    [{className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania48.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania55.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania58.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania21.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania35.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania49.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania50.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania51.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania47.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania27.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania30.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania31.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania32.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania20.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania42.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania39.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania85.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania8.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania7.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania33.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania37.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania34.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania9.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania10.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania59.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania60.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania11.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania18.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania61.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania64.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania3.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania19.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania22.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania41.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania70.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania80.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania82.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania72.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania74.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania25.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania26.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania68.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania69.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania67.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania65.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania66.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania86.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania90.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania91.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania96.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania98.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania102.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania109.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania111.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania92.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania100.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania110.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania123.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania124.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania129.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania130.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania106.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania108.jpg"}],
  tokyo:       [{className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/japan3.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/japan1.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo1.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo2.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo3.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo6.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo4.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo7.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo8.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo9.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo10.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo11.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo12.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo15.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo17.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo18.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo13.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo19.jpg"},
                {className: "half-right", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo20.jpg"},
                {className: "half", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo21.jpg"},
                {className: "single", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo22.jpg"},
                {className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo23.jpg"},
                {className: "vert-mid", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"}]
};

var LocationPage = React.createClass({
  render: function() {
    var locationImages = AllLocationImages[this.props.params.locationId];

    if (locationImages) {
      var images = locationImages.map (function (imageData) {
        return (
            <img className={imageData.className} src={imageData.src} />
        );
      }
                                      );
    }
    return (
        <div className="center">
        <h2>{this.props.params.locationId}</h2>
        {images}
      </div>
    );
  }
});

var regions = {africa: [{title: "South Africa", locationId: "southAfrica", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                        {title: "Tanzania", locationId: "tanzania", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"}],
               japan: [{title: "Tokyo", locationId: "tokyo", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                       {title: "Kyoto", locationId: "kyoto", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                       {title: "Osaka", locationId: "osaka", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"}],
               europe: [{title: "Austria", locationId: "austria", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                        {title: "Croatia", locationId: "croatia", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                        {title: "France", locationId: "france", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                        {title: "Germany", locationId: "germany", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                        {title: "Italy", locationId: "italy", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                        {title: "Spain", locationId: "spain", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"}],
               uk: [{title: "England", locationId: "england", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"},
                    {title: "Scotland", locationId: "scotland", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"}]
              };

var RegionPage = React.createClass({
  render: function() {
    var regionId = this.props.params.regionId
    , locations = regions[regionId]
    , locationEls = [];

    for (var i = 0; i < locations.length; i++) {
      var location = locations[i]
      , even = 0 == i % 2
      , to = "/travels/" + regionId + "/" + location.locationId;
      
      if (even) {
        locationEls.push(<SideA title={location.title} to={to} titleImageSource={location.src} />)
      } else {
        locationEls.push(<SideB title={location.title} to={to} titleImageSource={location.src} />)
      }
    }

    return (
        <div>
        {locationEls}
      </div>
    );
  }
});

var exports = {
  handler: AllRegions,
  ContinentsHandler: ContinentPage,
  RegionHandler: RegionPage,
  LocationHandler: LocationPage
};

export default exports;
