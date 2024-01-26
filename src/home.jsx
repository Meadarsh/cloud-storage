import React, { useState,useEffect } from 'react'
import Sidepannel from './component/sidepannel'
import Card from './component/Card'
const Home = ({Verification,data}) => {
  const [files,setFiles]=useState([])
  const [storage,setStorage]=useState()
  
useEffect(() => {
  setFiles(data.files)
  }, [data]);
  console.log(files)
  return (
    <div className='main'>
      <div className="render-div">{files?.map((e,index) => <Card key={index} data={e} />)}</div>
      <Sidepannel Verification={Verification} data={data.storage} />
        <h1 className='docssign'>
            Stack
        </h1>
    </div>
  )
}

export default Home
