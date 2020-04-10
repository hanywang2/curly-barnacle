import React from 'react';
import './Window.css'

function Window() {
    return (
        <div className="container">
  <div className="row">
    <div className="column left">
      <span className="dot" style={{background: "#ED594A"}}></span>
      <span className="dot" style={{background: "#FDD800"}}></span>
      <span className="dot" style={{background: "#5AC05A"}}></span>
    </div>
    <div className="column middle">
      <input type="text" value="https://www.gmail.com" />
    </div>
  </div>

  <div className="content" style={{textAlign: 'center'}}>
    <h3>Your next class INFO 2950 will start in 10 minutes at 1:25 PM</h3>
    <p>Zoom Link: 
        <a href="https://cornell.zoom.us/j/710144471?pwd=YjlNQVlJbURoeGJ1NXRHUUl2SkJHdz09"> https://cornell.zoom.us/j/710144471?pwd=YjlNQVlJbURoeGJ1NXRHUUl2SkJHdz09</a>
    </p>
  </div>
</div>
    )
}

export default Window