import React from "react";
import './NewsLetterSection.css'
function NewsLetterSection() {
  return (
    <div className="newsLetterSection">
       <div className="headingdiv">
        <h1>Join the Inner Circle</h1>
        <p>Be the first to access exclusive capsule drops and seasonal previews.</p>
       </div>
       <div className="subscribediv">
        <input type="email" placeholder="Your Email Address"/>
        <button>SUBSCRIBE</button>
       </div>
    </div>
  );
}

export default NewsLetterSection;
