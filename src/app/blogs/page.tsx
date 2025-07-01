import Image from "next/image";
import { StaticImageData } from "next/image";
type Perfume = {
  id: number;
  title: string;
  date: string;
  slug: string;
  image: StaticImageData
};
import hero from "../images/hero1.jpg"
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"
import hero4 from "../images/hero4.jpg"
import hero5 from "../images/hero5.jpg"
import hero6 from "../images/herpo6.jpg"
import hero7 from "../images/hero7.jpg"
import Link from "next/link";
import hero8 from "../images/hero8.jpg"
const perfumeBlogPosts: Perfume[] = [
  {
    id: 1,
    title: "How to Choose the Right Perfume for Every Season",
    date: "2025-05-28",
    slug: "choose-right-perfume-season",
    image: hero,
  },
  {
    id: 2,
    title: "The History of Perfume: From Ancient Egypt to Today",
    date: "2025-05-26",
    slug: "history-of-perfume",
    image: hero2,
  },
  {
    id: 3,
    title: "Understanding Fragrance Notes: Top, Middle & Base Explained",
    date: "2025-05-24",
    slug: "fragrance-notes-explained",
    image: hero3,
  },
  {
    id: 4,
    title: "Perfume Layering: Create a Signature Scent That’s Yours",
    date: "2025-05-22",
    slug: "perfume-layering-guide",
    image: hero4,
  },
  {
    id: 5,
    title: "Top 10 Perfume Trends in 2025 You Should Know",
    date: "2025-05-20",
    slug: "top-perfume-trends-2025",
    image: hero5,
  },
  {
    id: 6,
    title: "The Difference Between Eau de Parfum and Eau de Toilette",
    date: "2025-05-18",
    slug: "eau-de-parfum-vs-eau-de-toilette",
    image: hero6,
  },
  {
    id: 7,
    title: "How to Make Your Perfume Last All Day: Pro Tips",
    date: "2025-05-16",
    slug: "make-perfume-last-longer",
    image: hero7,
  },
  {
    id: 8,
    title: "Perfume for Different Occasions: A Scent for Every Moment",
    date: "2025-05-14",
    slug: "perfume-for-every-occasion",
    image: hero8,
  },
];
 export default function BlogPost(){
    return(
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-3xl md:text-4xl font-bold mt-24">Latest <label className="text-gray-500">Blogs</label> </h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center space-y-6 gap-4 px-2 py-2 ml-1 mr-1">
 {
                perfumeBlogPosts.map((blog)=>(
                    <div key={blog.id} className="shadow-xs flex flex-col items-center overflow-auto w-full space-y-3">
                      <Link href={`/blogs/${blog.slug}`}> <Image className="w-96 h-64 object-cover rounded-xl" src={blog.image}alt=""/></Link>
                      <h1 className="text-black text-lg font-normal">{blog.date}</h1> 
                      <label className="font-mediim text-center text-black text-2xl text-balance">{blog.title}</label>
                    </div>
                ))
            }
</div>
           
        </div>
    )
 }