import React from 'react'

const  Navbar = (props) => {
   return (
     
          <nav className="navbar navbar-light bg-light py-2">
             <div className="container">
               <h4 className="navbar-brand mb-0 h5"> 
                  <i className={props.icon}></i>
                  {props.title} 
               </h4>
               {props.children}
             </div>
          </nav>

   )
}

export default Navbar
 