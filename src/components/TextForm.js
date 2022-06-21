import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter your text');

  const handleupClick = () => {
    console.log("Uppsercase button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to uppercase!","success");
  }

  const handlelowCase = () => {
    console.log("Lowercase button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to lowercase!","success");
  }

  const handleEncoder = () => {
    console.log("URL Encoder button clicked");
    let newText = encodeURIComponent(text);
    setText(newText);
    props.showAlert("URL has been encoded!","success");
  }

  const handleDecoder = () => {
    console.log("URL Decoder button clicked");
    let newText = decodeURIComponent(text);
    setText(newText);
    props.showAlert("URL has been decoded!","success");
  }

  const handleclearText = () => {
    console.log("Clear button clicked");
    let newText = '';
    setText(newText);
    props.showAlert("Text field is clean!","success");
  }

  const handlespeak = () => {
    console.log("Speak button clicked");
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
    props.showAlert("Speaking!","success");
  }

  const handleBase64 = () => {
    console.log('Base64 button clicked');
    let newText = btoa(text);
    setText(newText);
  }

  const handleCopy = () => {
    console.log('I am copy');
    var newText = document.getElementById("my-box");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard!","success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed all the extra spaces from the sting/s!","success");
  }

  const handleonChange = (event) => {
    console.log('On Change');
    setText(event.target.value);
  }

  return (
    <>
      <div className='comtainer' style={{color:props.mode ==='dark'?'white':'#042743'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='dark'?'#221a1a':'white' , color:props.mode ==='dark'?'white':'#042743'}} onChange={handleonChange} id="my-box" rows="6" placeholder='Enter Text'></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleupClick} style={{color:props.mode==='dark'?'white':'black'}}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handlelowCase} style={{color:props.mode==='dark'?'white':'black'}}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleEncoder} style={{color:props.mode==='dark'?'white':'black'}}>Encode URL/Text</button>
          <button className="btn btn-primary mx-1" onClick={handleDecoder} style={{color:props.mode==='dark'?'white':'black'}}>Decode URL/Text</button>
          <button className="btn btn-primary mx-1" onClick={handleclearText} style={{color:props.mode==='dark'?'white':'black'}}>Clear</button>
          <button className="btn btn-primary mx-1" onClick={handlespeak} style={{color:props.mode==='dark'?'white':'black'}}>Speak</button>
          <button className="btn btn-primary mx-1" onClick={handleBase64} style={{color:props.mode==='dark'?'white':'black'}}>Encode Base64</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy} style={{color:props.mode==='dark'?'white':'black'}}>Copy Text</button>
          <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpace} style={{color:props.mode==='dark'?'white':'black'}}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Text summary</h2>
        <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
        <p>{0.008 * text.split(" ").length} Will take minutes to read</p>
        <h2>Preview</h2>  {/*If you wangt to preview what are you typing*/}
        <p>{text.length>0?text:"Enter something to the text box to priview"}</p>
      </div>
    </>
  )

}
