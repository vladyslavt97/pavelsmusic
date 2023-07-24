"use client"
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { motion } from "framer-motion"
import links from "../links.json"


export default function Home() {
  return (
    <main className='text-2xl flex flex-col justify-center items-center bg-black min-h-screen'>
      <Header/>

      <div className="flex justify-center flex-col items-center">
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        className='text-white text-bold text-[40px] sm:text-[50px] uppercase'>Pavels/Music</motion.p>

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
          

          {/* 

          <Link href=""><Image src="" width={150} height={100} alt="youtube" className="py-1" loading="eager"/></Link> */}
        </div>
      </div>
      
    </main>
  )
}
