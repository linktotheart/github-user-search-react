import React from 'react'
import {Link } from 'react-router-dom'


const  Navbar = (props) => {
   return (
     
          <nav className="navbar navbar-light bg-light py-2">
             <div className="container">
               <h4 className="navbar-brand mb-0 h5"> 
                  <i className={props.icon}></i>
                  {props.title} 
               </h4>
               {props.children}

               <div className="nav ml-auto">
                  <Link to="/" className={`nav-link ${Link.isExact ? "active" : ""}`}>Home</Link>
                  <Link to="/about" className="nav-link">About</Link>
               </div>
             </div>


          </nav>

   )
}

export default Navbar
 