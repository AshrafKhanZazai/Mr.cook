import cardimg1 from "./images/cardImg1.png"
import cardimg2 from "./images/cardImg2.png"
import cardimg3 from "./images/cardImg3.png"
import cardimg4 from "./images/cardImg4.png"
import Star from "./images/star.png"






const SpeacialFood = () => {
  return (
    <>
    <div className="text-gray-300">
     <h1 className="text-center " style={{fontSize: "50px", fontWeight : "600"}}>Today <span className="text-red-500">Special</span> offers</h1>
     <p className="text-center sm:text:sm text-gray-400 mt-5">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The <br />Industry{"'"}s Standard Dummy Text Ever Since The 1500s.</p>
    </div>
<div className="justify-between grid gap-12 grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-4 md:gap-y-12 items-center min-h-screen">
  <div className="max-w-[720px] mx-auto">
            <div
            className="relative flex justify-center items-center m-0 overflow-hidden text-gray-200 bg-transparent rounded-none shadow-none bg-clip-border">
      <img
        style={{ height: "200px", width: "200px" }}
        src={cardimg1}
        alt="ui/ux review check"
        className="max-w-full h-auto z-10" // This ensures the image is responsive
        />
    </div>
    <div
      style={{
        background: "linear-gradient(to bottom, #3F3F3F 30%, #F54748 300%, #F54748 190%), linear-gradient(to top, rgba(255,255,255,0.90) 0%, rgba(0,0,0,0.1) 200%)",
        backgroundBlendMode: "multiply",
        height: "25rem",
        marginTop: "-7rem"
    }}
      className="relative flex max-w-[17rem] flex-col overflow-hidden rounded-xl bg-clip-border text-gray-200 shadow-md"
    >
      <div className="p-6 mt-12">
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="flex items-center -space-x-4">
          <img
            alt="natali craig"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
          <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
          <img alt="Tania Andrew"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1728045327~exp=1728048927~hmac=3cbb798ae72c12551afe2fbf4a8a1a8e1b6ded3356b9348b00928f1c77f091b0&w=900"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
        </div>
        <div className="flex">
          <img className="ml-3" src={Star} width="22" alt="rate" />
          <p className="text-md font-bold ml-1">(3.2)</p>
        </div>
      </div>
      <h4 className="block text-red-500 text-center font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Kebab
      </h4>
      <p className="block text-center mt-3 font-sans text-md antialiased font-normal leading-relaxed text-gray-300">
        Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dream
      </p>
      
      <div className="flex justify-center mt-6 mb-4 z-40">
        <button className="bg-red-600 text-md hover:bg-red-700 text-white border-0 py-3 px-6 rounded-full">
          Order Now
        </button>
      </div>
    </div>
  </div>
  <div className="max-w-[720px] mx-auto">

            <div
            className="relative flex justify-center items-center m-0 overflow-hidden text-gray-200 bg-transparent rounded-none shadow-none bg-clip-border">
      <img
        style={{ height: "200px", width: "200px" }}
        src={cardimg2}
        alt="ui/ux review check"
        className="max-w-full h-auto z-10" // This ensures the image is responsive
        />
    </div>
    <div
      style={{
        background: "linear-gradient(to bottom, #3F3F3F 30%, #F54748 300%, #F54748 190%), linear-gradient(to top, rgba(255,255,255,0.90) 0%, rgba(0,0,0,0.1) 200%)",
        backgroundBlendMode: "multiply",
        height: "25rem",
        marginTop: "-7rem"
    }}
      className="relative flex max-w-[17rem] flex-col overflow-hidden rounded-xl bg-clip-border text-gray-200 shadow-md"
    >
      <div className="p-6 mt-12">
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="flex items-center -space-x-4">
          <img alt="natali craig"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1728045327~exp=1728048927~hmac=3cbb798ae72c12551afe2fbf4a8a1a8e1b6ded3356b9348b00928f1c77f091b0&w=900"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
          <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
          <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
        </div>
        <div className="flex">
          <img className="ml-3" src={Star} width="22" alt="rate" />
          <p className="text-md font-bold ml-1">(2.6)</p>
        </div>
      </div>
      <h4 className="block text-red-500 text-center font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Chicken Tikka      </h4>
      <p className="block text-center mt-3 font-sans text-md antialiased font-normal leading-relaxed text-gray-300">
        Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dream
      </p>
      
      <div className="flex justify-center mt-6 mb-4 z-40">
        <button className="bg-red-600 text-md hover:bg-red-700 text-white border-0 py-3 px-6 rounded-full">
          Order Now
        </button>
      </div>
    </div>
  </div>
  <div className="max-w-[720px] mx-auto">

            <div
            className="relative flex justify-center items-center m-0 overflow-hidden text-gray-200 bg-transparent rounded-none shadow-none bg-clip-border">
      <img
        style={{ height: "200px", width: "200px" }}
        src={cardimg3}
        alt="ui/ux review check"
        className="max-w-full h-auto z-10" // This ensures the image is responsive
        />
    </div>
    <div
      style={{
        background: "linear-gradient(to bottom, #3F3F3F 30%, #F54748 300%, #F54748 190%), linear-gradient(to top, rgba(255,255,255,0.90) 0%, rgba(0,0,0,0.1) 200%)",
        backgroundBlendMode: "multiply",
        height: "25rem",
        marginTop: "-7rem"
    }}
      className="relative flex max-w-[17rem] flex-col overflow-hidden rounded-xl bg-clip-border text-gray-200 shadow-md"
    >
      <div className="p-6 mt-12">
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="flex items-center -space-x-4">
          <img alt="natali craig"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
          <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
          <img alt="Tania Andrew"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1728045327~exp=1728048927~hmac=3cbb798ae72c12551afe2fbf4a8a1a8e1b6ded3356b9348b00928f1c77f091b0&w=900"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
        </div>
        <div className="flex">
          <img className="ml-3" src={Star} width="22" alt="rate" />
          <p className="text-md font-bold ml-1">(5.0)</p>
        </div>
      </div>
      <h4 className="block text-red-500 text-center font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Desi Chowmein      </h4>
      <p className="block text-center mt-3 font-sans text-md antialiased font-normal leading-relaxed text-gray-300">
        Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dream
      </p>
      
      <div className="flex justify-center mt-6 mb-4 z-40">
        <button className="bg-red-600 text-md hover:bg-red-700 text-white border-0 py-3 px-6 rounded-full">
          Order Now
        </button>
      </div>
    </div>
  </div>
  <div className="max-w-[720px] mx-auto">

            <div
            className="relative flex justify-center items-center m-0 overflow-hidden text-gray-200 bg-transparent rounded-none shadow-none bg-clip-border">
      <img
        style={{ height: "200px", width: "200px" }}
        src={cardimg4}
        alt="ui/ux review check"
        className="max-w-full h-auto z-10" // This ensures the image is responsive
        />
    </div>
    <div
      style={{
        background: "linear-gradient(to bottom, #3F3F3F 30%, #F54748 300%, #F54748 190%), linear-gradient(to top, rgba(255,255,255,0.90) 0%, rgba(0,0,0,0.1) 200%)",
        backgroundBlendMode: "multiply",
        height: "25rem",
        marginTop: "-7rem"
    }}
      className="relative flex max-w-[17rem] flex-col overflow-hidden rounded-xl bg-clip-border text-gray-200 shadow-md"
    >
      <div className="p-6 mt-12">
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="flex items-center -space-x-4">
          <img alt="natali craig"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1728045327~exp=1728048927~hmac=3cbb798ae72c12551afe2fbf4a8a1a8e1b6ded3356b9348b00928f1c77f091b0&w=900"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
          <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
          <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
            className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10" />
        </div>
        <div className="flex">
          <img className="ml-3" src={Star} width="22" alt="rate" />
          <p className="text-md font-bold ml-1">(4.8)</p>
        </div>
      </div>
      <h4 className="block text-red-500 text-center font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Chicken Chargha      </h4>
      <p className="block text-center mt-3 font-sans text-md antialiased font-normal leading-relaxed text-gray-300">
        Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dream
      </p>
      
      <div className="flex justify-center mt-6 mb-4 z-40">
        <button className="bg-red-600 text-md hover:bg-red-700 text-white border-0 py-3 px-6 rounded-full">
          Order Now
        </button>
      </div>
    </div>
  </div>
</div>














    </>
  )
}

export default SpeacialFood