import React from "react";
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xMuIOwjliGUPjkzukeWKfw.jpeg" alt="Not found" />
    </div>
  )
}
