import React from 'react'
import Left from './Left'
import Right from './Right'

function Section1() {
  return (
    <div className='bg-gray-100 h-screen flex justify-between p-10 py-35'>
        <div className="left w-45/100">
            <Left />
        </div>
        <div className="right w-55/100 mr-2">
            <Right />
        </div>
        
        
    </div>
  )
}

export default Section1
