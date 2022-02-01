
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


 import About from './components/About';
function App() {
  const[mode,setMode] = useState("light"); 
  const[alert, setAlert]=useState(null);

  const showAlert = (msg,alert_type) =>{
    setAlert({
      msg:msg,
      type:alert_type
    });

    setTimeout(()=>setAlert(null),1500)
    
  }


  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    

  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    const inputBtns = document.querySelectorAll('.btn');
    inputBtns.forEach(a=>a.style.background="#0e1ed2")
    document.body.classList.add('bg-'+cls);
    if(document.body.classList.contains('bg-'+cls)){
    if(document.body.classList.contains('bg-light')){
      document.querySelector(`#textbox`).style.background="white";
    }
    if(document.body.classList.contains('bg-dark')){
      setMode(`dark`)
      document.querySelector(`#textbox`).style.background="#323232";

    }
    if(document.body.classList.contains('bg-danger')){
    
      document.querySelector(`#textbox`).style.background="#ffe492";
      
    }

    if(document.body.classList.contains('bg-success')){
      
      document.querySelector(`#textbox`).style.background="#77bc9c";
      
    }

    if(document.body.classList.contains('bg-warning')){
      
      document.querySelector(`#textbox`).style.background="#0b6c3f";
      
    }

    if(document.body.classList.contains('bg-primary')){
      
      document.querySelector(`#textbox`).style.background="#62a1fd";
      let btns=document.querySelectorAll(`.btn`);
      btns.forEach(a=>a.style.background="red");

    }

    document.body.classList.contains('bg-dark')?setMode('dark'):setMode('light');
      
    


    };
    showAlert("Success Theme Applied","success");
    
  }



  return (
    <>

        
      <Router>
      <Navbar title="Text Utils " about="About-TextUtils" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert}/>      
          <Routes>
            <Route path="/" element={<><div className="container my-5"><TextForm heading="Write the Text to analyze" mode={mode} showAlert={showAlert}/></div></>}/>
            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
      </Router>




    </>
    
  );
}

export default App;
