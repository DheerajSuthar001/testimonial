import React, { useState } from 'react'
import Card from './Card'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Testimonial({reviews}) {
    const [index,setIndex]=useState(0);
    function previousHandler(){
        if(index===0){
            setIndex(reviews.length-1);
        }
        else
        setIndex(index-1);
    }
    function nextHandler(){
        if(index===reviews.length-1){
            setIndex(0);
        }
        else
        setIndex(index+1);

    }
    function surpriseHandler(){
        let randomIndex= Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }
  return (
    <div className='bg-white rounded-md '>
         <Card review={reviews[index]}></Card>
         <div className='flex flex-col items-center justify-center py-5 px-3 gap-2'>
         <div>
                <button onClick={previousHandler} className='text-[#7D66C6] mx-2 p-2 font-bold cursor-pointer '> <FaChevronLeft /></button>
                <button onClick={nextHandler} className='text-[#7D66C6] mx-2 p-2 font-bold cursor-pointer '><FaChevronRight /></button>
            </div>
            <button onClick={surpriseHandler} className='rounded-md px-5 py-1 bg-[#7D66C6] text-white'>Surprise Me</button>
         </div>
    </div>
    
)
}

export default Testimonial