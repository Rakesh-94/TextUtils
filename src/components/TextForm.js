import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked: "+ text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
}

const handleCopy = ()=>{
  let text = document.getElementById('mybox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy to Clipboard!", "success");
}

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter the text here");
    // text = "new text" // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"? "grey":"white", color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
           </div>
           <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
           <button className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
           <button className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
           <button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>copy Text</button>
           <button className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} charaters</p>
    <p>{0.008* text.split("").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
