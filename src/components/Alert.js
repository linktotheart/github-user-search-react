import React from 'react'

export const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert mb-3 alert-${alert.type}`}>
              <i className="fas fa fa-info-circle"></i>  {alert.msg}
            </div>
        )
    )
}
