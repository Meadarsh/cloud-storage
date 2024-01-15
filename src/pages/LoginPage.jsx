import gsap from "gsap";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const notify = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  useEffect(() => {
    gsap.to(".login-inner", {
      opacity: 1,
      duration: 0.6,
    });
  });
  const Login = async () => {
    setLoading(true);
    if (!email || !password){ setLoading(false); return notify("Enter credentials");}
    try { const response = await fetch("https://driveapi-seven.vercel.app/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

   
     
    if(response.ok){
      const data= await response.json()
      console.log(data)
      setLoading(false)
      window.location.reload();
    }else {
      const data= await response.json()
      notify(data.message)
       setLoading(false)
   }
    } catch (error) {
      setLoading(false);
      notify("Somthing wents wrong")
      return console.log("error aaya h", error);
    }
  };

  return (
    <div className="main-login">
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
      <h1>Stack</h1>
      <div className="login-inner">
        <h2 className="mt">
          <span>welcome to </span>Stack
        </h2>
        <div className="register-form">
          <div class="form">
            <input
              class="input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <span class="input-border"></span>
          </div>
          <div class="form">
            <input
              class="input"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />
            <span class="input-border"></span>
          </div>
        </div>
        <div className="submit-button" onClick={Login}>
          {loading ? <div className="loader"></div> : <h1>Login</h1>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
