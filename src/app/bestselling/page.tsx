'use client'
import { useState } from "react"
import perfume1 from "../images/perfume1.webp"
import perfume2 from "../images/pefume2.jpg"
import perfume3 from "../images/perfume3.jpg"
import perfume4 from "../images/perfume3.webp"
import perfume5 from "../images/perfume5.jpg"
import Image from "next/image"
import perfume6 from "../images/perfume6.jpg"
import perfume7 from "../images/perfume7.jpg"
import { StaticImageData } from "next/image";
import her from "../images/perfume.webp"
import hero2 from "../images/perfume3.webp"
import hero from "../images/hero1.jpg"
import h2 from "../images/hero2.jpg"
import h4 from "../images/hero7.jpg"
import h5 from "../images/hero5.jpg"
import h3 from "../images/hero3.jpg"
import h6 from "../images/hero4.jpg"
import perfume from "../images/perfume.jpg"
import { motion,useInView } from "framer-motion"
import { Button } from "../ui/button"
import { useRef } from "react"
import banner from "../images/bestsellerbanner.webp"

type Perfume = {
  id: number;
  name: string;
  price: number;
  slug: string;
  image: StaticImageData;
  image2: StaticImageData;
};
const perfumes: Perfume[] = [
  {
    id: 0,
    name: "Gucci Bamboo For Women",
    slug: "gucci",
    price: 54,
    image: perfume,
    image2: hero2,
  },
  {
    id: 1,
    name: "Dior J'adore Eau de Parfum",
    slug:"dior",
    price:78,
    image: perfume2,
    image2: hero,
  },
  {
    id: 2,
    name: "Chanel Coco Mademoiselle",
    slug:"chanel",
    
    price: 89,
    
    image: perfume1,
    image2: h2,
  },
  {
    id: 3,
    name: "Yves Saint Laurent Black Opium",
 slug:"laurent",
    price: 75,
    image: perfume3,
    image2: h3,
   
  },
  {
    id: 4,
    name: "Versace Bright Crystal",
    slug:"versace",
    price:60,
    image: perfume4,
    image2: her,

  },
  {
    id: 5,
    name: "Marc Jacobs Daisy",
    slug:"marc",
    price: 68,
    image: perfume5,
    image2: h4,
  },
  {
    id: 6,
    name: "Calvin Klein Euphoria",
      slug:"calvin",
    price: 55,
    image: perfume6,
    image2: h5,
  },
  {
    id: 7,
    name: "Lancome La Vie Est Belle",
  slug:"lancome",
    price: 72,
    image: perfume7,
    image2: h6,
  },
  {
    id: 8,
    name: "Burberry Her",
   slug: "burberry",
    price: 69,
    image: perfume1,
    image2: h3,
  },
  {
    id: 9,
    name: "Tom Ford Black Orchid",
       slug: "tom-ford",
    price: 88,
    image: perfume1,
    image2: h4,
  },
  {
    id: 10,
    name: "Jo Malone Peony & Blush Suede",
    slug: "jo-malone-peony-blush-suede",
    price: 92,
    image: perfume1,
    image2: h5,
  },
  {
    id: 11,
    name: "Dolce & Gabbana Light Blue",
    slug: "dolce-gabbana-light-blue",
    price: 65,
    image: perfume1,
    image2: h4,
  },
  {
    id: 12,
    name: "Elizabeth Arden Green Tea",
    slug: "elizabeth-arden-green-tea",
    price: 30,
    image: perfume1,
    image2: h3,
  },
  {
    id: 13,
    name: "Givenchy L'Interdit",
    slug: "givenchy-linterdit",
    price: 76,
    image: perfume1,
    image2: h2,
  },
  {
    id: 14,
    name: "Armani Si Eau de Parfum",
    slug: "armani-si-eau-de-parfum",
    price: 84,
    image: perfume1,
    image2: h2,
  },
  {
    id: 15,
    name: "Viktor & Rolf Flowerbomb",
    slug: "viktor-rolf-flowerbomb",
    price:95,
    image: perfume5,
    image2: h2,
  },
  {
    id: 16,
    name: "Moschino Toy 2",
    slug: "moschino-toy-2",
    price:52,
    image: perfume6,
    image2: h2,
  },
  {
    id: 17,
    name: "Jimmy Choo Eau de Parfum",
    slug: "jimmy-choo-eau-de-parfum",
    price: 67,
    image: perfume1,
    image2: h2,
  },
  {
    id: 18,
    name: "Bvlgari Omnia Crystalline",
    slug: "bvlgari-omnia-crystalline",
    price: 59,
    image: perfume1,
    image2: h2,
  },
  {
    id: 19,
    name: "Carolina Herrera Good Girl",
    slug: "carolina-herrera-good-girl",
    price:85,
    image: perfume1,
    image2: h2,
  },
];



export default function Best(){
       const [ishovered,setishovered]=useState<number | null>(null);
         const ref = useRef(null);
       const isInView = useInView(ref, { once: true, margin: "-100px" });
       
    return  (
<div className="flex flex-col items-center justify-center">
    <motion.div 
    initial={{opacity:0,y:0}}
    animate={{opacity:1,y:40}}
    transition={{duration:0.6,ease:"easeIn"}}
    >
 <div className=" mt-6 lg:mt-8 relative w-full flex items-center justify-center ">
        <Image src={banner}alt="banner"className="h-[250px] lg:h-full"/>
           <h1 className="absolute  gap-4 inset-0 text-3xl md:text-4xl lg:text-6xl  text-white font-extrabold flex items-center  justify-center lg:justify-start m-20">
                    Best  <label className=" text-cyan-100"> Sellers</label>
                </h1>
       </div>
    </motion.div>
      


                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24  mx-auto">

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 0 }}
  animate={isInView ? { opacity: 1, y: 40 } : {}}
  transition={{ duration: 0.5, ease: "easeIn" }}
>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center flex-wrap gap-4">
    {perfumes.map((product) => (
      <div  onMouseEnter={() => setishovered(product.id)}
      onMouseLeave={() => setishovered(null)} key={product.id} className="p-4 w-full shadow-sm hover:shadow-lg bg-white rounded">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded">
  <Image
    src={product.image}
    alt="Front"
    fill
    className={` transition-opacity duration-500 ease-in-out ${ishovered===product.id ? 'opacity-0' : 'opacity-100'}`}
  />
  <Image
    src={product.image2}
    alt="Back"
    fill
    className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${ishovered===product.id ? 'opacity-100' : 'opacity-0'}`}
  />
</div>
        <div className="mt-4">
          <h2 className="text-gray-900 text-lg font-bold">{product.name}</h2>
          <p className="mt-1 text-lg">${product.price}.00</p>
          <Button
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-description={product.slug}
            data-item-image={product.image}
            data-item-url={`http://localhost:3000/bestselling/${product.slug}`}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    ))}
  </div>
</motion.div>

                      

                        
                    </div>
                </section>


</div>
    )
}