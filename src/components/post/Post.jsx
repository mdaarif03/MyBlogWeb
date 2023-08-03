import React from "react";
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img 
        className="postImg" 
        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="Not found" 
        />
        <div className="postInfo">
          <div className="postCast">
          <span className="postCast">Music</span>
          <span className="postCast">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus temporibus expedita inventore reiciendis tenetur?
    </p>
   </div>
  )
}
