import React from 'react'
import '../App.css'

const FirstComponent = () => {
    return (
        <div className='parent_block'>
            <div className='background'>
               <span className='header_logo'>Actual</span>
               <span className='header_logo'>Crypto</span>
               <span className='header_logo'>Info</span>
                <div className='info_block'></div>
            </div>
        </div>
    )
}

export default FirstComponent
