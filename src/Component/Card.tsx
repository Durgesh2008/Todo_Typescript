import React, { useState } from 'react'
import '../Style/card.css'
import AddCard from './AddCard'
import EditCard from './EditCard'
interface Todo{
  Title:string,
  Text:string
}

interface Props{
  header:string,
  Todos:Todo[],
  setAddtodo:React.Dispatch<React.SetStateAction<string>>,
  seteditindex: React.Dispatch<React.SetStateAction<number>>,
  setEdit: React.Dispatch<React.SetStateAction<string>>
}
const Card:React.FC<Props>= ({header,Todos,setAddtodo,seteditindex,setEdit }) => {

  return (
    <div className="card_container">  
      <div className="cardheader">
        {header}
      </div>
      <AddCard setAddtodo={setAddtodo}/>
      <div className="nodes">
      {Todos.map((todo,index) => (
        
        <EditCard key={index} todo={todo} keyIndex={index} seteditindex={seteditindex} setEdit={setEdit} />
      ))}
      </div>
      
     

     
    </div>

  )
}

export default Card