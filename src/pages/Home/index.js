import React, { useEffect } from 'react'
import useAuth from '../../hooks/userAuth'
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const {user}=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  },[user]);
  
  return (
    <div >
        <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
    </div>

  )
}
