"use client"

import { MdArrowDropDown} from "react-icons/md";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {  GiShoppingBag } from "react-icons/gi";

import { FaPlus } from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion"
import { VscAccount } from "react-icons/vsc";
import SearchOverlay from "../components/searchbar";
import {


  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx"
import * as React from "react"
// import ""  
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";



const variants={
  Hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{

      staggerChildren:0.1,
      delaychildren:0.2
    }
  }
}

const text = [
  "50% Sale upto Shopping Rs.2000",
  "Free Delivery upto shopping Rs3000",
  "Exciting Gifts for regular customers"
]
export default function NavBar() {
const pathname=usePathname()
const [hide,setishide]=useState(false)

useEffect(() => {
  const handlescroll = () => {
    if (window.scrollY > 30) {
      setishide(true);
    } else {
      setishide(false);
    }
  };

  window.addEventListener("scroll", handlescroll);

  return () => {
    window.removeEventListener("scroll", handlescroll);
  };
}, []);

const [sliderRef]=useKeenSlider<HTMLDivElement>(
  {
    loop:true
  },[
    (slider)=>{
      let timeout:ReturnType<typeof setTimeout>
       let mouseOver = false
         function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
              slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
         slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
    }
  ]
)


  
const [isdropdown,setisdropdown]=useState(false)


 
  const [open, setIsOpen] = useState(false)


  return (
<div className="flex flex-col justify-between items-center">
 {pathname=="/"&&(
 <div
  ref={sliderRef}
  className={`keen-slider bg-gray-400 w-full flex items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out ${
    hide ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-36"
  }`}
>
  {text.map((t, index) => (
    <p
      key={index}
      className="keen-slider__slide text-center text-white font-semibold text-sm md:text-lg"
    >
      {t}
    </p>
  ))}
</div>
 )}




 <div className={`fixed w-full bg-black flex justify-between z-20  ${pathname=="/"?(hide?"top-0":"top-9"):"top-0"}`}>


      {/* for lrger screens */}
      <div className="hidden lg:flex    flex-row items-center justify-between  z-50">
        <div className="flex flex-row items-center  p-2 gap-4">
          <Link href="/"><h1 className="font-extrabold bg-clip-text uppercase  text-transparent bg-gradient-to-r from-slate-300 via-slate-500 to-slate-700 text-xl sm:text-2xl md:text-3xl lg:text-5xl">Perfume</h1></Link>
          <div className=" flex flex-col items-center">
            <ul className="flex flex-row items-center  p-2 gap-4 m-2">
              <Link href="/"><li className="text-white font-medium underline text-lg">Home</li></Link>
              <Link href="/bestselling"><li className="text-white font-medium underline-offset-1 hover:underline text-lg">Best Seller</li></Link>
           <div className="relative">
            <div onClick={()=>setisdropdown(!isdropdown)} className="text-white font-medium underline-offset-1 hover:underline text-lg flex flex-row items-center g"> <label >Fragnances</label><MdArrowDropDown className="text-2xl"/> </div>
                  {
                isdropdown &&
                (
                  <div>
                    <div className="bg-black absolute left-0 mt-1 z-50">
  <ul className="flex flex-col items-center justify-center gap-2 px-4 py-4 m-2 transform transition-all duration-300 ease-out">
<Link href="/men"><li className="text-white underline-offset-0 hover:underline text-lg">Men</li></Link>
<Link href="/women"><li className="text-white underline-offset-0 hover:underline text-lg">Women</li></Link>
  </ul>
</div>
<div onClick={()=>setisdropdown(false)} className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>
                  </div>

                )
                
              }
             
            </div>   
           
              <Link href="/outlets"><li className="text-white font-medium underline-offset-1 hover:underline text-lg">Our Outlets</li></Link>
            </ul>
         
          </div>
        </div>

      </div>



      {/* for smaller screens */}
      <div className="flex  lg:hidden flex-row items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsOpen(!open)} className=""><GiHamburgerMenu className="z-40 fill-white h-6 w-6" /></button>
          <h1 className="font-extrabold bg-clip-text uppercase text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 text-xl sm:text-2xl md:text-3xl lg:text-5xl">Perfume</h1>
        </div>



        {open && (
          <div onClick={() => setIsOpen(!open)} className="fixed inset-0 bg-opacity-30 z-40 lg:hidden">
            <div
              className="absolute inset-0  opacity-30 h-screen"
            ></div>
          </div>
        )}


      </div>
      <div className={`fixed w-60 h-screen top-0 left-0   bg-gray-50  flex-col transform transition-transform duration-300 ease-in-out z-40 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <button className="top-0 left-0 fixed p-4" onClick={() => setIsOpen(!open)}><RxCross2 className="w-6 h-6" /></button>
        <motion.div
    initial="hidden"
    animate="show"
    variants={variants}
        
        
        >
        <ul className="flex flex-col items-start justify-center p-2 space-y-4 w-full mt-24">
        
          <li className="border-t-2 w-full " />

         <Link href="/"><li className="t font-semibold ">Home</li></Link>
          <li className="border-t-2 w-full" />
          <Link href="/bestselling"><li className=" font-semibold">Best Seller</li></Link>
          <li className="border-t-2 w-full" />

  <li className=" w-full ">
    <div className="flex flex-col w-full">
<div className="flex flex-row items-center justify-between">
    <label  className="font-semibold text-gray-600 ">Fragrances</label>
   <button className="focus:outline-none" onClick={()=>setisdropdown(!isdropdown)}> <FaPlus className={`transform transition-transform text-gray-600 duration-200 ${isdropdown ? "rotate-45" : "rotate-0"}`} /></button>
   </div>
   {
    isdropdown &&(
      <AnimatePresence>
       <motion.div
        initial={{opacity:0,y:-10}}
        animate={{opacity:1,y:10}}
        exit={{opacity:0,y:-10}}
        transition={{duration:0.7,ease:"easeIn"}}
        
        
        >
      <div className="left-0 top-full w-full z-10 ">
          <ul className="flex flex-col items-start justify-center gap-2 px-4 py-4 m-2">
<Link href="/men"><li className="text-gray-600 underline-offset-0 hover:underline text-lg">Men</li></Link>
<Link href="/women"><li className="text-gray-600 underline-offset-0 hover:underline text-lg">Women</li></Link>
  </ul>
      </div>
      </motion.div>
      </AnimatePresence>
    )
   }
 
    </div>
    

  </li>
    
    <li className="border-t-2 w-full" />
          <Link href="/outlets"><li className=" font-semibold">Our Outlets</li></Link>
          <li className="border-t-2 w-full" />
        </ul>
        </motion.div>
      </div>
      

      <div className="flex   gap-3 m-4">
        {/* <button><CiSearch className="fill-white h-8 w-8 font-bold scale-100 hover:scale-105"/></button> */}
        <SearchOverlay />
        <SignedOut>
          < SignUpButton mode="modal">
            <button>
              <VscAccount className="fill-white h-8 w-8 font-bold scale-100 hover:scale-105" />
            </button>
          </ SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
<button className="snipcart-checkout">
  <GiShoppingBag className="fill-white h-8 w-8 font-bold scale-100 hover:scale-105" />
</button>
    

    
        

      </div>







    </div>
</div>





   





  )
}

// className={`fixed top-0 right-0  w-52 h-screen  transform transition-transform duration-300 ease-in-out z-50${IsOpen ? "translate-x-0" : "translate-x-full"}`}>
