
import React from 'react'

export default function About(props) {
  let myStyle = {
      color:props.mode === 'dark'?'white':'black',
      backgroundColor:props.mode ==='dark'? '#161515' : 'white' ,
      border:props.mode === 'dark'?".5px solid ":'.5px ' ,
      borderColor:props.mode === 'dark'?'white':'black'
  };
  return (
    <>

        <div className=" container mx-auto my-5" >
        <h2 style={{color:`${props.mode==='dark'?'white':'black'}`}}>About us</h2>
        <div className="accordion" id="accordionExample"  style={myStyle} >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    About this App
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is an App made with React.js.</strong>This App is made as a word counter and you can do string based manipulations in this App. 
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About the Developer
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Made with ❤️ by Damanpreet Singh .</strong> <br /><span className="my-5 mx-4">Follow me on insta <a href='https://www.instagram.com/daman_preet__singh/'>@Daman_preet__singh</a></span>
      </div>
    </div>
  </div>
  
</div>
        </div>
    </>
  )
}
