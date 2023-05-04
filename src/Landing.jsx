import React, { useEffect } from 'react'
import { useState } from 'react'
import {uaseEffect} from 'react'
import Axios from 'axios'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'



const Landing = () => {
  const navigate = useNavigate()
  const [Arr,SetArr]=useState([])
const[Load,SetLoad]= useState(false)


  const FetchAllAPi=async()=>{


    SetLoad(true)
    await Axios.get("")
    .then((res)=>{
      console.log(res.data.students)

      let Newent=res.data.students;
      const Newarr=[]
      for (let i=0;i<Newent.length;i++)
      {
        Newarr.push(Newent[i])
    
      }
      console.log(Newarr)

      SetArr(Newarr)


     

    })
    .catch((err) =>console.log(err))


    SetLoad(false)
  }


const MoveToListPage=()=>{
navigate('/list')
}

useEffect(()=>{
  FetchAllAPi()

},[])
  return (
<>

{ Load ? <Loader/> :  <section  className='w-full h-screen flex justify-center items-center '>
  <div onClick={MoveToListPage}  className='cursor-pointer w-[40%] h-[40%] rounded-md flex flex-col justify-center items-center bg-green-800 text-white'>
    <span className='text-[50px] font-bold '> Students</span>
    <span className='text-[50px] font-bold '> {Arr.length}</span>
  </div>



</section>}




</>


  )
}

export default Landing