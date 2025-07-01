"use client"
import Image from "next/image";
import banner from "../images/bannerwomen.webp"
import pr1 from "../images/women1.webp"
import pr2 from "../images/women2.webp"

import pr5 from "../images/women5.webp"
import pr6 from "../images/women16.webp"
import pr7 from "../images/women7.webp"
import pr8 from "../images/women8.webp"
import pr9 from "../images/women9.webp"
import pr10 from "../images/women10.webp"
import pr11 from "../images/women11.webp"
import pr12 from "../images/women2.webp"
import pr13 from "../images/women14.webp"
import pr14 from "../images/women14.webp"
import pr15 from "../images/women13.webp"
import pr16 from "../images/women15.webp"
import pr17 from "../images/women16.webp"
import pr18 from "../images/women17.webp"
import pr19 from "../images/women19.webp"
import { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion"
import { useState,useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
type Perfume = {
    
    id: number
    Name: string
    price: number
    image: StaticImageData
    image2:StaticImageData
    slug:string
}
const perfumes: Perfume[] = [
  
  {
    id: 0,
    Name: "Burberry Her Eau de Parfum",
    price: 65,
    image: pr10,
    image2: pr5,
    slug: "burberry",
  },
  {
    id: 1,
    Name: "Tom Ford Velvet Orchid",
    price: 92,
    image: pr11,
    image2: pr7,
    slug: "tom-ford",
  },
  {
    id: 2,
    Name: "Givenchy Irresistible",
    price: 70,
    image: pr12,
    image2: pr8,
    slug: "givenchy",
  },
  {
    id: 3,
    Name: "Elie Saab Le Parfum",
    price: 66,
    image: pr13,
    image2: pr9,
    slug: "elie-saab",
  },
  {
    id: 4,
    Name: "Nina Ricci Nina",
    price:58,
    image: pr14,
    image2: pr10,
    slug: "nina-ricci",
  },
  {
    id: 5,
    Name: "Viktor & Rolf Flowerbomb",
    price: 83,
    image: pr15,
    image2: pr11,
    slug: "viktor-rolf",
  },
  {
    id: 6,
    Name: "Carolina Herrera Good Girl",
    price: 88,
    image: pr16,
    image2: pr12,
    slug: "carolina",
  },
  {
    id: 7,
    Name: "Moschino Toy 2",
    price: 50,
    image: pr17,
    image2: pr6,
    slug: "moschino",
  },
  {
    id: 8,
    Name: "Jean Paul Gaultier Scandal",
    price: 74,
    image: pr18,
    image2: pr1,
    slug: "gaultier",
  },
  {
    id: 9,
    Name: "Dolce & Gabbana The One",
    price:69,
    image: pr19,
    image2: pr2,
    slug: "dolce",
  },
];

export default function Female(){
     const [ishovered,setishovered]=useState<number | null>(null);
             const ref = useRef(null);
         const isInView = useInView(ref, { once: true, margin: "-100px" });
         const [isperfumes, setisperfumes] = useState(perfumes)
                  const pricehightolow = () => {
                    const sorted =[...perfumes].sort((a, b) => a.price-b.price)
                    setisperfumes(sorted)
                  }
                  const pricelowtohigh = () => {
                    const sorted=[...perfumes].sort((a, b) => b.price-a.price)
                    setisperfumes(sorted)
                  }
                  const alphabeticallyAtoZ = () => {
                
                
                const sorted=[...perfumes].sort((a, b) => a.Name.toLowerCase().localeCompare(b.Name.toLowerCase()))
                    setisperfumes(sorted)
                  }
                  const alphabeticallyZtoA = () => {
                
                
                const sorted=[...perfumes].sort((a, b) => 
                  b.Name.toLowerCase().localeCompare(a.Name.toLowerCase())
                )
                    setisperfumes(sorted)
                  }
                const featured=()=>{
                  return isperfumes.filter(p=>p.Name)
                }
                  const handlesorting=(e:React.ChangeEvent<HTMLSelectElement>)=>{
                const value=e.target.value
                
                    if(value=="high")pricehightolow()
                    else if(value=="low")pricelowtohigh()
                    else if(value=="AtoZ") alphabeticallyAtoZ()
                    else if(value=="ZtoA")alphabeticallyZtoA() 
                  else if(value=="featured")featured()
                  }
    return(
        <div className="flex flex-col">
            <div className="w-full">
                <motion.div
                initial={{opacity:0,y:0}}
                animate={{opacity:1,y:10}}
                transition={{duration:1.2,ease:"backIn"}}
                >
<Image src={banner} className="w-full  mt-12 h-[200px] brightness-125 lg:h-full lg:mt-16" alt="banner"/>
                </motion.div>
                
            </div>
            <div className="flex flex-col sm:flex-row items-start justify-between px-2 py-2 m-2 mt-5 gap-4">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase">Best Perfume for Women</h1>
                <select onChange={handlesorting} name="sort" className="border border-gray-600 px-2 py-2">
                         <option className="text-gray-600 text-lg" value="featured">Featured</option>
                    <option className="text-gray-600 text-lg" value="high">Price: High to Low</option>
                      <option className="text-gray-600 text-lg" value="low">Price: Low to High</option>
                        <option className="text-gray-600 text-lg" value="AtoZ">Alphabetically: A-Z</option>
                        <option className="text-gray-600 text-lg" value="ZtoA">Alphabetically: Z-A</option>
                </select>
            </div>
              <section className="text-gray-600 body-font">
                    <div className=" container px-2 py-2  mx-auto">

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 0 }}
  animate={isInView ? { opacity: 1, y: 40 } : {}}
  transition={{ duration: 0.5, ease: "easeIn" }}
>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center flex-wrap gap-4">
    {isperfumes.map((product) => (
      <div  onMouseEnter={() => setishovered(product.id)}
      onMouseLeave={() => setishovered(null)} key={product.id} className="p-4 w-full shadow-sm hover:shadow-lg bg-white rounded">
<Link href={`/productdetailspage/${product.slug}`}><div className="relative w-full aspect-[4/5] overflow-hidden rounded">
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
</Link>
        <div className="mt-4">
          <h2 className="text-gray-900 text-lg font-bold">{product.Name}</h2>
          <p className="mt-1 text-lg">${product.price}.00</p>
          <Button
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-Name={product.Name}
            data-item-price={product.price}
            data-item-description={product.slug}
            data-item-image={product.image}
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