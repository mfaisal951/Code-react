import React, {useState} from 'react';

export default function Textbox(props) {
  const [text, setText] = useState('enter your text here');
  return (
    <div className="container">
        {/* <label htmlFor="myBox" className="form-label">{props.heading}</label> */}
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows={8} placeholder="Enter your text here to analyze..."></textarea>
        <div className="form-text">
          Enter the text you want to analyze above.
        </div>
         
        <button className="btn btn-primary">convert into uppercase</button>
    </div>
  );
}
