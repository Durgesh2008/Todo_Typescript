import React from 'react'
import '../Style/home.css'
import {  Link } from "react-router-dom";
const Home:React.FC = () => {
  return (
    <div className="box">
        <div className="center">
          <h2>Welcome </h2>
        <Link className="btn" to={'/'} >Go to list</Link>
        </div>
    </div>
  )
}

export default Home