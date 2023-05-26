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
  Edit:string,
  handleEdit: () => void
}
const EditInput:React.FC<Props>= ({Title,setTitle,Text,setText,handleEdit,Edit}) => {

  return (
   <> 
  <div className={Edit==="noedit"?'view':'input_container'}>
 <div className="inpt_sec">
  <BiArrowBack className='icon'/>
  <h4>Input The field</h4>
 </div>
  <input value={Title} className="title" onChange={(e)=>{setTitle(e.target.value)}}/>
   <textarea value={Text} onChange={(e)=>{setText(e.target.value)}} rows={6} id="textArea" />
   <button className='btn' onClick={handleEdit}>Save</button>
  </div>
   </>
  )
}

export default EditInput