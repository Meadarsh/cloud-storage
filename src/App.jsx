import Home from './home'
import './style/login.css'
import './App.css'
import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import Selection from './pages/selection'
import RegisterPage from './pages/register'
import { BrowserRouter,Outlet,Route, Routes } from 'react-router-dom'
import RedirectPage from './pages/RedirectPade'
function App() {
 const[verified,setVerified]=useState(1)
 const[color,setColor]=useState(1)
    async function Verification() {
    try {
      const auth = await fetch("https://driveapi-seven.vercel.app/api/v1/users/", {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
     console.log(auth)
      if(auth){
        const data = await auth.json();
       console.log("hhk",data)
       if(!data.auth){ setColor(3)
        setTimeout(()=>
        setVerified(3),500);
          return null}
      
      if(true){
      const data = await auth.json();
      setColor(2)
       setTimeout(()=>
      setVerified(2),500);
        return data
    }
      }
   
    }
      catch (error) {
      setColor(2)
       setTimeout(()=>
      setVerified(2),500);
     return console.log("Fetch error:", error);
    }
  }
  const data= Verification()
  console.log(data)
  return (
    <>
<BrowserRouter>
<Outlet/>
<Routes>
<Route path='/' element={verified==2?<Home data={data}/>: verified==3?<Selection/>:<LoadingPage color={color} />}/>
<Route path="/login" element={verified==3?<LoginPage />:<RedirectPage/>}></Route>
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
