import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase', 'success')
    }
    const handleLoClick = ()=>{
        //console.log("uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted Lowercase', 'success')
    }
    const handleOnChange = (event)=>{
       // console.log("On change");
       setText(event.target.value);
    }
    const handleClearClick = ()=>{
        //console.log("clear");
        let newText = "";
        setText(newText);
        props.showAlert('Clear', 'success')
    }
    const handleCopy = ()=>{
        console.log("I am copy")
        let newText = document.getElementById('myBox');
        newText.select();
        // newText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(newText.value)
       // console.log(newText)
    }
    const handleRemoveExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        //console.log(newText)
    }
    
    const[text, setText] = useState('');
    // setText = "HelloTejas";
    return (
        <>
        <div className="container">
            <h4>{props.heading}</h4>
            <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-4">
            <h5>Your text summery</h5>
            <p>{text.split(" ").length - 1} Word and {text.length} Character</p>

            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
