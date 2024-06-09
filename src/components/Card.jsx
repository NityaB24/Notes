import React from 'react';
import { motion } from "framer-motion";
function Card({ data, reference }) {

    return ( 
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-7 py-8 overflow-hidden'
        >

            <h5 className='text-[#cdea66] font-semibold'>Title: {data.title}</h5>
            <p className='text-sm leading-tight mt-5 font-semibold text-zinc-500'>Description:</p>
            <p className='text-sm leading-tight font-semibold flex flex-wrap text-wrap '>{data.desc}</p>
        </motion.div>
    );
}

export default Card;