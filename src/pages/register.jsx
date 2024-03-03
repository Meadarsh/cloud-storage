import gsap from "gsap";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
   const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const notify = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  async function SubmitFun() {
    setLoading(true);
    try {
      const response = await fetch("https://driveapi.onrender.com/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: name,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setLoading(false);
         navigate('/');
      } else {
        const data = await response.json();
        notify(data.message);
        setLoading(false);
      }
    } catch (error) {
      notify("Something went wrong");
      setLoading(false);
      console.log("Failed to add data", error);
    }
  }
  useEffect(() => {
    gsap.to(".login-inner", {
      opacity: 1,
      duration: 0.6,
    });
  });

  return (
    <div className="main-login">
      <ToastContainer
        position="top-right"
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
        <h2>
          <span>welcome to </span>Stack
        </h2>
        <div className="register-form">
          <div className="form">
            <input
              className="input"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              type="text"
            />
            <span className="input-border"></span>
          </div>
          <div className="form">
            <input
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="text"
            />
            <span className="input-border"></span>
          </div>
          <div className="form">
            <input
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="text"
            />
            <span className="input-border"></span>
          </div>
        </div>
        <div className="submit-button" onClick={SubmitFun}>
          {loading ? <div className="loader"></div> : <h1>Submit</h1>}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
