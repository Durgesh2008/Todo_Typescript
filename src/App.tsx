
import './App.css';
import React, {  useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HiOutlineMenu} from "react-icons/hi"
import Sidebar from './Component/Sidebar';
import ContentBox from './Component/ContentBox';
import Home from './Component/Home';

const App:React.FC= () => {
  const [Clickarrow, setClickarrow] = useState<string>("backword")
  const ForwordArrowclick=()=>{
    setClickarrow("forword")
      
 }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/' element={
         <div className="container">
         <div className={Clickarrow==="backword"?'View':'sidebar'}><Sidebar Clickarrow={Clickarrow} setClickarrow={setClickarrow} /></div>
         <div className={Clickarrow==="backword"?"menu":'View'} onClick={ForwordArrowclick}> <HiOutlineMenu  /></div>
         <div className={Clickarrow==="backword"?'wide':'content'}><ContentBox/></div>
        
       </div> 
      } />
    </Routes>
   
    </BrowserRouter>
    
  )
}

export default App