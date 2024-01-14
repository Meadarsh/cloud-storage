import React from 'react'
import '../style/sidepannel.css'
import UploadButton from './uploadButton'
import StorageCal from './storageCal'
const Sidepannel = ({data}) => {
  return (
    <div className='sidepannel-main text-white'>
        <UploadButton />
        <StorageCal data={data}/>
    </div>
  )
}

export default Sidepannel