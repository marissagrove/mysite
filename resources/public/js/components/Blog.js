import React from 'react';
import marked from 'marked';

var blogPosts = [{title: "Node Noob", body: "Navigating the world of node as a noob has not been a smooth road. I’ve spent countless hours trying to maintain a successful environment and tracking down errors, it’s included so much googling/stack overflowing/github issuing. The silver lining, I hope, is that I’ll come to recognize these issues much quicker in the future. That has to be true, or else I don’t know how people maintain their sanity. After dealing with the complications of embedding my Twitter timeline with React to my site I decided to turn it into an npm package so other people wouldn’t have to bother with it. I thought it would be smooth sailing, I mean I already had the code, the tweaking should be minimal! Tsk-tsk had I learned nothing from my experiences with node… Few things seem to just seamlessly work from the beginning, and the problem solving can turn into quite the rabbit hole. I have the timeline component rendering, but now there is a problem with my code that waits for the iframe to load and then changes the set styles. Then trying to develop my package locally with my site introduced a whole set of fresh problems. It’s great though right? With the headache these issues cause I’m more likely to recognize their solution much quicker the next time around, fingers crossed."},
		 {title:"Embedding my Twitter Timeline", body: "Today I embedded my Twitter timeline to my homepage. There were a few issues I ran into using React concerning the loading order of the script tag Twitter provided, but React's componentDidMount and componentWillUnmount lifecylce methods solved that problem. Styling the iframe was a bit of extra work, first pulling the original styles out with JS and then setting the values. I also had an issue with the loading order, the fix being that the iframe has to be loaded before I could manipulate the JS. I wrote a var `twitterIsFinshedLoading` that checks if the iframe is loaded, then an if statement that checks if `twitterIsFinshedLoading` is true and then inserts the new styles, else the function calls itself via `window.setTimeout` every 100 milliseconds until true. It took a bit more time than I expected, but I think it would be a really cool npm package to write, I’ll have to knock that out next."},
		 {title: "Testing in Angular", body: "I started going through the AngularJS tutorial this evening and in the first few steps testing is covered. Unit tests for testing controllers and components using Jasmine and Karma (Karma simultaneously runs tests for Chrome and Firefox which is pretty awesome), and end-to-end tests for testing DOM manipulation with Protractor. Writing tests in Angular is pretty slick, it’s so simple that it’s almost enjoyable! Testing is a cornerstone of development and I haven’t been exercising good testing habits with my personal work, so these first few steps have been enlightening and inspiring for my future work habits. I’m looking forward to checking out Karma and Protractor more thoroughly over the next few days."},
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
		<div className="blog-post">
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
