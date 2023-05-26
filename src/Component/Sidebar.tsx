
import {AiFillHome} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"
import {FcTodoList} from "react-icons/fc"
import {  Link } from "react-router-dom";
import "../Style/Sidebar.css"
import React from "react"
interface Props{
  Clickarrow:string,
  setClickarrow:React.Dispatch<React.SetStateAction<string>>
  
} 
const Sidebar:React.FC<Props>= ({Clickarrow,setClickarrow}) => {
  const BackArrowclick=()=>{
    setClickarrow("backword")
   
  }


  return (
    <>
    <div className={'sidebar_container'}>
    <div  className="header">
     <div className='name'>  
     <span className='Nicon'>N</span>
     <span className="Header_text">Name</span>
     </div>
    
   <RxCross2   className="cross" onClick={BackArrowclick} />

    </div>
    <div className="sections">
      <Link   to={"/home"}>
     <div className="sub_section">
         <span className="icon">
             <AiFillHome/>
         </span>
         <span className="text">Home</span>
     </div>
     </Link>
     <Link to={"/"} >
     <div className="sub_section ">
         <span className="icon">
             <FcTodoList/>
         </span>
         <span className="text">Todo</span>
     </div>
     </Link>
    </div>
 
     </div>

    </>
 
  )
}

export default Sidebar