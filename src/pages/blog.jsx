import * as React from "react";
import Blogs from "../components/blogs.jsx"
import POSTS from "../articles/posts.json";

console.log(POSTS);


export default function Blog() {
  
  
  
  return (
    <>
      <title>Blog</title>
      <div className="hero-image blog-hero">
        <div className="hero-text">
          <h1 className="hero-title">Blog</h1>
          <p id="hero-paragraph">Keep up to date with the happenings on the team</p>
        </div>
      </div>
      <div className="blog">
        <Blogs data={POSTS}/>
      </div>
    </>
  );
}
