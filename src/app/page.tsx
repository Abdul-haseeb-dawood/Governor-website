
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';



export default function Home() {
  let cards = [
    {
      detail: "Programming Fundamentals",
      image: "card-1.jpg", 
    }, 

    {
      detail: "Web2 Using NextJs",
      image: "card-2.jpg", 
    }, 

    {
      detail: "Earn as You Learn",
      image: "card-3.jpg", 
    }, 
  ];
  let secondCard = [
    {
      detail: "Artificial Intelligence",
      image: "card-4.jpg", 
    }, 

    {
      detail: "Web 3 and Metaverse",
      image: "card-5.jpg", 
    }, 

    {
      detail: "Cloud-Native Computing",
      image: "card-6.jpg", 
    }, 
    {
      detail: "Ambient Computing and IoT",
      image: "card-7.jpg", 
    }, 
    {
      detail: "Genomics and Bioinformatics",
      image: "card-8.jpg", 
    }, 
    {
      detail: "Network Programmability and Automation",
      image: "card-9.jpg", 
    }, 
  ];




  return (
<div>


{/* header */}
<div className='fixed z-50 w-full '>
<header>
        <div className=" bg-blue-800 h-20 py-6 text-lg text-white">

          <nav className="flex justify-end z-50 ">
            <Link className="mr-9 cursor-pointer" href={"/"}>Home</Link>
            <Link className="mr-9 cursor-pointer" href={"/Apply"}>Apply</Link>
            <Link className="mr-9 cursor-pointer" href={"/Jobs"}>Jobs</Link>
            <Link className="mr-9 cursor-pointer" href={"/Courses"}>Courses</Link>
            <Link className="mr-14 cursor-pointer" href={"/Result"}>Result</Link>

          </nav>
            <p className="flex justify-start ml-56 -mt-7 text-2xl font-bold">Tuition Free Education Program on Latest Technologies</p>

            <div className="z-50 relative">
            <Image className="-mt-7 ml-6 cursor-pointer " src={"/picture/govt.png"} alt="logo" width={90} height={90}></Image>
            </div>

        </div>

      </header>
</div>

{/* Hero section */}
<div>

  {/* bg-image */}
<div 
className="pt-12 bg-cover bg-center bg-no-repeat z-10 overflow-hidden relative after:absolute after:inset-0 after:bg-slate-50 after:bg-opacity-65 "
style={{ backgroundImage: "url('/picture/bg_house.jpg')" }}>


  <div className="flex justify-between items-start">
    {/* Left content */}
    <div className="w-1/2 z-50">
      <h1 className="text-6xl text-blue-900 mt-28 ml-7 font-extrabold tracking-wide ">
        Governor Sindh
      </h1>
      <p className="text-[2.7rem] font-sans ml-8 font-normal -mt-1 text-blue-800 tracking-widest">
        Kamran Khan Tessori
      </p>
      <div className="text-[2.7rem] font-extrabold text-blue-400 ml-7">
        <p className="-mb-4">Certified Cloud</p>
        <p className="-mb-3">Applied Generative AI</p>
        <p>Engineer (GenEng)</p>
      </div>
      <p className="text-blue-900 ml-7 font-bold font-sans text-2xl mt-4">
        Earn up to $5,000 / month
      </p>
      <p className="tracking-wider text-blue-900 ml-7 font-bold font-sans text-2xl mt-4">
        Now admissions are open in <br /> Hyderabad
      </p>

      {/* Button and text section */}
      <div className="flex flex-wrap mt-10">
        <button className="text-lg rounded-lg tracking-widest bg-blue-900 text-white ml-8 py-2 px-12 font-extrabold mt-7 mb-2 font-sans hover:translate-y-1 hover:font-sans hover:font-extrabold">
          Apply Now
        </button>
        <div className="ml-24">
          <p className="mt-7 text-3xl font-extrabold text-blue-900">562,143</p>
          <p className="text-blue-900 text-lg font-normal">
            Accepted Applications
          </p>
        </div>
      </div>
    </div>

    {/* Right image */}
    <div className="w-1/2 flex justify-end mt-10 z-50">
      <Image
        src={"/picture/govImg.png"}
        alt="logo"
        height={1212}
        width={1600}
        className="-mr-64 h-auto min-w-[900px]"
      />
    </div>
  </div>
 

</div>
</div>


{/* Mainpage div */}
<div>
<div>

<div>
<div className="tracking-tight text-blue-900 font-bold text-[2.1rem] font-sans mt-20 text-center ">
        <h1 >
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur <br /> 
        </h1>
        <h1>Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
        </div>
  
        <p className="text-black font-sans tracking-wide my-8 text-[1.3rem] text-justify mx-8 ">
        The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>
</div>

{/* 3 picture */}
<div className="flex justify-evenly">

<Image src={"/picture/img-1.jpg"} alt='pic-1' width={420} height={0} className='rounded-lg shadow-2xl shadow-black h-[19rem] '></Image>

<Image src={"/picture/img-2.jpg"} alt='pic-1' width={420} height={0} className='rounded-lg shadow-2xl shadow-black h-[19rem]'></Image>

<Image src={"/picture/img-3.jpg"} alt='pic-1' width={420} height={0} className='rounded-lg shadow-2xl shadow-black h-[19rem] '></Image>

</div>

      

</div>
</div>



{/* carousel */}
<div className='h-full w-full my-8'>
<div className="carousel  w-[80rem] h-[35rem] mx-10 gap-4 ">

    <div className="carousel-item  w-1/2">
      <img
        src="/picture/slider-pic/slider-1.jpg"
        className="w-full rounded-xl" />
    </div>

    <div className="carousel-item  w-1/2">
      <img
        src="/picture/slider-pic/slider-2.jpg"
        className="w-full rounded-xl" />
    </div>

    <div className="carousel-item  w-1/2">
      <img
        src="/picture/slider-pic/slider-3.jpg"
        className="w-full rounded-xl" />
    </div>

    <div className="carousel-item  w-1/2">
      <img
        src="/picture/slider-pic/slider-4.jpg"
        className="w-full rounded-xl" />
    </div>

    <div className="carousel-item  w-1/2">
      <img
        src="/picture/slider-pic/slider-5.jpg"
        className="w-full rounded-xl" />
    </div>

    <div className="carousel-item  w-1/2">
      <img
        src="/picture/slider-pic/slider-6.jpg"
        className="w-full rounded-xl" />
    </div>

    <div className="carousel-item  w-1/2">
      <img
        src="/picture/slider-pic/slider-7.jpg"
        className="w-full rounded-xl" />
    </div>

    <div className="carousel-item  w-1/2">
      <img
        src="/picture/slider-pic/slider-8.jpg"
        className="w-full rounded-xl" />
    </div>

   
   
  </div>
  </div>

{/* card div*/}

<div >

<div className='h-[30rem] w-full -my-5 pt-4 '>
          <h1 className='ml-8 my-8  tracking-tight text-blue-900 font-bold text-[2.7rem] font-sans'>Core Courses Sequence</h1>
    
            {/* Main div */}
          <div className='flex items-start gap-12 ml-8'>

        {cards.map((item,i)=>(
 
 <div key={i} className="w-72 shadow-lg  rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 will-change-transform ">
 <Image
   src={`/picture/cards-pic/${item.image}`}
   alt="Card Image"
   height={150}
   width={150}
   className="object-cover w-full h-48"
 />

 <div>
   <p className="flex justify-center text-center bg-white text-gray-700 py-6 font-bold">
     {item.detail}
   </p>
 </div>
</div>

        ))} 
       {/* card */}
     
      </div>
    
 </div>
</div>
        

{/* new card div */}

<div>
  <h1 className='ml-8 my-8  tracking-tight text-blue-900 font-bold text-[2.7rem] font-sans'>
  Advanced Courses
  </h1>
      {/* Main div */}
      <div className=' ml-8 grid grid-cols-4 gap-10 mb-20'>

{secondCard.map((item,a)=>(

<div key={a} className="w-72 shadow-lg  rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 will-change-transform ">
<Image
src={`/picture/cards-pic/${item.image}`}
alt="Card Image"
height={150}
width={150}
className="object-cover w-full h-48"
/>

<div>
<p className="flex justify-center text-center bg-white text-gray-700 py-6 font-bold">
{item.detail}
</p>
</div>
</div>

))} 
{/* card */}

</div>
</div>


{/* footer */}
<div>
<div>
          <footer className="bg-gray-100 h-[25rem]  text-white py-4">
      <div className="container mx-auto text-center flex flex-col-3 mt-16">
       
       <div>
        <h1 className="text-black font-bold text-[1.20rem] mb-5 mr-80 ">Core Courses</h1>
        
        {/* Link 1 */}
        <div>
        <Link href={"/Programming Fundamentals"} className='text-gray-700 -ml-60  ' >Programming Fundamentals</Link>
        </div>
      
        <div className='mt-4'>
        <Link href={"/Web2 Using NextJS"} className='text-gray-700 -ml-72 mr-3  ' >Web2 Using NextJS</Link>
        </div>

        <div className='mt-4'>
        <Link href={"/Earn as You Learn"} className='text-gray-700 -ml-80 -mr-2 ' >Earn as You Learn</Link>
        </div>
        
       </div>
       
        {/* Adance courses */}
       <div>
        <h1 className="text-black font-bold text-[1.20rem] mr-80 ">Advanced Courses</h1>

        <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-80 -ml-4">Web 3 and Metaverse</Link>
          </div>

          <div className="mt-4">
          <Link href={"/Cloud-Native Computing"} className="text-gray-700 mr-80 -ml-1 ">Cloud-Native Computing</Link>
          </div>

          <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-48  ">Artificial Intelligence (AI) and Deep Learning</Link>
          </div>

          <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-80 ml-4  ">Ambient Computing and IoT</Link>
          </div>
          <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-80 ml-5  ">Genomics and Bioinformatics</Link>
          </div>
          <div className="mt-4">
          <Link href={"/"} className="text-gray-700 mr-52  ">Network Programmability and Automation</Link>
          </div>
        </div>
       
        {/* Imp Links */}
        
       <div>
        <h1 className="text-black font-bold text-[1.20rem] -ml-40 ">Social Links</h1>
      
      <div className="flex  ">
      <Image className='h-[3.3rem] mt-2 cursor-pointer -ml-14' src={"/picture/logo/facebook.png"} alt='facebook-logo' width={48} height={0}></Image>
       
       <Image className='h-[3.3rem] mt-2 cursor-pointer' src={"/picture/logo/youtube.webp"} alt='youtube-logo' width={48} height={0}></Image>
       
       <Image className='h-[3.3rem] mt-2 cursor-pointer' src={"/picture/logo/twitter.png"} alt='Twitter-logo' width={45} height={0}></Image>

       <Image className='h-[4.2rem] cursor-pointer' src={"/picture/logo/insta.webp"} alt='Insta-logo' width={55} height={0}></Image>

       <Image className='h-[2.6rem] mt-3 cursor-pointer' src={"/picture/logo/tiktok.webp"} alt='Tiktok-logo' width={38} height={0}></Image>
       </div>
       
    
       </div> 
       
       


   
       </div>
    </footer>
    </div>
</div>



</div>


);
}

