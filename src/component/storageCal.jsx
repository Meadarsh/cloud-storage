import React, { useEffect, useState } from 'react'
import LoginPage from '../pages/LoginPage'

const StorageCal = ({data}) => {
const [size,setSize]=useState('0 B')
let percent=(data/104857600)*100
console.log("g",percent);
useEffect(()=>{
  


    if((data/1024)>=1024){
        let sizeMb=((data/1024)/1024).toFixed(1);
        setSize(`${sizeMb}MB`)
    }
    if((data/1024)<1024){
    
        setSize(`${((data)/1024).toFixed(2)}KB`)
    }
},[data])
  return (
    <div className='storage-calcu-main'>
    <h2>Storage</h2>
    <div className="progress-bar">
        <div className={`progress w-[${percent}%]`}></div>
    </div>
    <p>Total Space:100MB</p>
    <p>Used:{size}</p>
    </div>
  )
}

export default StorageCal