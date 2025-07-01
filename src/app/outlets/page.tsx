

export default function Outlets(){
    return (
<div className="flex flex-col items-center justify-center p-2">
    <span className="flex flex-col items-center justify-start">
 <h1 className="text-2xl sm:text-3xl md:text-4xl lg::text-6xl text-gray-700 font-medium mt-20">Our Outlets</h1>
    <h1 className="text-xl text-gray-400 font-semibold">We also invite you at our Outlets</h1>
    </span>

    <div className="grid  mt-12 items-start justify-center">
      
    
<span className="flex flex-col ">
    <h1 className="text-3xl text-blue-800 font-semibold">1.Atrium Mall</h1>
    <p className="text-xl font-normal mb-5">Address: <label className="font-bold underline">Ground Floor, Atrium Mall, Saddar, Karachi - Pakistan.</label></p>
     <iframe
    src="https://maps.google.com/maps?q=Atrium+Mall/@24.8560786,67.0276965,17z/data=&z=13&ie=UTF8&iwloc=&output=embed"
    className="left-0 top-0 h-full w-full"
    frameBorder={0}
    
  />
</span>
<span className="flex flex-col mt-10">
    <h1 className="text-3xl text-blue-800 font-semibold">2.Dolmen Mall</h1>
    <p className="text-xl font-normal mb-5">Address: <label className="font-bold underline"> 116 Ground Floor, Atrium Mall, North Nazimabad, Karachi - Pakistan.</label></p>
      <iframe
    src="https://maps.google.com/maps?q=Dolmen+Mall+Hyderi/@24.9355566,67.0041856,14z/data=&z=13&ie=UTF8&iwloc=&output=embed"
    className="left-0 top-0 h-full w-full"
    frameBorder={0}
    
  />
</span>
<span className="flex flex-col mt-10">
    <h1 className="text-3xl text-blue-800 font-semibold">2.Dolmen Mall</h1>
    <p className="text-xl font-normal mb-5">Address: <label className="font-bold underline">Ground Floor, Atrium Mall, North Nazimabad, Karachi - Pakistan.</label></p>
      <iframe
    src="https://maps.google.com/maps?q=Dolmen+Mall+Tariq+Road/@24.8766357,67.0265854,14z/data=&z=13&ie=UTF8&iwloc=&output=embed"
    className="left-0 top-0 h-full w-full"
    frameBorder={0}
    
  />
</span>

    </div>
</div>

    )
}