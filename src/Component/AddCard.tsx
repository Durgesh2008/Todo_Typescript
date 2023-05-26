import React from 'react'
import {AiFillPlusCircle} from "react-icons/ai"
import {TbCoinYuan} from "react-icons/tb"
import '../Style/cardInner.css'
interface Props{
  setAddtodo: React.Dispatch<React.SetStateAction<string>>
}
const AddCard:React.FC<Props> = ({setAddtodo}) => {
const AddNewTodo=()=>{
  setAddtodo("addnode");
}
  return (
    <>   
    <div className="card_content">
        <div className="addcard">
          <div className="sec_1">
            <div className="sec_1_1">
              <div className="icon">
             <TbCoinYuan/>
            </div>
           <span className="Name">
            Add Todo
           </span>
          </div>
        </div>
       
      </div>
      <div className="sec_2">
          <AiFillPlusCircle onClick={AddNewTodo}/>
        </div>
    </div>
   
    </>
  )
}

export default AddCard