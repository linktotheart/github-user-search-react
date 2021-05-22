import React, { } from 'react'
import { Link } from 'react-router-dom';

const  User = (props) =>  {
   
      const { login, avatar_url, html_url} = props.user;
      return (
         <div className="card text-center">
               <img 
               src={avatar_url}
               alt=""
               width="80px"
               className="rounded-circle mt-4 mx-auto"
                />
                <div className="card-body">
                   <h3 className="mb-4 card-title">
                      {login}
                   </h3>
                   <Link to={`/user/${login}`} className="btn btn-light">
                     View More 
                   </Link>
                </div>
         </div>
      )
}

export default User