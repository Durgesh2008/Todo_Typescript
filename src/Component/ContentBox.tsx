import React, { useState } from 'react'
import InputField from './InputField'
import "../Style/ContentBox.css"
import Card from './Card'
import EditInput from './EditInput'

interface Todo{
  Title:string,
  Text:string
}

const ContentBox:React.FC = () => {
  const [Title, setTitle] = useState<string>("")
  const [Text, setText] = useState<string>("")
  const [Todos, setTodos] = useState<Todo[]>([])
  const [Addtodo, setAddtodo] = useState<string>("noNode")
  const [Edit, setEdit] = useState<string>("noedit")
  const [editindex, seteditindex] = useState<number>(0)
  

const handleSave=()=>{
  
  setTodos(current=>[...current,{
    Title,Text
  }])
 
setAddtodo("noNode")
}
const handleEdit=()=>{
const todo={
  Title,Text
}
Todos.splice(editindex,1,todo)
setEdit("noedit")
}
  return (
    <>
    <div className="sec_name">
        Section
      </div>
     <hr/>
     <div className='conatiner_Box'>
      
    <div className='section'>
      <div className="card">
        <div className="card_conatiner">
          <Card header={"List:things to buy"} Todos={Todos} setAddtodo={setAddtodo} seteditindex={seteditindex} setEdit={setEdit} />
        </div>
      </div>
    </div>
   {
    Edit==="noedit"? <div className="inputfield"><InputField Title={Title} setTitle={setTitle} Text={Text} setText={setText} handleSave={handleSave} Addtodo={Addtodo} /></div>:
    <div className="inputfield"><EditInput Title={Title} setTitle={setTitle} Text={Text} setText={setText} handleEdit={handleEdit} Edit={Edit}/></div>
   }
  </div>
    </>
  
    
  )
}

export default ContentBox