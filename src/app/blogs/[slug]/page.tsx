import hero from "../../images/hero1.jpg"
import hero2 from "../../images/hero2.jpg"
import hero3 from "../../images/hero3.jpg"
import hero4 from "../../images/hero4.jpg"
import hero5 from "../../images/hero5.jpg"
import hero6 from "../../images/herpo6.jpg"
import hero7 from "../../images/hero7.jpg"
import { StaticImageData } from "next/image"
import hero8 from "../../images/hero8.jpg"
import  Image  from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
type Perfume = {
  id: number;
  title: string;
  date: string;
  slug: string;
  intro:string
  image: StaticImageData
  detailed:string
};
const perfumeBlogPosts: Perfume[] = [
  {
    id: 1,
    title: "How to Choose the Right Perfume for Every Season",
    date: "2025-05-28",
    slug: "choose-right-perfume-season",
    image: hero,
    intro: "Choosing the right perfume for each season is essential for enhancing your mood and presence. Scents interact differently with temperature and humidity, making seasonal selection more than just a luxury—it’s a necessity. Light florals and citruses thrive in the warmth of summer, while warm, spicy scents bring comfort in winter. Knowing what works best for each time of year elevates your fragrance game. In this blog, we’ll guide you through seasonal scent strategies.",
    detailed: `Perfumes are deeply influenced by the environment, and adjusting your fragrance wardrobe by season can improve both projection and longevity. In spring, nature begins to bloom, so fresh florals like jasmine, peony, and green tea make excellent choices. These notes mirror the freshness of the season and feel light and optimistic.
    
    Summer requires even more attention. Higher temperatures intensify scent molecules, so opt for citrus-based perfumes like bergamot, lemon, or neroli. Aquatic and marine-inspired scents also offer a refreshing, cool sensation on hot days.
    
    Autumn welcomes deeper scents. Think amber, patchouli, fig, and subtle spices like clove or cinnamon. These notes bring a cozy, nostalgic feeling that aligns with falling leaves and sweater weather.
    
    Winter is the season for bold, powerful fragrances. Perfumes with oud, vanilla, musk, or leather have excellent staying power and evoke warmth. This is also the perfect time to experiment with gourmand fragrances that include chocolate, coffee, or caramel.
    
    Choosing the right perfume by season helps you match the atmosphere around you and enhances your overall impression. It also allows you to enjoy a wider variety of scents throughout the year, ensuring that your fragrance always feels fresh and fitting.`
  },
  {
    id: 2,
    title: "The History of Perfume: From Ancient Egypt to Today",
    date: "2025-05-26",
    slug: "history-of-perfume",
    image: hero2,
    intro: "Perfume has a rich and storied past that spans thousands of years. What began as religious rituals in ancient temples evolved into a global industry. Civilizations across Egypt, Mesopotamia, Greece, and Rome used scents in worship, status, and seduction. Over time, perfume traveled across continents, adapting and evolving with culture and science. This post traces perfume’s fascinating journey from ancient times to modern elegance.",
    detailed: `The history of perfume dates back to 3000 BC, with ancient Egyptians being among the first to use aromatic oils for religious ceremonies and personal adornment. Scents like frankincense and myrrh were burned as offerings to the gods. Perfume symbolized status, and pharaohs were often buried with aromatic oils.
    
    In Mesopotamia and Persia, early chemists refined distillation techniques, influencing how fragrances were made. The Greeks adopted these practices and celebrated perfume in mythology and medicine. Romans embraced perfumes lavishly, using them in baths, homes, and even on animals.
    
    During the Islamic Golden Age, advancements in chemistry led to more sophisticated methods of perfume extraction and storage. Avicenna, a Persian physician, perfected steam distillation, making rosewater a staple in perfumery.
    
    The Renaissance in Europe brought a perfume boom. Italian and French elites began using perfumes more frequently, especially in courts. Grasse, France, emerged as a perfume hub due to its flower farms and favorable climate.
    
    By the 19th century, industrialization enabled mass production. Synthetics were introduced, allowing perfumers to create new, longer-lasting scents. Brands like Guerlain and Chanel set standards that influence the industry even today.
    
    Perfume has evolved from sacred rituals to personal expression, luxury, and identity. Its story is a blend of culture, science, and artistry—a sensory timeline of human history.`
  },
  {
    id: 3,
    title: "Understanding Fragrance Notes: Top, Middle & Base Explained",
    date: "2025-05-24",
    slug: "fragrance-notes-explained",
    image: hero3,
    intro: "Fragrance is more than just a smell—it's a layered experience. Each perfume is crafted with a structure of top, middle, and base notes. These layers unfold over time, revealing different aspects of the scent. Understanding this note pyramid can help you choose perfumes that develop beautifully and suit your preferences. Let’s break down how each note functions in your favorite fragrance.",
    detailed: `A well-crafted perfume is like a symphony, composed of three layers: top, middle, and base notes. These layers are called the fragrance pyramid and play distinct roles in the scent’s development on your skin.

    Top notes are the first impressions. They are usually light and fresh—think citrus, herbs, or fruity elements like bergamot, lemon, or mint. They evaporate quickly, typically within 15 minutes.

    Middle notes, or heart notes, emerge next. These define the core identity of the fragrance and can last for a few hours. Common middle notes include florals like rose, jasmine, and ylang-ylang, or spices like cinnamon and cardamom.

    Base notes provide depth and longevity. They appear as the scent settles and linger the longest—sometimes for an entire day. Notes like vanilla, musk, sandalwood, amber, and oud are often used here.

    Understanding fragrance notes helps you choose a perfume that evolves well with your skin chemistry. Some people may love the opening freshness but dislike the dry-down. Others may prefer a scent that starts soft and ends boldly.

    When shopping, test the perfume and wait 30 minutes to see how it settles. Read the note breakdown on the bottle or brand website. This will guide you toward perfumes with structures you enjoy.

    Once you understand the notes, you’ll not only enjoy fragrances more but also find it easier to build a scent wardrobe that truly reflects your personality.`
  },
  {
    id: 4,
    title: "Perfume Layering: Create a Signature Scent That’s Yours",
    date: "2025-05-22",
    slug: "perfume-layering-guide",
    image: hero4,
    intro: "Perfume layering is a creative way to personalize your scent. By combining two or more fragrances, you can create something truly unique that reflects your personality. This technique allows you to adapt your fragrance to different occasions or moods. But it’s more than just spraying multiple perfumes—it’s about understanding how scents interact. Here’s how to master the art of layering.",
    detailed: `Perfume layering allows you to customize your scent by combining different fragrances. The goal is to create a blend that is harmonious, long-lasting, and distinctly yours.

    Start by understanding the strength and character of each perfume. Lighter scents like citruses and florals typically work well as a base. Heavier perfumes—like musks, ouds, and vanillas—should be applied second, as they last longer and define the dry-down.

    Apply the first scent to your pulse points (neck, wrists), then spray the second one on top or nearby. Let them dry naturally; don’t rub them together, as this breaks down the scent molecules.

    Stick with complementary scent families to avoid clashing. For example, a floral with a vanilla base can pair beautifully with a fruity or musky fragrance. Always test combinations before wearing them out.

    Some fragrance brands offer dedicated layering collections to guide users. You can also explore layering body lotions or oils with perfumes for even more control.

    With layering, your signature scent becomes something no one else has. It’s a form of fragrance art that speaks to your individuality.`
  },
  {
    id: 5,
    title: "Top 10 Perfume Trends in 2025 You Should Know",
    date: "2025-05-20",
    slug: "top-perfume-trends-2025",
    image: hero5,
    intro: "Perfume trends are constantly evolving, shaped by culture, fashion, and technology. In 2025, we’re seeing bold shifts toward sustainability, niche scents, and genderless compositions. Consumers are craving unique, expressive perfumes that reflect their values and moods. Whether you're a collector or casual wearer, these trends will shape the fragrances you'll see everywhere this year. Let’s explore the top perfume trends of 2025.",
    detailed: `Perfume in 2025 is all about identity, sustainability, and innovation. Here are the top 10 trends reshaping the fragrance industry:

    1. **Gender-neutral fragrances**: Perfumes are moving beyond traditional gender labels, with unisex scents becoming mainstream.
    2. **Sustainability focus**: Eco-friendly packaging and ethically sourced ingredients are in demand.
    3. **Niche perfumes**: People are seeking rare, artisanal scents over mass-produced options.
    4. **Scent layering kits**: Brands are offering tools for personalizing your fragrance combinations.
    5. **Gourmand comeback**: Sweet, edible notes like chocolate, caramel, and coffee are surging.
    6. **Transparent ingredient lists**: Customers want to know exactly what's in their perfume.
    7. **Tech integration**: AI-driven scent recommendations are becoming common.
    8. **Molecule-based scents**: Minimalist, skin-like perfumes are gaining traction.
    9. **Customizable perfumes**: More brands now offer create-your-own scent experiences.
    10. **Mood-based marketing**: Fragrances are being designed around emotions like “calm” or “confidence.”

    As perfume becomes a tool for self-expression, the 2025 trends reflect a deeper connection between scent, identity, and innovation.`
  },
  {
    id: 6,
    title: "The Difference Between Eau de Parfum and Eau de Toilette",
    date: "2025-05-18",
    slug: "eau-de-parfum-vs-eau-de-toilette",
    image: hero6,
    intro: "When shopping for perfume, you’ve probably noticed terms like Eau de Parfum and Eau de Toilette. While they might smell similar at first, there are key differences in concentration, longevity, and price. Understanding these variations can help you pick the right version for your needs and budget. Let's break down what sets them apart.",
    detailed: `The main difference between Eau de Parfum (EDP) and Eau de Toilette (EDT) lies in the **fragrance concentration**.

    - **Eau de Parfum (EDP)** typically contains 15–20% fragrance oil. This makes it richer, longer-lasting, and often more expensive. EDPs can last 6–8 hours or more.
    
    - **Eau de Toilette (EDT)** has about 5–15% fragrance oil. It’s lighter, fresher, and fades faster—usually lasting 3–5 hours.
    
    Because of their concentration, EDPs tend to have deeper base notes and a more pronounced dry-down. EDTs, in contrast, focus more on top and middle notes, often feeling brighter or more airy.
    
    Which one to choose depends on your lifestyle. If you want something strong for evenings or events, go with EDP. For daily wear or warmer climates, EDT may be a better fit.
    
    Some perfumes are available in both versions. It’s worth testing them side by side—same name, but potentially different scent experience.

    Understanding the difference helps you spend wisely and enjoy your fragrance longer.`
  },
  {
    id: 7,
    title: "How to Make Your Perfume Last All Day: Pro Tips",
    date: "2025-05-16",
    slug: "make-perfume-last-longer",
    image: hero7,
    intro: "Nothing’s more frustrating than applying your favorite perfume only for it to fade quickly. Fortunately, there are proven ways to boost longevity and ensure you smell amazing all day. From application techniques to scent layering, small changes can make a big impact. Here are expert tips to help your perfume last longer.",
    detailed: `To make your perfume last all day, start with proper application and skin preparation.

    1. **Moisturize your skin first**: Perfume holds better on hydrated skin. Use an unscented lotion or one that matches the scent.
    2. **Apply to pulse points**: Focus on neck, wrists, elbows, and behind the knees—these warm areas help diffuse scent.
    3. **Don’t rub your wrists**: It breaks down the fragrance molecules, affecting the scent’s evolution.
    4. **Layer with matching products**: Use body wash or lotion from the same fragrance line.
    5. **Spray on clothes**: Fabric holds scent longer, but be cautious with delicate materials.
    6. **Store properly**: Keep perfumes away from sunlight and heat to preserve potency.
    7. **Use a travel sprayer**: Reapply mid-day if needed, especially in hot climates.

    With these pro tips, you’ll get the most out of your perfume and keep your signature scent lingering all day.`
  },
  {
    id: 8,
    title: "Perfume for Different Occasions: A Scent for Every Moment",
    date: "2025-05-14",
    slug: "perfume-for-every-occasion",
    image: hero8,
    intro: "Different events call for different fragrances. A romantic dinner, a job interview, or a casual day out each benefits from a unique scent profile. Choosing the right perfume for each occasion not only enhances your confidence but also leaves a memorable impression. In this guide, we match fragrance styles to life’s key moments.",
    detailed: `Perfume has the power to elevate your presence, and choosing the right one for each occasion enhances how you’re perceived.

    - **Work**: Opt for light, clean fragrances with citrus or herbal notes. They project professionalism without being overwhelming.
    - **Date Night**: Go for warm, seductive scents like vanilla, musk, or amber. These evoke intimacy and mystery.
    - **Casual Day**: Fruity or floral perfumes feel fresh and approachable—perfect for errands or brunch.
    - **Formal Events**: Sophisticated blends with oud, rose, or patchouli add elegance and lasting impression.
    - **Gym or Sport**: Choose very light, refreshing scents—or skip perfume entirely and go for a scented body mist.

    Always consider your environment and the people around you. Strong perfumes may be unwelcome in tight spaces like elevators or meetings. With time, you'll build a fragrance wardrobe tailored to your lifestyle.

    Matching perfume to the moment adds intention to your style—and people will remember how you smelled just as much as what you wore.`
  }
];

