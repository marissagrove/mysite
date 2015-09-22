import React from 'react';
import marked from 'marked';

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
