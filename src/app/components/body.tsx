"use client"
import perfume1 from "../images/perfume1.webp"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "../ui/button"
import perfume from "../images/perfume.jpg"
import { StaticImageData } from "next/image"

import Link from "next/link"
import { IoMdThumbsUp } from "react-icons/io";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import { IoGiftSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useRef } from "react"

import her from "../images/perfume.webp"
import hero2 from "../images/perfume3.webp"
import hero from "../images/hero1.jpg"
import h2 from "../images/hero2.jpg"
import h4 from "../images/hero7.jpg"
import h5 from "../images/hero5.jpg"
import h3 from "../images/hero3.jpg"
import h6 from "../images/hero4.jpg"

import perfume2 from "../images/pefume2.jpg"
import perfume3 from "../images/perfume3.jpg"
import perfume4 from "../images/perfume3.webp"
import perfume5 from "../images/perfume5.jpg"
import perfume6 from "../images/perfume6.jpg"
import perfume7 from "../images/perfume7.jpg"
import { ReactElement, useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
type Perfume = {
    id: number
    Name: string
    price: number
    image: StaticImageData
    slug:string
    image2:StaticImageData
}

const perfumeReviews = [
    {
        id: 1,
        name: "Isabella Monroe",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        comments: "This perfume is absolutely divine! The scent lasts all day and I get compliments every time I wear it.",
    },
    {
        id: 2,
        name: "Ethan Blake",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        comments: "I'm genuinely impressed by the balance of notes. Not overpowering, yet bold and elegant. Perfect for evenings.",
    },
    {
        id: 3,
        name: "Layla Thompson",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        comments: "The packaging is so luxurious, and the scent? Absolutely enchanting. My new go-to fragrance.",
    },
    {
        id: 4,
        name: "Sebastian Cole",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        comments: "A subtle, sophisticated scent that really stands out. It's the perfect signature fragrance for daily use.",
    },
    {
        id: 5,
        name: "Chloe Rivera",
        image: "https://randomuser.me/api/portraits/women/19.jpg",
        comments: "Smells like elegance in a bottle. Long-lasting and incredibly smooth. I've already reordered!",
    },
    {
        id: 6,
        name: "Julian Patel",
        image: "https://randomuser.me/api/portraits/men/56.jpg",
        comments: "What a classy fragrance! The blend of musk and citrus is just right. I wear it every day.",
    },
    {
        id: 7,
        name: "Aria Bennett",
        image: "https://randomuser.me/api/portraits/women/67.jpg",
        comments: "The floral notes are so fresh and clean. It instantly uplifts my mood. A must-have in every collection.",
    },
    {
        id: 8,
        name: "Noah Kim",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        comments: "Finally found a scent that matches my personality—modern, bold, and long-lasting. Highly recommend it!",
    },
    {
        id: 9,
        name: "Sofia Delgado",
        image: "https://randomuser.me/api/portraits/women/27.jpg",
        comments: "Every spray feels like a luxury ritual. It's soft, romantic, and lasts beautifully on the skin.",
    },
    {
        id: 10,
        name: "Luca Moretti",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        comments: "Incredible craftsmanship in this perfume. The dry-down is warm and rich — perfect for date nights.",
    },
];

const perfumes: Perfume[] = [
    {
        id: 0,
        Name: "Gucci Bamboo For Women",
        price: 54,
        image: perfume,
       slug: "gucci", 
        image2:hero2
    },
    {
        id: 1,
        Name: "Dior J'adore Eau de Parfum",
        price: 78,
        image: perfume2,
      slug:"dior",
        image2:hero
    },
    {
        id: 2,
        Name: "Chanel Coco Mademoiselle",
        price: 89,
        image: perfume1,
         slug:"chanel", 
        image2:h2
    },
    {
        id: 3,
        Name: "Yves Saint Laurent Black Opium",
        price: 75,
        image: perfume3,
          slug:"laurent",
        
        image2:h3    },
    {
        id: 4,
        Name: "Versace Bright Crystal",
        price: 60,
        image: perfume4,
         slug:"versace", 
         image2:her
    },
    {
        id: 5,
        Name: "Marc Jacobs Daisy",
        price: 68,
        image: perfume5,
         slug:"marc", 
         image2:h4
    },
    {
        id: 6,
        Name: "Calvin Klein Euphoria",
        price:55,
        image: perfume6,
          slug:"calvin", 
         image2:h5
    },
    {
        id: 7,
        Name: "Lancome La Vie Est Belle",
        price: 72,
        image: perfume7,
            slug:"lancome", 
         image2:h6
    },
   
];

const herosperfumes=[
    {
id:0,
Name: "Perfume M2 for 50 Ml",
image:her,
price: 72,
slug:"m2"
    },
     {
id:1,
Name: "Ocean Waves for 50 Ml",
image:hero2,
price: 84,
slug:"ocean"
    }
]

const heros = [
    {
        id: 1,
        
        tag: "Unfold your floral elegance.",

        
        src:"/videos/herosection.mp4",
        
    },
    {
        id: 2,
        
        tag: "Raw freshness, bold masculinity.",
        
        src:"/videos/pic.mp4",
       
    },
    {
        id: 3,
       
        tag: "Freedom in a scent. Bold and fierce.",
        
        src:"/videos/pic5.mp4",
        
      
    }
];
type Choose = {
    id: number
    text: string
    icons: ReactElement
}
const choose: Choose[] = [
    {
        id: 0,
        text: "Free Fragrance Box, spray tester & gift Bags",
        icons: <IoGiftSharp />
    },
    {
        id: 1,
        text: "Easy return and exchange",
        icons: <AiFillSafetyCertificate />
    },
    {
        id: 2,
        text: "5 00,000 Happy Customers",
        icons: <IoMdThumbsUp />
    },
    {
        id: 4,
        text: "25,000+ 5 Star Reviews",
        icons: <FaTrophy />
    },
]
export default function Body() {
    
    const [ishovered,setishovered]=useState<number | null>(null);
  
    const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 15
        },
        breakpoints:{
            "(max-width:639px)":{
                slides:{
                    perView:1,
                     spacing: 10
                    

                }
            },
              "(min-width: 640px) and (max-width: 1023px)":{
            slides:{
                perView:2,
                  spacing: 10
            }
        },
       
         },
        loop: true,
    })

  
    const [index, setIndex] = useState(0);
 
    

    // Auto change every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heros.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % perfumeReviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

   
    return (
        <div >

            <div className="relative w-full h-screen overflow-hidden ">
                <AnimatePresence mode="wait">
                    {heros[index] && (
                        <motion.div
                            key={heros[index].id}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 40 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-screen"
                        >
                            <video
                                src={heros[index].src}
                               
                                className=" w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                            

                            ></video>
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-end justify-center text-white text-center px-4">
                                <span className="flex flex-col items-center m-0 lg:m-10">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-300">The Perfume</h1>
                                   
                                    <p className="mt-2 text-xl max-w-md text-white font-extrabold">{heros[index].tag}</p>
                                  <Link href="/men"><button className="text-lg px-2 py-2  border-2 mt-2 bg-transparent hover:bg-white/25 text-white font-extralight">View Collection</button></Link>  
                                </span>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

                {/* Dots Navigation */}
                <div className="absolute bottom-6 w-full flex justify-center items-center space-x-2">
                    {heros.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* <div className="h-screen w-full mt-10">
                <video className="w-full" src="/videos/herosection.mp4"autoPlay muted></video>
            </div>
             */}


            <div className="flex flex-col items-center gap-2 p-2 mt-10">


                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl  text-black font-extrabold text-center">
                    Best <label className=" text-yellow-800">Sellers</label>
                </h1>


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
</div></Link>
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
            data-item-url="/"
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


                <section className="p-2 m-2 ">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        // whileHover={{scale:1.05}}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className=" bg-gray-200 rounded-xl content-center">
                            <div className=" w-full flex flex-col lg:flex-row rounded-xl  shadow-lg shadow-gray-400 gap-4">
                                <Image src={her} alt="" className=" h-full w-full lg:w-1/2 rounded-xl sm:rounded-s-xl object-contain " />
                                <span className="flex flex-col  text-center justify-center items-center space-y-4 px-4 py-4">
                                    <h1 className="font-bold bg-clip-text uppercase  text-black text-xl sm:text-xl md:text-2xl lg:text-3xl">Perfume M2 for 50 Ml</h1>
                                    <p className="text-gray-700 font-normal mt-2 text-balance max-w-2xl space-x-4 tracking-widest"><label className="font-bold">Sauvage:-Dior</label>  a fragrance that captures the essence of freshness and
                                        vitality. <label className="font-bold">Zesty FruityCitrus</label>  notes of <label className="font-bold">Bergamot</label> , <label className="font-bold">Lemon</label> , and <label className="font-bold">Pineapple</label>  open with an invigorating burst, while a musky, Fresh Spicy heart adds depth and energy. This crisp, modern scent is perfect for the man who embraces confidence and clarity. Encased in a deep blue bottle with a subtle
                                        gradient, <label className="font-bold">M2</label> reflects a clean, refreshing elegance that leaves a lasting impression.</p>
                                  <Button data-item-id={herosperfumes[0].id}
            data-item-name={herosperfumes[0].Name}
            data-item-price={herosperfumes[0].price}
            data-item-image={herosperfumes[0].image}
            data-item-url="/"  className="snipcart-add-item mt-5 rounded-xl bg-gray-600 hover:bg-gray-400  shadow-none hover:shadow-2xl text-white hover:text-black px-4 p-5 py-4">
                                        Add to Cart 
                                    </Button>

                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        // whileHover={{scale:1.05}}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        animate={{ opacity: 1, y: 40 }}

                        transition={{ duration: 0.7 }}>
                        <div className=" bg-gray-200 rounded-xl content-center mt-10 mb-10">
                            <div className=" w-full flex flex-col-reverse lg:flex-row   gap-4 shadow-lg shadow-gray-400">
                                <span className="flex flex-col text-center justify-center items-center space-y-4 px-4 py-4">
                                    <h1 className="font-bold bg-clip-text uppercase text-black text-xl sm:text-xl md:text-2xl lg:text-3xl">
                                        Ocean Waves for 50 Ml
                                    </h1>
                                    <p className="text-gray-700 font-normal mt-2 text-balance max-w-2xl space-x-4 tracking-widest">
                                        <label className="font-bold">Ocean Waves</label> is a refreshing fragrance that evokes the cool, calming essence of the sea.
                                        <label className="font-bold">Aquatic and Marine</label> notes combine with crisp hints of
                                        <label className="font-bold">Sea Salt</label>, <label className="font-bold">Driftwood</label>, and
                                        <label className="font-bold">Mint</label>, creating an invigorating coastal breeze in every spray. The heart of the scent brings a soft
                                        <label className="font-bold">Floral Freshness</label> blended with subtle
                                        <label className="font-bold">White Musk</label> for a serene, airy finish.
                                        Housed in a sleek, ocean-blue bottle, <label className="font-bold">Ocean Waves</label> embodies freedom, tranquility, and effortless sophistication — perfect for the modern soul drawn to the sea.
                                    </p>
                                    <Button
data-item-id={herosperfumes[1].id}
            data-item-name={herosperfumes[1].Name}
            data-item-price={herosperfumes[1].price}
            data-item-image={herosperfumes[1].image}
            data-item-url="/"
                                     className="snipcart-add-item mt-5 rounded-xl bg-gray-600  shadow-none hover:shadow-2xl text-white px-4 p-5 py-4">
                                       Add to cart
                                    </Button>
                                </span>

                                <Image src={hero2} alt="mm " className=" h-full w-full lg:w-1/2 rounded-xl sm:rounded-s-xl object-cont " />

                            </div>
                        </div>
                    </motion.div>



                </section>
            </div>
            {/* <div className="relative"> */}
<div className="mt-10 mb-10 bg-image w-full   flex flex-col items-center justify-center">

                                  <Link href="/men"><button className="text-xl px-2 py-2  border-2 mt-2 bg-white/50 hover:bg-transparent text-black font-semibold">View Collection</button></Link>  

</div>
{/* </div> */}
            <div className="container mx-auto flex flex-col items-center mt-10">
                <h1 className="text-2xl md:text-4xl text-gray-600 font-bold underline-offset-2">Why Choose Us?</h1>
                <div className="grid grid-cols-2  sm:grid-cols-4 justify-center  p-2 gap-4 mt-4 ">
                    {
                        choose.map((cho) => (
                            <div key={cho.id} className="w-40 md:w-52 h-52  flex flex-col items-center  justify-center border bg-transparent rounded-xl px-4 py-4 hover:bg-black text-black hover:text-white">
                                <h1 className="font-bold">{cho.icons}</h1>
                                <h1 className="font-bold text-center">{cho.text}</h1>
                            </div>
                        ))
                    }
                </div>

            </div>
           <div className="container mx-auto flex flex-col items-center mt-10 px-4">
  <span className="flex flex-col items-center space-y-2 text-center">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black">
      Let Customers Speak for us!
    </h1>
    <span className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((index) => (
        <FaStar key={index} className="fill-yellow-500 text-base" />
      ))}
    </span>
    <h1 className="text-lg sm:text-xl font-medium">from 8111 reviews</h1>
  </span>

  <span className="relative w-full max-w-6xl">
    <AnimatePresence mode="wait">
      <motion.div
        ref={sliderRef}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -50 }}
        className="keen-slider flex flex-row items-center gap-4 overflow-hidden mb-10 mt-8 px-2"
      >
        {perfumeReviews.map((review) => (
          <span
            key={review.id}
            className="keen-slider__slide flex flex-col items-center w-[320px] bg-gray-200 space-y-2 px-6 py-6 mx-3 rounded-e-lg shadow-none hover:shadow-md transform transition-all duration-300 ease-in hover:scale-105"
          >
            <h1 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
              {review.name}
            </h1>
            <span className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((index) => (
                <FaStar key={index} className="fill-yellow-500 text-base" />
              ))}
            </span>
            <p className="text-base font-normal break-words mt-2 text-center">
              {review.comments}
            </p>
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  </span>
</div>


          <div className="flex flex-col items-center justify-center px-4 py-4 w-full bg-gray-100 overflow-hidden mt-10">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase tracking-wide text-black font-extrabold text-center">
    Top picks for <label className="text-blue-600">the day</label>
  </h1>

  <div
    style={{ scrollSnapType: "x mandatory" }}
    className="overflow-x-auto scrollbar-hide flex flex-row items-start gap-4 mt-5 w-full px-2 sm:px-4 snap-x snap-mandatory"
  >
    {["pic.mp4", "pic2.mp4", "pic 3.mp4", "pic4.mp4", "pic5.mp4"].map((src, index) => (
      <video
        key={index}
        src={`/videos/${src}`}
        autoPlay
        loop
        muted
        playsInline
        className="snap-start w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] h-auto rounded-xl shadow-xl object-cover flex-shrink-0"
      />
    ))}
  </div>
</div>


        </div>


    )
}