export default function BlogsPage({params}:{params:{slug:string}}){
    const blogs=perfumeBlogPosts.find((blog)=>blog.slug===params.slug)
    if(!blogs){
return notFound()
    }

    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center m-5 px-5 py-5 space-y-2 mt-20">

                
                
                     <Image src={blogs.image}alt={blogs.title}className="rounded-xl"/>
                     <div className=" mt-5 space-y-4">
                        <h1 className="text-2xl md:text-4xl font-semibold text-wrap border-b-2 border-black">
                            Introduction
                        </h1>
                        <p className="text-xl font-extralight tracking-wide">
                            {blogs.intro}
                        </p>
                        <h1 className="text-2xl md:text-4xl font-semibold text-wrap border-b-2 border-black">{blogs.title}</h1>
                        <p className="text-xl font-extralight tracking-wide">{blogs.detailed}</p>
                     </div>
            <div className="flex flex-col items-center mt-20">
                <h1 className="uppercase text-2xl md:text-4xl">You may also like</h1>
                <Link href="/blogs"><button className="font-semibold text-lg uppercase">view all</button></Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center space-y-6 gap-4 px-2 py-2 ml-1 mr-1">
 {
                perfumeBlogPosts.slice(0,3).map((blog)=>(
                    <div key={blog.id} className="shadow-xs flex flex-col items-center overflow-auto w-full space-y-3">
                      <Link href={`/blogs/${blog.slug}`}> <Image className="w-96 h-64 object-cover rounded-xl" src={blog.image}alt=""/></Link>
                      <h1 className="text-black text-lg font-normal">{blog.date}</h1> 
                      <label className="font-mediim text-center text-black text-2xl text-balance">{blog.title}</label>
                    </div>
                ))
            }
</div>
            </div>
               
            </div>
        </div>
    )

}