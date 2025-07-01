
import { FaSquareInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col items-stretch w-full bg-black px-4 py-8">
      {/* Top Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">

        {/* Brand Info */}
        <span className="flex flex-col items-center md:items-start gap-4 w-full ">
    <Link href="/">     <h1 className="font-extrabold bg-clip-text uppercase text-transparent bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700 text-2xl md:text-3xl lg:text-4xl">
            Perfume
          </h1></Link> 
          <p className="text-sm text-gray-200 font-normal text-center md:text-left leading-relaxed">
            At Perfume, we craft premium fragrances that blend elegance and individuality. Our mission is to deliver unmatched quality while prioritizing customer satisfaction. Discover unique scents and exclusive offers tailored just for you.
          </p>
        </span>

        {/* Links */}
        <span className="flex flex-col items-center md:items-start gap-4 ml-0 lg:ml-20">
          <h1 className="text-xl text-white">Links</h1>
          <ul className="flex flex-col items-center md:items-start gap-2">
            <Link href=""><li className="text-gray-400 hover:text-white transition">Home</li></Link>
            <Link href="/blogs"><li className="text-gray-400 hover:text-white transition">Blogs</li></Link>
            <Link href="/contact"><li className="text-gray-400 hover:text-white transition">Contact</li></Link>
            <Link href="/faqs"><li className="text-gray-400 hover:text-white transition">Faqs</li></Link>
          </ul>
        </span>

        {/* Info */}
        <span className="flex flex-col items-center md:items-start gap-4 ml-0 lg:ml-10">
          <h1 className="text-xl text-white">Information</h1>
          <ul className="flex flex-col items-center md:items-start gap-2">
            <Link href="/about"><li className="text-gray-400 hover:text-white transition">About Us</li></Link>
            <Link href="/privacy"><li className="text-gray-400 hover:text-white transition">Privacy Policy</li></Link>
            <Link href="/shipping"><li className="text-gray-400 hover:text-white transition">Shipping & Handling</li></Link>
          </ul>
        </span>

        {/* Social & Payments */}
        <span className="flex flex-col items-center md:items-start gap-6 ml-0 lg:ml-20">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h1 className="text-xl text-white">Social Media</h1>
            <div className="flex flex-row gap-4">
              <Link href="https://www.instagram.com/"><FaSquareInstagram className="fill-pink-500 w-8 h-8 hover:scale-110 transition" /></Link>
              <Link href="https://www.facebook.com/"><MdFacebook className="fill-blue-600 w-8 h-8 hover:scale-110 transition" /></Link>
              <Link href="https://twitter.com/"><FaSquareXTwitter className="fill-blue-300 w-8 h-8 hover:scale-110 transition" /></Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <h1 className="text-xl text-white">We accept</h1>
            <div className="flex gap-3">
              <FaCcMastercard className="fill-orange-600 text-3xl" />
              <FaCcVisa className="fill-blue-600 text-3xl" />
            </div>
          </div>
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <Link href="/">PERFUME</Link> . All rights reserved.
        </p>
      </div>
    </div>
  );
}
