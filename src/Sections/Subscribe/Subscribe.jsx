import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h1>Subscribe Our Newsletter</h1>
        <div style={{textAlign : "center"}} className='inputcontainer'>
            <input style={{borderRadius : "12px 0 0 12px"}} type="text" placeholder='Name: '/>
            <input type="email" placeholder='Enter your Email'/>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Subscribe