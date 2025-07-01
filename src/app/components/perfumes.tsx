
import { StaticImageData } from "next/image"
import pr1 from "../images/men1.webp";
import pr2 from "../images/men2.webp";
import pr3 from "../images/men3.webp";
import pr4 from "../images/men4.webp";
import pr5 from "../images/men5.webp";
import pr6 from "../images/men6.webp";
import pr7 from "../images/men7.webp";
import pr8 from "../images/men8.webp";
import pr9 from "../images/men9.webp";
import pr10 from "../images/men10.webp";
import pr11 from "../images/men11.webp";
import pr12 from "../images/men12.webp";
import w1 from "../images/women1.webp";
import w2 from "../images/women2.webp";
import w3 from "../images/women3.webp";
import w4 from "../images/women2.webp";
import w5 from "../images/women5.webp";
import w6 from "../images/women9.webp";
import w7 from "../images/women7.webp";
import w8 from "../images/women8.webp";

import w10 from "../images/women10.webp";
import w11 from "../images/women11.webp";
import w12 from "../images/women19.webp";
import w13 from "../images/women13.webp";
import w14 from "../images/women14.webp";
import w15 from "../images/women15.webp";
import w16 from "../images/women16.webp";
import w17 from "../images/women17.webp";
import w18 from "../images/women10.webp";
import w19 from "../images/women19.webp";
import h2 from "../images/hero2.jpg";
import h4 from "../images/hero7.jpg";
import h5 from "../images/hero5.jpg";
import h3 from "../images/hero3.jpg";
import h6 from "../images/hero4.jpg";
import perfume2 from "../images/pefume2.jpg";
import perfume3 from "../images/perfume3.jpg";
import perfume4 from "../images/perfume3.webp";
import perfume5 from "../images/perfume5.jpg";
import perfume6 from "../images/perfume6.jpg";
import perfume7 from "../images/perfume7.jpg";
import perfume8 from "../images/perfume8.jpg";
import perfume9 from "../images/perfume9.jpg";
import her from "../images/perfume.webp";
import hero2 from "../images/perfume3.webp";
import hero from "../images/hero1.jpg";

