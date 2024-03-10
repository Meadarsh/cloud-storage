import Home from './home'
import './style/login.css'
import './App.css'
import { useState,useEffect } from 'react'
import LoginPage from './pages/LoginPage'
import Selection from './pages/selection'
import RegisterPage from './pages/register'
import { BrowserRouter,Outlet,Route, Routes } from 'react-router-dom'
import RedirectPage from './pages/RedirectPade'

function App() {
const currentUrl = window.location.href;
 const[verified,setVerified]=useState(1)
 const[color,setColor]=useState(1)
 const[data,setData]=useState([])



   async function Verification() {
 try {

      const auth = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/users/`, {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      if(auth){
        const data = await auth.json();
       console.log("hhk",data)
       // false
       if(!data.auth){ setColor(3)
        setTimeout(()=>
        setVerified(3),500);
          return null}
       // true
      setColor(2)
        setData(data)
       setTimeout(()=>
      setVerified(2),500);
        return ;
      }
   
    }
      catch (error) {
      setColor(2)
       setTimeout(()=>
      setVerified(2),500);
     return console.log("Fetch error:", error);
    }
  }

 
 useEffect(()=>{
    setVerified(1)
  setColor(1)
  Verification()
  console.log('useState',data)
 },[currentUrl])  

   
  return (
    <>
<BrowserRouter>
<Outlet/>
<Routes>
<Route path='/' element={verified==2?<Home Verification={Verification} data={data}/>: verified==3?<Selection/>:<LoadingPage color={color} />}/>
<Route path="/login" element={verified==3?<LoginPage Verification={Verification} />:<RedirectPage/>}></Route>
<Route path="/registration" element={verified==3?<RegisterPage />:<RedirectPage/>}></Route>
</Routes>

</BrowserRouter>
   
    </>
  )
}
const LoadingPage = ({color}) => {
  return (
    <div className='main-loading'>
      <div className='flex items-end'><h1 className='loadingh1'>Stack</h1>
      <div className={`dott ${color==2?'greendot':color==3?'reddot':'whitedot'}`}></div>
      </div>
    </div>
  )
}
export default App
