"use client"
import Image from "next/image";
import banner from "../images/male.webp"
import pr1 from "../images/men1.webp"
import pr2 from "../images/men2.webp"
import pr3 from "../images/men3.webp"
import pr4 from "../images/men4.webp"
import pr5 from "../images/men5.webp"
import pr6 from "../images/men6.webp"
import pr7 from "../images/men7.webp"
import pr8 from "../images/men8.webp"
import pr9 from "../images/men9.webp"

import { Button } from "../ui/button";
import { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react";
import Link from "next/link";
type Perfume = {

  id: number
  Name: string
  price:number
  image: StaticImageData
  image2: StaticImageData
  slug: string
}
const perfumes: Perfume[] = [
  {
    id: 0,
    Name: "Gucci Bamboo For Women",
    price: 54,
    image: pr1,
    image2: pr8,
    slug: "gucci"
  },
  {
    id: 1,
    Name: "Dior J'adore Eau de Parfum",
    price: 78,
    image: pr2,
    image2: pr9,
    slug: "dior"
  },
  {
    id: 2,
    Name: "Chanel Coco Mademoiselle",
    price:89,
    image: pr3,
    image2: pr2,
    slug: "chanel"
  },
  {
    id: 3,
    Name: "Yves Saint Laurent Black Opium",
    price: 75,
    image: pr4,

    image2: pr6,
    slug: "laurent"
  },
  {
    id: 4,
    Name: "Versace Bright Crystal",
    price: 60,
    image: pr4,
    image2: pr5,
    slug: "versace"
  },
  {
    id: 5,
    Name: "Marc Jacobs Daisy",
    price: 68,
    image: pr5,
    image2: pr8,
    slug: "marc"
  },
  {
    id: 6,
    Name: "Calvin Klein Euphoria",
    price: 55,
    image: pr6,
    slug: "calvin",
    image2: pr8,
  },
  {
    id: 7,
    Name: "Lancome La Vie Est Belle",
    price: 72,
    image: pr7,
    slug: "lancome",
    image2: pr8,
  },

];
export default function Male() {
  const [ishovered, setishovered] = useState<number | null>(null);
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

  const handlesorting=(e:React.ChangeEvent<HTMLSelectElement>)=>{
const value=e.target.value
    if(value=="high")pricehightolow()
    else if(value=="low")pricelowtohigh()
    else if(value=="AtoZ") alphabeticallyAtoZ()
    else if(value=="ZtoA")alphabeticallyZtoA() 
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.2, ease: "backIn" }}
        >
          <Image src={banner} className="w-full  mt-12 h-[200px] brightness-125 lg:h-full lg:mt-16" alt="banner" />
        </motion.div>

      </div>
      <div className="flex flex-col sm:flex-row items-start justify-between px-2 py-2 m-2 mt-5 gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">Best Perfume for Men</h1>
        <select onChange={handlesorting}  name="sort" className="border border-gray-600 px-2 py-2">
          <option className="text-gray-600 text-lg" value="featured">Featured</option>
          <option value="high" className="text-gray-600 text-lg" >Price: High to Low</option>
          <option value="low" className="text-gray-600 text-lg" >Price: Low to High</option>
          <option  value="AtoZ" className="text-gray-600 text-lg" >Alphabetically: A-Z</option>
          <option value="ZtoA"  className="text-gray-600 text-lg" >Alphabetically: Z-A</option>
        </select>
      </div>
      <section className="text-gray-600 body-font">
        <div className=" px-2 py-2 ">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { opacity: 1, y: 40 } : {}}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center flex-wrap gap-4">
              {isperfumes.map((product) => (
                <div onMouseEnter={() => setishovered(product.id)}
                  onMouseLeave={() => setishovered(null)} key={product.id} className="p-4 w-full shadow-sm hover:shadow-lg bg-white rounded">
                  <Link href={`/productdetailspage/${product.slug}`}><div className="relative w-full aspect-[4/5] overflow-hidden rounded">
                    <Image
                      src={product.image}
                      alt="Front"
                      fill
                      className={` transition-opacity duration-500 ease-in-out ${ishovered === product.id ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <Image
                      src={product.image2}
                      alt="Back"
                      fill
                      className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${ishovered === product.id ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </div>
                  </Link>
                  <div className="mt-4">
                    <h2 className="text-gray-900 text-lg font-bold">{product.Name}</h2>
                    <p className="mt-1 text-lg">{product.price}.00</p>
                    <Button
                      className="snipcart-add-item"
                      data-item-id={product.id}
                      data-item-name={product.Name}
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