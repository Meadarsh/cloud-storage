import Home from './home'
import './style/login.css'
import './App.css'
import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import Selection from './pages/selection'
import RegisterPage from './pages/register'
import { BrowserRouter,Outlet,Route, Routes } from 'react-router-dom'
function App() {
 const[verified,setVerified]=useState(true)
    async function Verification() {
    try {
      const auth = await fetch("https://driveapi-tz5l.vercel.app/api/v1/users/", {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      if(auth){
      const data = await auth.json();
      setVerified(data.auth)
        return data
      
    }

    } catch (error) {
     return console.log("Fetch error:", error);
    }
  }
  const data= Verification()
  
  return (
    <>
<BrowserRouter>
<Outlet/>
<Routes>
<Route path='/' element={verified?<Home data={data}/>:<Selection/>}/>
<Route path="login" element={verified?null:<LoginPage />}></Route>
<Route path="/registration" element={verified?null:<RegisterPage />}></Route>
</Routes>

</BrowserRouter>
   
    </>
  )
}

export default App
