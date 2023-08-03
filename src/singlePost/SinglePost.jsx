import React from "react";
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="" className="singlePostImg" 
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Aarif</b></span>
          <span className="singlePostDate"> 1 hour ago</span>
          </div>
          <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae nihil soluta! Ducimus numquam magnam quisquam, vero reprehenderit amet voluptas ut sequi, magni vitae iste mollitia quibusdam quidem tenetur velit veritatis deleniti reiciendis itaque facilis possimus corrupti nesciunt? Illum labore voluptates, tempora aspernatur nam alias distinctio non quam deleniti magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sint facilis iusto expedita illum deleniti et qui neque nam accusantium officiis sequi dicta non officia quaerat impedit ullam assumenda eos, odio itaque doloribus. Reiciendis dolor suscipit debitis tempora officiis! Illum saepe rem dolores, possimus nobis quo vitae eaque beatae distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae nihil soluta! Ducimus numquam magnam quisquam, vero reprehenderit amet voluptas ut sequi, magni vitae iste mollitia quibusdam quidem tenetur velit veritatis deleniti reiciendis itaque facilis possimus corrupti nesciunt? Illum labore voluptates, tempora aspernatur nam alias distinctio non quam deleniti magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sint facilis iusto expedita illum deleniti et qui neque nam accusantium officiis sequi dicta non officia quaerat impedit ullam assumenda eos, odio itaque doloribus. Reiciendis dolor suscipit debitis tempora officiis! Illum saepe rem dolores, possimus nobis quo vitae eaque beatae distinctio.</p>
        </div>
      </div>
  )
}
