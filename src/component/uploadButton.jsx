import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UploadButton = () => {
  const [loadingToastId, setLoadingToastId] = useState(null);
  const handleFileChange = async (event) => {
  //do something else
    // Access the selected file from event.target.files
    const files = event.target.files[0];
    if(files) setLoadingToastId(toast.loading("Uploading"));
    const formData = new FormData();
    formData.append('files', files);
    try {
      
      const uploadResponse = await fetch("https://driveapi-tz5l.vercel.app/api/v1/users/upload", {
        method: "POST",
        body:formData
      });
      if (uploadResponse.ok) {
        let resp=await uploadResponse.json()
        setLoadingToastId(null)// Dismiss the loading toast
        toast.success(resp.message); // Create a new success toast
        window.location.reload();
        return;
      } else {
        const errorResp = await uploadResponse.json();
        setLoadingToastId(null) // Dismiss the loading toast
        toast.error(errorResp.message); // Create a new error toast
        return;
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (<>
    <ToastContainer
        position="center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <div className="bottom-box">
      <div className="upload-button">
        <FiUpload /> <input type="file" onChange={handleFileChange} />{" "}
        <p>|       Upload</p>
      </div>
    </div>
    </>
  );
};

export default UploadButton;
