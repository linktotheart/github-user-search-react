import React from 'react'
import User from './User'
import Spinner from "./Spinner"

const UserList = (props) => {
    
    if (props.loading){
        return <Spinner />
    }

    else {
        return (
            <div className="row">
                {
                    props.users.map(user => {
                        return(
                            <div key={user.id} className="col-md-4 mb-4">
                                <User user={user} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default UserList;