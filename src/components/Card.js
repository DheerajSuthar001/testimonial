import React from 'react'

import { RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri";
function Card({ review,previousHandler,nextHandler,surpriseHandler }) {

    return (

        

        <div className='relative h-[300px] '>

            
            <img className='absolute -top-12 left-6 rounded-full w-[90px] z-[25] h-[90px] ' alt='ProfileImage' src={review.image}></img>
            <div className='absolute -top-[3.2rem] z-[20] left-7 rounded-full w-[90px] h-[90px] bg-[#7D66C6] '></div>

            <div className='flex flex-col items-center justify-center py-5 px-3 gap-4'>
            <div className='mt-6'>
                <h2 className='font-bold text-center text-lg'>{review.name}</h2>
                <h3 className='font-light uppercase text-center text-gray-300 text-[0.7rem]'>{review.job}</h3>
            </div>
            <p className='font-bold text-[#7D66C6] text-xl'><RiDoubleQuotesL /></p>
            <p className='text-gray-400 text-center '>{review.text}</p>
            <p className='font-bold text-[#7D66C6] text-xl'><RiDoubleQuotesR /></p>
           
            </div>

        </div>
    )
}

export default Card