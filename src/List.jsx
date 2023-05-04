import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import Loader from './Loader'




const List = () => {

  const [Arr,SetArr]=useState([])
  const[Load,SetLoad]= useState(false)


  const FetchMyData=async()=>{
    SetLoad(true)
    
    await Axios.get('').then((res)=>{
      
    
    console.log(res.data.students)
  if(res.data.students){
    SetArr(res.data.students)
  }
  


  }).catch((err)=>console.log(err))
    
    SetLoad(false)
  }

  useEffect(()=>{

FetchMyData()
  },[])


  return (
  <>
  
  {
Load ? <Loader/>:

<>
{Arr.length<=0 ? <section className='w-full flex-col text-orange-800 font-bold text-[50px] h-screen flex  items-center justify-center kitems-center     '> 
  'NO DATA FOUND' 
  <img className='bg-blend-screen ' src="https://th.bing.com/th/id/OIP.M9094qOCcjA1ie38N1hRaQAAAA?pid=ImgDet&rs=1" alt="" />
</section> :
<section className='w-full bg-gray-400 overflow-y-scroll items-center h-screen flex flex-col '>
<div className='w-full h-[70px] items-center font-bold text-white bg-green-800 text-[30px] '> All Students Details</div>
{Arr && 
Arr.map(
  (ele,index)=><span key={index} className='b-2 my-5 b-green-800 rouned-md p-[10px]  bg-yellow-100 justify-evenly items-center flex  text-[15px] text-green-800 h-[50px] w-4/5'>
<span className='w-[33%] flex justify-center items-center'>{ele.name}</span>
<span className='w-[33%] flex justify-center items-center'>{ele.Class}</span>
<span className='w=-[33%] flex justify-center items-center'>{ele.MobileNumber}</span>
</span>
)
}

</section>




}






</>
  }
  
  
  </>
  )
}

export default List

