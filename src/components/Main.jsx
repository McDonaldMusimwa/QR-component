import './Main.css'
import code from '../images/code.png'
import React from 'react'

export const Main = () => {
    return (
        <div className='OutLine'>
            <img src={code} alt="" />

            <span className='text'>Improve your front-end
                skills by building projects</span>
            <span className='text2'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level </span>    

        </div>
    )
}
