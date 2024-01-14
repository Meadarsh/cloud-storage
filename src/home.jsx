import React, { useState,useEffect } from 'react'
import Sidepannel from './component/sidepannel'
import Card from './component/Card'
const Home = ({data}) => {
  const [files,setFiles]=useState([])
  const [storage,setStorage]=useState()
  
useEffect(() => {
    // Assuming dataPromise is a Promise that fetches the data
    data.then((resolvedData) => {
      // Update the state with the resolved data
      setFiles(resolvedData.files);
      setStorage(resolvedData.storage)
    });
  }, [data]);
  return (
    <div className='main'>
      <div className="render-div">{files.map((e,index) => <Card key={index} data={e} />)}</div>
      <Sidepannel data={storage} />
        <h1 className='docssign'>
            Stack
        </h1>
    </div>
  )
}

export default Home