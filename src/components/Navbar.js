import PropTypes from 'prop-types';
import './NavBar.css';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
        </li>        
      </ul>

      <div className="pallete " >
       {/* backcolor,btncolor,textcolor */}
       <div className="circle white " onClick={()=>props.togglemode('light')} ></div>
       <div className="circle black " onClick={()=>props.togglemode('dark')} ></div>
          <div className="circle red " onClick={()=>props.togglemode('danger')} ></div>
          <div className="circle green " onClick={()=>props.togglemode('success')}></div>
          <div className="circle yellow " onClick={()=>props.togglemode('warning')}></div>
          <div className="circle blue " onClick={()=>props.togglemode('primary')} ></div>

      </div>
      
    </div>
  </div>
</nav>

    </>
  )
}


Navbar.defaultProps ={
    title:"Enter Title Here",
    about:"Enter the about Here"
};

Navbar.propTypes = {
    title:PropTypes.string,
    about:PropTypes.string,
};