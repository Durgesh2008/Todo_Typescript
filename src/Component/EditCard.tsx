import React from 'react'
import {FiEdit2,} from "react-icons/fi"
import {TbCoinYuan} from "react-icons/tb"
interface Todo{
  Title:string,
  Text:string
}
interface Props{
  todo:Todo,
  keyIndex:number,
  seteditindex: React.Dispatch<React.SetStateAction<number>>,
  setEdit: React.Dispatch<React.SetStateAction<string>>
}

const EditCard:React.FC<Props>= ({todo,keyIndex,seteditindex,setEdit }) => {
  return (
    <div className="card_content">
        <div className="addcard">
          <div className="sec_1">
            <div className="sec_1_1">
              <div className="icon">
             <TbCoinYuan/>
            </div>
           <span className="title">
            {todo.Title}
           </span>
          </div>
          <p className='para'>{todo.Text}</p>
        </div>
       
      </div>
      <div className="sec_2">
          <FiEdit2  onClick={()=>{seteditindex(keyIndex);setEdit("editthecard")}}/>

        </div>
    </div>
  )
}

export default EditCard