import React, { } from 'react'

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
                   <a href={html_url} className="btn btn-light">
                     More 
                   </a>
                </div>
         </div>
      )
}

export default User