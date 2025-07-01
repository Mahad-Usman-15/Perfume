"use client"
const perfumeFAQs = [
  {
    id: 0,
    question: "What is the difference between Eau de Parfum and Eau de Toilette?",
    ans: "Eau de Parfum has a higher fragrance concentration (15-20%) than Eau de Toilette (5-15%), making it last longer.",
  },
  {
    id: 1,
    question: "How long does a perfume typically last on the skin?",
    ans: "Depending on concentration and skin type, perfumes last between 3 to 8 hours.",
  },
  {
    id: 2,
    question: "Where should I apply perfume for the best effect?",
    ans: "Apply to pulse points like wrists, neck, behind the ears, and inner elbows for maximum diffusion.",
  },
  {
    id: 3,
    question: "Why does perfume smell different on me than on someone else?",
    ans: "Body chemistry, skin pH, and natural oils can alter how a perfume smells from person to person.",
  },
  {
    id: 4,
    question: "Can I make my perfume last longer?",
    ans: "Yes, apply to moisturized skin and layer with matching scented lotion or oil.",
  },
  {
    id: 5,
    question: "Is it okay to spray perfume on clothes?",
    ans: "Yes, but some fabrics may stain. Always test on a small area first.",
  },
  {
    id: 6,
    question: "How should I store my perfume?",
    ans: "Store it in a cool, dark place away from direct sunlight and extreme temperatures.",
  },
  {
    id: 7,
    question: "Do perfumes expire?",
    ans: "Yes. Most perfumes last 3-5 years if stored properly.",
  },
  {
    id: 8,
    question: "Can I wear perfume daily?",
    ans: "Absolutely. Just choose lighter scents for daytime and stronger ones for evening or special events.",
  },
  {
    id: 9,
    question: "Are your perfumes cruelty-free?",
    ans: "Yes, all of our perfumes are cruelty-free and not tested on animals.",
  },
  {
    id: 10,
    question: "Do you offer perfume samples?",
    ans: "Yes, we offer samples so you can try before committing to a full-size bottle.",
  },
  {
    id: 11,
    question: "What is the return policy on fragrances?",
    ans: "Unopened perfumes can be returned within 14 days of purchase with a valid receipt.",
  },
  {
    id: 12,
    question: "Are your perfumes suitable for sensitive skin?",
    ans: "We offer options with natural ingredients and fewer allergens, ideal for sensitive skin.",
  },
  {
    id: 13,
    question: "What is a unisex fragrance?",
    ans: "Unisex fragrances are designed to be suitable for all genders, often featuring balanced notes.",
  },
  {
    id: 14,
    question: "How do I know which fragrance suits me?",
    ans: "Try samples and see how each scent develops on your skin throughout the day.",
  },
  {
    id: 15,
    question: "Can perfumes affect allergies?",
    ans: "Yes, some ingredients may trigger allergies. Always patch test if you have sensitivities.",
  },
  {
    id: 16,
    question: "What is the best perfume for summer?",
    ans: "Light, citrusy, or aquatic fragrances work best for hot weather.",
  },
  {
    id: 17,
    question: "Do you offer gift packaging for perfumes?",
    ans: "Yes, we offer elegant gift wrapping for special occasions.",
  },
  {
    id: 18,
    question: "What is a fragrance note?",
    ans: "A fragrance note is a single component of the perfume’s scent structure—top, middle, or base.",
  },
  {
    id: 19,
    question: "Is it safe to apply perfume to hair?",
    ans: "Use alcohol-free formulas on hair, or spray on a hairbrush to lightly distribute scent.",
  },
];

import { useState } from "react"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
export default function Faqs(){
    const [index,setisindex]=useState<number|null>(null)
      const toggleFaq=(id:number)=>{
setisindex(index===id?null:id)
    }
    return (
        <div className="flex flex-col items-center">
            <div className="mt-20 w-full px-2 py-2 mr-1 ml-1">
                <h1 className="text-2xl font-bold">FAQ`s</h1>
               {perfumeFAQs.map((ques, ind) => (
                 <div
                   onClick={() => toggleFaq(ques.id)}
                   key={ind}
                   className="w-full border-b py-4 cursor-pointer"
                 >
                   {/* Question + Icon in one row */}
                   <div className="flex justify-between items-center px-2">
                     <h1 className="font-medium text-lg text-gray-800">{ques.question}</h1>
                     <button>
                       {index === ind ? (
                         <CiCircleMinus className="text-2xl text-blue-500" />
                       ) : (
                         <CiCirclePlus className="text-2xl text-blue-500" />
                       )}
                     </button>
                   </div>
               
                   {/* Answer appears underneath the full row */}
                   {index === ind && (
                     <div className="mt-2 px-2">
                       <p className="text-gray-600 leading-relaxed">{ques.ans}</p>
                     </div>
                   )}
                 </div>
               ))}
            </div>
        </div>
    )
}