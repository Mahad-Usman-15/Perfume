"use client";
import { perfumes } from "./perfumes";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CiSearch } from "react-icons/ci";
export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
const [query,setisquery]=useState("")
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const filtered=perfumes.filter((prod)=>
    prod.Name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className=""
      >
        <CiSearch className="fill-white h-8 w-8 font-bold scale-100 hover:scale-105"/>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            
            className="w-full fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center "
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="relative h-full md::h-fit bg-white rounded-lg shadow px-8 py-8 w-full max-w-md mb-5 mt-5"
            >
              <input
                ref={inputRef}
value={query}
                onChange={(e) => setisquery(e.target.value)}

                type="text"
                placeholder="Search perfumes..."
                className="w-full border p-3 rounded-lg"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-0 -right-0"
              >
                <X />
              </button>
                       {query && (
                <div className="space-y-4 space-x-4 overflow-y-auto max-h-[60vh]  grid grid-cols-1 sm:grid-cols-2 w-full">
                  {filtered.length > 0 ? (
                    filtered.map((product) => (
                      <Link
                        key={product.id}
                        href={`/productdetailspage/${product.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 border p-2 rounded hover:bg-gray-100 px-2 py-2"
                      >
                        <Image
                          src={product.image}
                          alt={product.Name}
                          width={60}
                          height={60}
                          className="rounded"
                        />
                        <div>
                          <p className="font-semibold">{product.Name}</p>
                          <p className="text-sm text-gray-500">${product.price}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-center text-gray-500">No results found.</p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
