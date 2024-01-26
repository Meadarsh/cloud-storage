import React from 'react'
import '../style/sidepannel.css'
import UploadButton from './uploadButton'
import StorageCal from './storageCal'
const Sidepannel = ({Verification,data}) => {
  return (
    <div className='sidepannel-main text-white'>
        <UploadButton Verification={Verification} />
        <StorageCal data={data}/>
    </div>
  )
}

export default Sidepannel
