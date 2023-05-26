import React from 'react'
import '../Style/Input.css'
import {BiArrowBack} from "react-icons/bi"

interface todo{
  title:string,
  text:string
}
interface Props{
  Title:string,
  Text:string,
  setTitle:React.Dispatch<React.SetStateAction<string>>,
  setText:React.Dispatch<React.SetStateAction<string>>,
  Addtodo:string,
  handleSave: () => void
}
const InputField:React.FC<Props>= ({Title,setTitle,Text,setText,handleSave,Addtodo}) => {

  return (
   <> 
  <div className={Addtodo==="noNode"?'view':'input_container'}>
 <div className="inpt_sec">
  <BiArrowBack className='icon'/>
  <h4>Input The field</h4>
 </div>
  <input value={Title} className="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder='Todo Title'/>
   <textarea value={Text} onChange={(e)=>{setText(e.target.value)}} rows={6} id="textArea" placeholder='Todo Description' />
   <button className='btn' onClick={handleSave}>Save</button>
  </div>
   </>
  )
}

export default InputField