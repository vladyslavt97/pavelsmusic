"use client"
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { motion } from "framer-motion"
import links from "../links.json"


export default function Home() {
  return (
    <main className='text-2xl flex flex-col justify-center items-center bg-black h-screen overflow-x-hidden'>
        <motion.div
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 0.8, x: 100}}
        transition={{duration: 10}}
        className="absolute right-0"
        >
          <Image src="/pavelmain.jpg" alt="photo" width={1000} height={1000} className="h-screen object-cover z-0 md:hidden"/>
        </motion.div>

    
      <Header/>


      <div className="flex justify-center flex-col items-center z-10">
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        className='text-white text-bold text-[40px] uppercase mt-10'>Pavels/Music</motion.p>

        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:3}}>
          <h5 className="text-white font-serif text-[20px] mt-10">Listen on </h5>
        </motion.div>



        <div className="flex flex-col items-center">
          {links.map((el, index) => (
            <motion.div
            key={index}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2, delay: el.delay}}>
            <Link href={el.linik}>
              <Image src={el.image} width={el.size} height={100} alt="image" className="py-1"/>
            </Link>
          </motion.div>
          ))}
          

        </div>


      </div>
        
      <motion.h1 
      transition={{duration:3}}
      initial={{opacity: 0}}
      animate={{opacity:1}}
      className="text-white text-sm z-50 absolute bottom-2">pavelkuznetsov.berlin@gmail.com</motion.h1>
      
    </main>
  )
}
