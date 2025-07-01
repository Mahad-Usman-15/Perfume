"use client"
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const perfumePrivacyFAQs = [
  {
    id: 0,
    question: "What information do you collect from customers?",
    ans: "We collect personal details such as name, email address, phone number, shipping address, and payment information when you place an order or register on our website.",
  },
  {
    id: 1,
    question: "How is my personal information used?",
    ans: "Your information is used to process orders, provide customer service, send updates or promotional offers (if opted in), and improve our website experience.",
  },
  {
    id: 2,
    question: "Do you share my data with third parties?",
    ans: "We do not sell or trade your personal information. However, we may share data with trusted third-party services for order fulfillment, payment processing, and website optimization.",
  },
  {
    id: 3,
    question: "Is my payment information secure?",
    ans: "Yes. All transactions are processed through a secure gateway and we do not store your credit/debit card information on our servers.",
  },
  {
    id: 4,
    question: "Do you use cookies?",
    ans: "Yes, we use cookies to personalize content, analyze site traffic, and improve your overall shopping experience. You can choose to disable cookies in your browser settings.",
  },
  {
    id: 5,
    question: "Can I update or delete my personal data?",
    ans: "Yes, you can request to update or delete your data by contacting our support team. We will respond within 7 business days.",
  },
  {
    id: 6,
    question: "How long do you retain my data?",
    ans: "We retain customer information only as long as necessary to fulfill the purposes outlined in our privacy policy, including legal and accounting obligations.",
  },
  {
    id: 7,
    question: "Do you collect information from children?",
    ans: "No, our website is not intended for users under the age of 13, and we do not knowingly collect personal data from children.",
  },
  {
    id: 8,
    question: "How will I be notified of privacy policy changes?",
    ans: "We will notify you of any changes via email or by posting the updated policy on our website with the revised date.",
  },
  {
    id: 9,
    question: "Who can I contact for privacy-related questions?",
    ans: "If you have any questions about our privacy practices, please contact our support team at privacy@yourperfumestore.com.",
  },
];

export default function PrivacyPolicy() {
    const [index,setisindex]=useState<number|null>(null)

    const toggleFaq=(id:number)=>{
setisindex(index===id?null:id)
    }
  return (
    <div className="p-6 flex flex-col justify-center items-start">
      <h1 className="font-extrabold text-gray-700 text-3xl mt-16">Privacy Policy</h1>
      <h1 className="text-2xl text-gray-700 font-semibold mt-4">How We Handle Your Data</h1>

      <ul className="flex flex-col items-start justify-center p-2">
        <li>● We collect personal information (name, email, address) solely to process and deliver your orders.</li>
        <li>● Your information is securely stored and will never be shared with third parties without your consent.</li>
        <li>● Payment information is encrypted and processed through secure gateways.</li>
        <li>● You can request to view, update, or delete your personal data at any time by contacting our support team.</li>
      </ul>

      <div className="flex flex-col items-start p-2 w-full">
        <h1 className="text-gray-700 font-bold text-2xl md:text-4xl">FAQ`s</h1>
{perfumePrivacyFAQs.map((ques, ind) => (
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
  );
}
