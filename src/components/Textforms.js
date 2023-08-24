import React, {useState} from 'react'

export default function Textforms(props) {
    const handleupClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");   
    }

    const handleLoClick = () =>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText)    
        props.showAlert("Converted to Lowercase!","success");   
    }

    const handleClearClick = () =>{
        console.log("Lowercase was clicked" + text);
        let newText = '';
        setText(newText)   
        props.showAlert("Cleared Text!","success");   
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    const handleCopyClick = () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text!","success");   
    }

    const handleExtraSpaces = () => {
        console.log("Clear Text");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces!","success");    

    }



    const[text,setText] = useState (''); 
    // text = "new text"; // Wrong way to change the state
   // setText("newText"); // Wrong way to change the state
  
  
   return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }} >
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
   color: props.mode==='dark'?'white':'#042743'  }} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupClick} >Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
<div className = "container my-3" style={{color: props.mode==='dark'?'white':'#042743' }}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length} Minutes Read </p>
    <h1>Preview</h1>
    <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
</div>
    </>
  )
}
