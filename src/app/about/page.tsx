"use client"
import bg from "../images/bg.webp"
import Image from "next/image"
import { motion } from "framer-motion"
import image1 from "../images/about1.webp"
import image2 from "../images/about2.webp"
import image3 from "../images/about3.webp"
import image4 from "../images/about5.webp"
import image5 from "../images/about6.webp"
import image6 from "../images/about7.webp"
import image7 from "../images/about8.webp"
import image8 from "../images/about9.webp"
import image9 from "../images/about10.webp"
import image10 from "../images/about11.webp"
// import {motion} from "framer-motion"

const abouts=[
    {
id:0,
title:"Global Perfume Exploration",
des:"We meticulously research the most beloved perfumes from around the world.",
image:image1

},
   {
id:1,
title:"Tailored for the Pakistani Nose",
des:"We acquire these renowned perfumes and assess their compatibility with Pakistani olfactory preferences."
,
image:image2

},
{
id:2,
title:"Recreating Aromas",
des:"Our dedicated R&D department undertakes the challenge of recreating the essence of selected perfumes. Through our tireless efforts, we craft multiple samples, aiming to capture the true spirit of each fragrance."
,
image:image3
},
{
id:3,
title:"Grading the Essence",
des:"We grade our samples based on their resemblance, longevity, projection, and affordability. This rigorous evaluation process guarantees that only the best scents proceed to the next stage."
,
image:image4
},
{
id:4,
title:"Crafting the Perfume",
des:"With the final sample approved, we proceed to order the raw materials and packaging required for the perfume."
,
image:image5
},
{
id:5,
title:"Precise Blending",
des:"Our skilled artisans blend the ingredients in exact proportions, ensuring an exquisite harmony of scents. The delicate balance achieved during this process sets the stage for a remarkable fragrance."
,
image:image6
},
{
id:6,
title:"Large-scale Production",
des:"Once the blend is perfected, we commence large-scale production to share our perfumes with fragrance enthusiasts across Pakistan.",
image:image7

},
{
id:7,
title:"Name and Design",
des:"Through collaborative brainstorming, our marketing experts select a befitting name for each fragrance, followed by the design team's creation of bottle labels that reflect the essence of the scent contained within."
,
image:image8
},
{
id:8,
title:"Perfume Launched",
des:"The long-awaited moment arrives when the perfume is finally ready for you to immerse yourself in the culmination of our efforts.",
image:image9

},
{
id:9,
title:"Dedicated Customer Service",
des:"Our customer service agents are fully briefed about each perfume and equipped to provide you with comprehensive information and assistance."
,
image:image10
},
]
export default function About(){
return(
    <div className="flex flex-col items-center ">
        <div className="relative w-full mt-10">
            <Image src={bg} alt="background" className="opacity-60 w-full h-60"/>
            <div className="inset-0 absolute bg-black opacity-35 flex flex-col items-center justify-center"></div>
            <span className="flex flex-col items-center justify-center absolute inset-0">
                <h1 className="font-extrabold text-2xl sm:text-4xl md:text-6xl text-balance text-center text-white">About Us</h1> </span>

        </div>
        <div className="flex flex-col items-center justify-center px-2 py-2 mt-8">
            <span className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl md:text-4xl font-bold text-center">What it Takes to Create an Olfactory <br /> Masterpiece</h1>
<p className="text-wrap font-normal text-lg md:text-xl text-center">At PERFUME, we passionately delve into the world of fragrances,<br className="hidden sm:block"/>
     bringing you an olfactory experience like no other.</p>
     <label className="text-wrap font-normal text-lg md:text-xl">
        Here&apos;s a glimpse into our process:
     </label>
            </span>
{/* Now this  is perfect in asmall screens but i want in bigger screens that it should the about items should come alternative sides */}
<div className="flex flex-col items-center justify-center">
    {abouts.map((about,index)=>(

<div key={about.id} className={`flex flex-col md:flex-row gap-5 px-2 py-2 m-2 space-y-8 w-full ${index%2!==0?'md:flex-row-reverse':''}`}>
    <div className="flex flex-col items-center md:items-start justify-center text-center md:text-start space-y-4 space-x-3 md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-bold">{about.title}</h1>
        <p className="text-xl text-wrap font-light ">{about.des}</p>
    </div>
    <motion.div 
    initial={{opacity:0,y:0}}
    animate={{opacity:1,y:40}}
    transition={{duration:0.7,ease:"easeIn"}}
    whileFocus={{scale:1.2}}
    whileInView={{scale:1.05}}
    className="md:w-1/2 p-2"
    >
    <div >
        <Image src={about.image}alt="image"/>
    </div>
    </motion.div>
</div>
    ))}
</div>

        </div>
    </div>
)
}