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

var Navbar = React.createClass({
render: function() {
return (
<div className="navbar">
  <div className="left">
    <ul className="directory">
      <li className="directory-item">
	<a href="/projects"> Projects </a>
      </li>
      <li className="directory-item">
	<a href="/travels"> Travels </a>
      </li>
      <li className="directory-item">
	<a href="/blog"> Blog </a>
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

var TravelsImage = React.createClass({
render: function() {
return (
<div className="center">
  <a className="place-title" href={this.props.destination}>
     <div className="overlay">
       <img className="direct-image" alt="" src={this.props.src} />
     </div>
     {this.props.text}
  </a>
</div>
);
}
});

var TravelsPage = React.createClass({
render: function() {
return (
<div>
<TravelsImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/africa_travels.jpg" text="Africa" destination="/travels/africa-regions" />
<TravelsImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/canada_travels.jpg" text="Cananda" destination="/travels/canada" />
<TravelsImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/europe_travels.jpg" text="Europe" destination="/travels/europe-regions" />
<TravelsImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/uk_travels.jpg" text="Great Britain" destination="/travels/uk-regions" />
<TravelsImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/japan_travels.jpg" text="Japan" destination="/travels/japan-regions" />
<TravelsImage src="https://s3-us-west-1.amazonaws.com/mgsite-media/jordan_travels.jpg" text="Jordan" destination="/travels/jordan" />
</div>
);
}
});

var SideA = React.createClass({
render: function() {
return (
<div className="sidea">
    <a href={this.props.href}>
      <div className="overlay">
	<img className="direct-image" src="" />
      </div>
      <h1 className="titles">{this.props.titles}</h1>
    </a>
</div>
);
}
});

var SideB = React.createClass({
render: function() {
return (
<div className="sideb">
    <a href={this.props.href}>
      <div className="overlay">
	<img className="direct-image" src="" />
      </div>
      <h1 className="titles">{this.props.titles}</h1>
    </a>
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

var travelImages = {
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
canada: [{className: "vert-mids", src: "https://s3-us-west-1.amazonaws.com/mgsite-media/canada22.jpg"},
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

var TravelPage = React.createClass({
render: function() {
if (this.props.travelImages) {
var images = this.props.travelImages.map (function (imageData) {
return (
<img className={imageData.className} src={imageData.src} />
);
}
);
}
return (
<div className="center">
 {images}
</div>
);
}
});

var blogPosts = [{title: "Programmers", body: "Using React got me thinking about all the innovations in programming, there’s always something new to learn and work on. I’m always in awe of all the ideas that come out of this community. I meet a lot of programmers and in times past I’d feel bored by this. Why don’t I meet people in other fields, I’m sure they’d be so much interesting. I realize what a ridiculous notion that is now, this community has so much creativity swirling around, and I just wasn’t asking the right questions. I enjoy hearing about people’s personal projects, what they spend their free time creating is a window into how they think and what their interests are. It’s refreshing to come across all of this originality and creativity daily, programmers don’t get enough credit for their artistry."}, 
{title: "Learning React", body: "My site has been a useful place for practice, rewriting it whenever I want to try something new. I originally wrote my site in Clojure, Hiccup and Compojure, and when I wanted to practice JavaScript I rewrote it. This last time I used React, which is simple-ish enough to set up and allows you to work it into your project at your own speed, meaning your entire code base doesn’t have to be changed at once to get something to render. (side note: I know I could be creating knew things instead of rewriting the same project every time, but I find it’s a good starting point to get an initial grasp.) Components allow for an organized structure. You don’t have to write the same code in three different places, meaning a smaller more readable codebase, and who wouldn’t want that? React’s reusable components have been most useful for the blog portion of my site. Some programmers don’t want to deal with all the tedious repetition building a blog can bring about, so they’d rather use Wordpress etc. because they are simple to set up and get the job done well. However I like having everything in my own place, and with React I don’t have to cringe when I look at my blog code. I store all my blog data in one variable called blogPosts and then pass it to the component to render it, and when I'm ready to post again I just have to add another blog object to my array of blog posts and the React component will render it. It is a night and day change from how repetitive and messy my previous attempts at building a blog were."},
{title: "Site Redesign",  body: "About a year ago I put up my personal site. A place to post my projects, photos from travels, and maybe a blog. My personal taste tends to lean toward clean and simple, so when I decided to redesign my site I didn't change anything too drastically, just made it more efficient. Originally I had my contact links in line and represented by icons, for the redesign I've put them in a dropdown menu, which to me looks much cleaner. The font weight is now much thinner, however the jury is still out on whether or not it's too thin to comfortably read! The original travel page consisted of thumbnails for each country I've traveled to. Now they are grouped by region, reducing the images on the travel page from 14 to 6, and the images are now at 100% width. Each title is a link to a comprehensive image page of photos from that region. The projects page was also thumbnails with the project name underneath, which is pretty vague. Now you can find a short description of each project and which languages/libraries/framework I used to write them. My blog page didn't have much going on, just a large image that took up most of the page. It's now been replaced by a much smaller image so you can see the most recent post without having to scroll down. Nothing drastic and still a work in progress, but it now looks more organized and up-to-date!"}];

var BlogTitle = React.createClass({
render: function() {
return (
<h1> {this.props.blogPost.title} </h1>
);
}
});

var BlogBody = React.createClass({
render: function() {
return (
 <p className="entry-details"> {this.props.blogPost.body} </p>
);
}
});

var BlogPage = React.createClass({
render: function() {
return (
<div>
  <BlogTitle blogPost={this.props.blogPost} />
 <BlogBody blogPost={this.props.blogPost} />
</div>
);
}
});

var postElements = blogPosts.map (function(post) {
return (
 <BlogPage blogPost={post} />
)
});

React.render(
<div>
  {postElements}
  <TravelPage travelImages={travelImages.austria} />
  <TravelPage travelImages={travelImages.canada} />
  <TravelPage travelImages={travelImages.croatia} />
  <TravelPage travelImages={travelImages.england} />
  <TravelPage travelImages={travelImages.france} />
  <TravelPage travelImages={travelImages.germany} />
  <TravelPage travelImages={travelImages.italy} />
  <TravelPage travelImages={travelImages.jordan} />
  <TravelPage travelImages={travelImages.kyoto} />
  <TravelPage travelImages={travelImages.osaka} />
  <TravelPage travelImages={travelImages.scotland} />
  <TravelPage travelImages={travelImages.southAfrica} />
  <TravelPage travelImages={travelImages.spain} />
  <TravelPage travelImages={travelImages.tanzania} />
  <TravelPage travelImages={travelImages.tokyo} />
  <Navbar />
  
  <Region destinationA="/africa-regions/south-africa" titleA="South Africa"
	  destinationB="/africa-regions/tanzania" titleB="Tanzania" />
  <Region destinationA="/europe-regions/austria" titleA="Austria"
	  destinationB="/europe-regions/croatia" titleB="Croatia" />
  <Region destinationA="/europe-regions/france" titleA="France"
	  destinationB="/europe-regions/germany" titleB="Germany" />
  <Region destinationA="/europe-regions/italy" titleA="Italy"
	  destinationB="/europe-regions/spain" titleB="Spain" />
  <Region destinationA="/uk-regions/england" titleA="England"
	  destinationB="/uk-regions/scotland" titleB="Scotland" />
  <Region destinationA="/japan-regions/osaka" titleA="Osaka"
	  destinationB="/japan-regions/kyoto" titleB="Kyoto" />
  <Region destinationA="/japan-regions/tokyo" titleA="Tokyo" />
</div>,
document.getElementById('content')
);