import perfume1 from "../images/perfume.jpg";



 type Perfume = {
    id: number
    Name: string
    price: number
    cancelledprice: string;
    image: StaticImageData;
    images: StaticImageData[];
    slug: string;
};

 export const perfumes:Perfume[]= [
    {
        id: 0,
        Name: "Gucci Bamboo For Women",
        price: 54,
        cancelledprice: "$100",
        image: w1,
        images: [w1, pr8, h2, perfume2, her],
        slug: "gucci"
    },
    {
        id: 1,
        Name: "Dior J'adore Eau de Parfum",
        price: 78,
        cancelledprice: "$120",
        image: w2,
        images: [w2, pr9, hero, perfume3, h3],
   slug:"dior"
    },
    {
        id: 2,
        Name: "Chanel Coco Mademoiselle",
        price: 89,
        cancelledprice: "$110",
        image: w3,
        images: [w3, pr2, h2, perfume4, h5],
         slug:"chanel"
    },
    {
        id: 3,
        Name: "Yves Saint Laurent Black Opium",
        price: 75,
        cancelledprice: "$95",
        image: w4,
        images: [w4, pr6, h3, perfume5, h6],
        slug:"laurent"  
    },
    {
        id: 4,
        Name: "Versace Bright Crystal",
        price: 60,
        cancelledprice: "$85",
        image: w5,
        images: [w5, pr5, her, perfume6, h4],
          slug:"versace"
    },
    {
        id: 5,
        Name: "Marc Jacobs Daisy",
        price: 68,
        cancelledprice: "$90",
        image: w6,
        images: [w6, pr8, h4, perfume7, h5],
          slug:"marc"
    },
    {
        id: 6,
        Name: "Calvin Klein Euphoria",
        price:55,
        cancelledprice: "$80",
        image: w7,
        images: [w7, pr8, h5, perfume8, h6],
          slug:"calvin",
    },
    {
        id: 7,
        Name: "Lancome La Vie Est Belle",
        price: 72,
        cancelledprice: "$100",
        image: w8,
        images: [w8, pr8, h6, perfume9, hero],
   slug:"lancome",
    },
    {
        id: 8,
        Name: "Burberry Her Eau de Parfum",
        price:65,
        cancelledprice: "$95",
        image: w10,
        images: [w10, pr5, hero2, perfume2, h3],
       slug: "burberry",
    },
    {
        id: 9,
        Name: "Tom Ford Velvet Orchid",
        price: 92,
        cancelledprice: "$120",
        image: w11,
        images: [w11, pr7, h3, perfume3, h4],
    slug: "tom-ford",
    },
    {
        id: 10,
        Name: "Givenchy Irresistible",
        price: 70,
        cancelledprice: "$99",
        image: w12,
        images: [w12, pr8, h4, perfume4, h5],
        slug: "givenchy",
    },
    {
        id: 11,
        Name: "Elie Saab Le Parfum",
        price:66,
        cancelledprice: "$88",
        image: w13,
        images: [w13, pr9, h5, perfume5, h6],
       slug: "elie-saab",
    },
    {
        id: 12,
        Name: "Nina Ricci Nina",
        price:58,
        cancelledprice: "$75",
        image: w14,
        images: [w14, pr10, h6, perfume6, hero],
           slug: "nina-ricci",
    },
    {
        id: 13,
        Name: "Viktor & Rolf Flowerbomb",
        price: 83,
        cancelledprice: "$110",
        image: w15,
        images: [w15, pr11, hero2, perfume7, h2],
        slug: "viktor-rolf",
    },
    {
        id: 14,
        Name: "Carolina Herrera Good Girl",
        price: 88,
        cancelledprice: "$115",
        image: w16,
        images: [w16, pr12, h2, perfume8, h3],
         slug: "carolina",
    },
    {
        id: 15,
        Name: "Moschino Toy 2",
        price: 50,
        cancelledprice: "$70",
        image: w17,
        images: [w17, pr6, h3, perfume9, h4],
       slug: "moschino",
    },
    {
        id: 16,
        Name: "Jean Paul Gaultier Scandal",
        price: 74,
        cancelledprice: "$99",
        image: w18,
        images: [w18, pr1, h4, perfume2, h5],
         slug: "gaultier",
    },
    {
        id: 17,
        Name: "Dolce & Gabbana The One",
        price: 69,
        cancelledprice: "$89",
        image: w19,
        images: [w19, pr2, h5, perfume3, h6],
      slug: "dolce",
    },
    {
        id: 18,
        Name: "Jo Malone Peony & Blush Suede",
        price: 92,
        cancelledprice: "$120",
        image: perfume1,
        images: [perfume1, h5, perfume4, h2, pr3],
        slug: "jo-malone-peony-blush-suede"
    },
    {
        id: 19,
        Name: "Elizabeth Arden Green Tea",
        price: 30,
        cancelledprice: "$45",
        image: perfume1,
        images: [perfume1, h3, perfume5, h4, pr4],
        slug: "elizabeth-arden-green-tea"
    },
    {
        id: 20,
        Name: "Givenchy L'Interdit",
        price: 76,
        cancelledprice: "$99",
        image: perfume1,
        images: [perfume1, h2, perfume6, h5, pr5],
        slug: "givenchy-linterdit"
    },
    {
        id: 21,
        Name: "Armani Si Eau de Parfum",
        price: 84,
        cancelledprice: "$110",
        image: perfume1,
        images: [perfume1, h2, perfume7, h6, pr6],
        slug: "armani-si-eau-de-parfum"
    },
    {
        id: 22,
        Name: "Jimmy Choo Eau de Parfum",
        price: 67,
        cancelledprice: "$85",
        image: perfume1,
        images: [perfume1, h2, perfume8, hero, pr7],
        slug: "jimmy-choo-eau-de-parfum"
    },
    {
        id: 23,
        Name: "Bvlgari Omnia Crystalline",
        price: 59,
        cancelledprice: "$75",
        image: perfume1,
        images: [perfume1, h2, perfume9, hero2, pr8],
        slug: "bvlgari-omnia-crystalline"
    },
    {
        id: 24,
        Name: "Tom Ford Black Orchid",
        price: 88,
        cancelledprice: "$115",
        image: perfume1,
        images: [perfume1, h4, perfume2, h3, pr9],
        slug: "tom-ford-black-orchid"
    },
    {
        id: 25,
        Name: "Dolce & Gabbana Light Blue",
        price: 65,
        cancelledprice: "$85",
        image: perfume1,
        images: [perfume1, h4, perfume3, h2, pr10],
        slug: "dolce-gabbana-light-blue"
    },
      {
    id: 26,
    Name: "Jo Malone Peony & Blush Suede",
    slug: "jo-malone-peony-blush-suede",
    price: 92,
    cancelledprice:"$120",
    image: perfume1,
   images: [perfume1, h4, perfume3, h2, pr10],
  },
  {
    id: 27,
    Name: "Dolce & Gabbana Light Blue",
    slug: "dolce-gabbana-light-blue",
     cancelledprice:"$140",
    price: 65,
    image: perfume1,
   images: [perfume1, h4, perfume4, h3, pr8],
  },
  {
    id: 28,
    Name: "Elizabeth Arden Green Tea",
    slug: "elizabeth-arden-green-tea",
     cancelledprice:"$130",
    price: 30,
    image: perfume1,
    images: [perfume1, h4, perfume2, h4, pr11],
  },
  {
    id: 29,
    Name: "Givenchy L'Interdit",
    slug: "givenchy-linterdit",
     cancelledprice:"$100",
    price: 76,
    image: perfume1,
   
    images: [perfume2, h4, perfume4, h5, pr9],
  },
  {
    id: 30,
    Name: "Armani Si Eau de Parfum",
    slug: "armani-si-eau-de-parfum",
     cancelledprice:"$120",
    price: 84,
    image: perfume1,
    
    images: [perfume1, h4, perfume3, h2, pr10],
  },
  {
    id: 31,
    Name: "Viktor & Rolf Flowerbomb",
    slug: "viktor-rolf-flowerbomb",
     cancelledprice:"$115",
    price: 95,
    image: perfume5,
    images: [perfume1, h4, perfume2, h4, pr9],
  },
  {
    id: 32,
    Name: "Moschino Toy 2",
    slug: "moschino-toy-2",
    price: 52,
     cancelledprice:"$110",
    image: perfume6,
   images: [perfume1, h4, perfume3, h5, pr9],
  },
  {
    id: 33,
    Name: "Jimmy Choo Eau de Parfum",
    slug: "jimmy-choo-eau-de-parfum",
     cancelledprice:"$120",
    price: 67,
    image: perfume1,
    images: [perfume2, h4, perfume2, h3, pr8],
  },
  {
    id: 34,
    Name: "Bvlgari Omnia Crystalline",
    slug: "bvlgari-omnia-crystalline",
     cancelledprice:"$120",
    price: 59,
    image: perfume1,
   images: [perfume1, h4, perfume3, h6, pr9],
  },
  {
    id: 35,
    Name: "Carolina Herrera Good Girl",
    slug: "carolina-herrera-good-girl",
     cancelledprice:"$110",
    price: 85,
    image: perfume1,
    images: [perfume1, h4, perfume2, h2, pr9],
  },
   {
id:36,
Name: "Perfume M2 for 50 Ml",
image:her,
price: 72,
cancelledprice:"$110",
slug:"m2",
images: [perfume1, h4, perfume2, h2, pr9],
    },
     {
id:37,
Name: "Ocean Waves for 50 Ml",
image:hero2,
cancelledprice:"$110",
price: 84,
slug:"ocean",
images: [perfume2, h4, perfume2, h3, pr8],
    }
];