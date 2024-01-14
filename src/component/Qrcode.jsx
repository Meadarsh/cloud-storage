import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { ToastContainer,toast } from 'react-toastify'
const Qrcode = ({data, id}) => {
    const[deleting,setDeleting]=useState(false)
   async function DeleteFile(){
    setDeleting(true);
    toast.loading("Deleting")
        try {
            const uploadResponse = await fetch(`https://driveapi-tz5l.vercel.app/api/v1/users/delete/${id}`,{
                method: "DELETE",
            }) 
            if(uploadResponse.ok){
                window.location.reload();
                }else{
                    throw Error('Server response not ok');}
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='moreopt-main'>
        
        <div>
        <div className="qr">
       <QRCode
    size={406}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={data}
    viewBox={`0 0 256 256`}
    />
    
       </div>
       <p className='qrp'>Scan to download</p>
        </div>
      <div className="delete-button" onClick={deleting?null:DeleteFile}>
        <h1>Delete</h1>
      </div>
    </div>
  )
}

export default Qrcode