import Star from "/public/images/star.png"
import cardData from "./Ramen Menu.json"




const Ramen = () => {
  return (

<>
  <div className="grid px-12 gap-12 grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 md:gap-y-12 items-center mx-auto max-w-[1280px] lg:justify-center">
  {cardData.map((card, index) => (
    <div className="max-w-[17rem] mx-auto" key={index}>
      <div className="relative flex justify-center items-center m-0 overflow-hidden text-gray-200 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          style={{ height: "200px", width: "200px" }}
          src={card.image}
          alt={card.title}
          className="max-w-full h-auto z-10"
        />
      </div>
      <div
        style={{
          background:
            "linear-gradient(to bottom, #3F3F3F 30%, #F54748 300%, #F54748 190%), linear-gradient(to top, rgba(255,255,255,0.90) 0%, rgba(0,0,0,0.1) 200%)",
          backgroundBlendMode: "multiply",
          height: "25rem",
          marginTop: "-7rem",
          marginBottom: "0",
        }}
        className="relative flex flex-col overflow-hidden rounded-xl bg-clip-border text-gray-200 shadow-md"
      >
        <div className="p-6 mt-12"></div>
        <div className="flex items-center justify-center p-6">
          <div className="flex items-center -space-x-4">
            {card.reviewers.map((reviewer, i) => (
              <img
                key={i}
                alt="reviewer"
                src={reviewer}
                className="relative inline-block h-9 w-9 rounded-full border-2 border-black object-cover object-center hover:z-10"
              />
            ))}
          </div>
          <div className="flex">
            <img className="ml-3" src={Star} width="22" alt="rate" />
            <p className="text-md font-bold ml-1">({card.rating})</p>
          </div>
        </div>
        <h4 className="block text-red-500 text-center font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {card.title}
        </h4>
        <p className="block text-center max-w-[17rem] w-[17rem] mt-3 font-sans text-md antialiased font-normal leading-relaxed text-gray-300">
          {card.description}
        </p>

        <div className="flex justify-center mt-6 mb-4 z-40">
          <button className="bg-red-600 text-md hover:bg-red-700 text-white border-0 py-3 px-6 rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>



</>
  )
}

export default Ramen