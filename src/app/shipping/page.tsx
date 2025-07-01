"use client"
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const shippingHandlingFAQs = [
  {
    id: 0,
    question: "What shipping methods are available?",
    ans: "We offer standard, express, and international shipping options at checkout based on your location.",
  },
  {
    id: 1,
    question: "How long does delivery take?",
    ans: "Standard shipping takes 3–7 business days. Express shipping takes 1–3 business days. International delivery times vary.",
  },
  {
    id: 2,
    question: "How can I track my order?",
    ans: "Once your order is shipped, you will receive a confirmation email with a tracking number and link.",
  },
  {
    id: 3,
    question: "Do you ship internationally?",
    ans: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location.",
  },
  {
    id: 4,
    question: "How much does shipping cost?",
    ans: "Shipping costs are calculated at checkout based on weight, location, and delivery method.",
  },
  {
    id: 5,
    question: "Can I change my shipping address after placing an order?",
    ans: "If your order hasn’t shipped yet, contact us immediately to update your address.",
  },
  {
    id: 6,
    question: "What happens if my package is delayed?",
    ans: "While we strive for timely delivery, external factors may cause delays. Contact support if your order hasn't arrived within the estimated time.",
  },
  {
    id: 7,
    question: "Do you offer free shipping?",
    ans: "We offer free standard shipping on domestic orders over a certain amount, displayed at checkout.",
  },
  {
    id: 8,
    question: "What if my package is lost or stolen?",
    ans: "Please contact our support team immediately. We’ll assist with investigating and resolving the issue promptly.",
  },
  {
    id: 9,
    question: "Do you ship to P.O. Boxes or APO/FPO addresses?",
    ans: "Yes, we ship to P.O. Boxes and APO/FPO addresses via standard postal services.",
  },
];

export default function ShippingHandling() {
  const [index, setIsIndex] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setIsIndex(index === id ? null : id);
  };

  return (
    <div className="p-6 flex flex-col justify-center items-start">
      <h1 className="font-extrabold text-gray-700 text-3xl mt-16">Shipping & Handling</h1>
      <h1 className="text-2xl text-gray-700 font-semibold mt-4">Our Delivery Policy</h1>

      <ul className="flex flex-col items-start justify-center p-2">
        <li>● Orders are processed within 1-2 business days (excluding weekends and holidays).</li>
        <li>● You’ll receive an email confirmation once your order is shipped with tracking details.</li>
        <li>● Delivery time varies by location and chosen shipping method.</li>
        <li>● We ensure careful packaging to minimize risk of damage during transit.</li>
      </ul>

      <div className="flex flex-col items-start p-2 w-full">
        <h1 className="text-gray-700 font-bold text-2xl md:text-4xl">FAQ`s</h1>

        {shippingHandlingFAQs.map((ques, ind) => (
          <div
            onClick={() => toggleFaq(ques.id)}
            key={ind}
            className="w-full border-b py-4 cursor-pointer"
          >
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

            {index === ind && (
              <div className="mt-2 px-2">
                <p className="text-gray-600 leading-relaxed">{ques.ans}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
