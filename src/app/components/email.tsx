"use client"
import Image from "next/image"
import image1 from "../images/card1.jpg"
import image2 from "../images/card2.jpg"
import image3 from "../images/card3.jpg"
import Link from "next/link"
import { useState } from "react"
import sendEmail from "@/lib/resend"

const cards=[
    {
id:0,
heading:"Best Seller",
image:image1,
desc:"Get the best fragrances in town at discounted prices.",
button:"Get Yours",
stylings:"bg-black hover:bg-white text-white hover:text-black",
link:"/bestselling"
},
{
    id:1,
        heading: "Understanding Fragrance Notes",
        image:image2,
desc:"Understanding Frangnances Notes is itself a skill.",
button:"Read More",
stylings:"bg-white hover:bg-black text-black hover:text-white",
link:"/blogs/fragrance-notes-explained"
},

{
    id:2,
        heading: "Perfume Trends in 2025",
        image:image3,
desc:"Loking for perfume trends of 2025 so for sure you dont miss this",
button:"Read More",
stylings:"bg-white hover:bg-black text-black hover:text-white",
link:"/blogs/top-perfume-trends-2025"
}
]
export default function Email(){

    const [formData,setisformdata]=useState({
        email:"",
        })
        
   const handlesubmit=async ()=>{
    const email=formData.email

    if (email){
        try{
            await sendEmail(email)
            console.log("Email sent successfully");
            

        } catch (error) {
      console.error("Error sending email:", error);
    }
      
    }else {
        console.error("Enter a valid Email")
    }
   }
    return (
<div className="flex w-full flex-col">
    <div className="w-full border-t-2 border-gray-200 mt-10 mb-10"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 px-2 py-2">

{
    cards.map((card)=>(
        <div key={card.id} className={`relative bgimage flex  flex-col items-center justify-center space-y-6 px-2 py-2 rounded-2xl `}>
            <div className={`${card.id===1?"absolute inset-0  px-2 py-2 rounded-2xl  bg-black bg-opacity-35":"bg-none bg-opacity-100"}`}></div>
<Image src={card.image} alt="image" className="rounded-t-[280px] object-cover w-full px-2 py-2 h-1/2"/>
<h1 className="font-bold text-2xl text-center">{card.heading}</h1>
<p className="font-normal text-lg text-center">{card.desc}</p>
<Link href={card.link}><button className={`px-3 py-2 rounded-3xl ${card.stylings}`}>{card.button}</button></Link>
        </div>
    ))
}
    </div>
     <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-10 mb-10">

<div className="w-full border-t-2 border-gray-200 mt-10 mb-10"></div>
<h1 className="text-2xl font-bold text-black text-center">Let&apos;s keep in touch ! Get email offers & the latest news from us</h1>
<span className="flex items-center">
    <input value={formData.email} onChange={(e)=>setisformdata({email:e.target.value})} type="email" placeholder="Enter your email" className=" placeholder:text-lg px-4 py-4 border outline-2 cursor-pointer" />
    <button onClick={handlesubmit} className="bg-red-900 text-white font-bold rounded-e-3xl px-4 py-4 text-lg">Subscribe</button>
</span>

        </div>
</div>

   
    )
}