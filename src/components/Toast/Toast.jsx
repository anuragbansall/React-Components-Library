import React from 'react'
import './Toast.css'

function Toast({children}) {

  return children ? (
    <div className='toast-container'>
        {children}
    </div>
  ) : null
}

export default Toast


// How to use : 

/*
    <Toast>
        <Toast.Popup variant="success" timer="5000">
            <Toast.Title>This is a title</Toast.Title>
            <Toast.Message>This is a message please notice</Toast.Message>
        </Toast.Popup>
    </Toast>
*/