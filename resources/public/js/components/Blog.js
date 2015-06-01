import React from 'react';

var blogPosts = [{title: "Site Redesign",  body: "__About__ a *year* ago I put up my personal site. A place to post my projects, photos from travels, and maybe a blog. My personal taste tends to lean toward clean and simple, so when I decided to redesign my site I didn't change anything too drastically, just made it more efficient. Originally I had my contact links in line and represented by icons, for the redesign I've put them in a dropdown menu, which to me looks much cleaner. The font weight is now much thinner, however the jury is still out on whether or not it's too thin to comfortably read! The original travel page consisted of thumbnails for each country I've traveled to. Now they are grouped by region, reducing the images on the travel page from 14 to 6, and the images are now at 100% width. Each title is a link to a comprehensive image page of photos from that region. The projects page was also thumbnails with the project name underneath, which is pretty vague. Now you can find a short description of each project and which languages/libraries/framework I used to write them. My blog page didn't have much going on, just a large image that took up most of the page. It's now been replaced by a much smaller image so you can see the most recent post without having to scroll down. Nothing drastic and still a work in progress, but it now looks more organized and up-to-date!"},
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
var rawMarkup = marked(this.props.blogPost.body, {sanitize: true});
return (
 <p className="entry-details" dangerouslySetInnerHTML={{__html: rawMarkup}} />
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

var AllBlog = React.createClass({
    render: function() {
	return (<div>{postElements}</div>);
    }
});

var exports = {
    handler: AllBlog
};

export default exports;
