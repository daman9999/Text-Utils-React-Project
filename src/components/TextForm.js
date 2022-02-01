import React, { useState } from 'react'

export default function TextForm(props) {

    const[text,setText] = useState("");
    
    let textColor = {color:((props.mode==="light")?"black":"white")}   ;
    
    const handleCapitalize = () => {
                    const arr = text.split(/\s+|\n+/);
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const str2 = arr.join(" ");
            setText(str2);

            props.showAlert("Success text is Capitalized","success")
    }

    const handleTextArea = (event) => {
        setText(event.target.value);
    }

    const handleSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Success Spaces removed from text","success")
    }


    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Success text to Upper Case","success")
    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Success text copied to Clipboard","success")
        
    }
    
    const handleLoClick= ()=>{
        setText(text.toLowerCase());
        props.showAlert("Success text to Lower Case","success")    
    }
    
    const handleClearClick= ()=>{
        setText("");
        props.showAlert("Success text is Cleared","success")
    }
    
    
    
  return (
    
    <div className="container" style={textColor}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea placeholder="Enter the text..." value={text} onChange={handleTextArea} style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="dark"?"#161515":"white"}} className="form-control my-4" id="textbox" rows="8"></textarea>
        </div>
        
        <div className= {`btn-group${window.screen.size<744?"":"-vertical"}} `} role="group" aria-label="Basic example">
        <button type="button" disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary btn-lg mx-2 my-2">To Upper Case</button>
        <button type="button" disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary btn-lg mx-2 my-2 ">To Lower Case</button>
        <button type="button" disabled={text.length===0} onClick={handleCapitalize} className="btn btn-primary btn-lg mx-2 my-2 ">Capitalize Inline</button>
        <button type="button" disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary btn-lg mx-2 my-2 ">Clear Text</button>
        <button type="button" disabled={text.length===0} onClick={handleCopy} className="btn btn-primary btn-lg mx-2 my-2 ">Copy Text</button>
        <button type="button" disabled={text.length===0} onClick={handleSpace} className="btn btn-primary btn-lg mx-2 my-2 ">Remove Spaces</button>
        </div>
        <div className="container  my-4" style={textColor} >
            <span style={{display: "flex",justifyContent:'space-between'}}><h5>Text Summary:</h5><i> {(text.split(" ").filter((element)=>{ return element.length!==0}).length)} words and {text.length} characters</i></span>
            <em> Reading length {(text.split(" ")[0]==="")?0:(0.008*text.split(" ").length).toPrecision(1)}  Minutes</em>
            <h3 className="my-2">Preview</h3>
            <div className="card" >
            <div className="card-body" id="textbox" style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="dark"?"#161515":"white"}}>
            
                <em >{text.length>0?text:"Enter something in the text above to preview text here"}</em>
            </div>
            
            </div>    
            
            

        </div>
    </div>
    
  )
}
