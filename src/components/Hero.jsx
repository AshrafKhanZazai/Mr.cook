import heartpic from "./images/Group 8426.png";
import Pizza from "./images/Pizza.png";
import '../App.css';
import PlayBtn from "./images/Play Btn.png";

const Hero = () => {
  return (
    <>
     
<div className="pt-12 items-center font-sofia">
  <section className="bg-cover bg-center py-32 w-full">
    <div className="container mx-auto text-left text-white relative">
      <div className="flex flex-col md:flex-row items-center">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
          <div
            style={{ maxWidth: "7.5rem", backgroundColor: "#f65f5f33" }}
            className="flex text-gray-200 items-center p-1 rounded-full"
          >
            <img src={heartpic} alt="heart" className="w-4 h-4 mr-2" />
            <p className="text-xs">People Trust us</p>
          </div>
          <div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontWeight: "900" }}
            >
              We're <span style={{ color: "#F54748" }}>Serious</span> For
              <br />
              <span style={{ color: "#F54748" }}>Food</span> &{" "}
              <span style={{ color: "#FDC55E" }}>
                {" "}
                Delivery.
                </span>
            </h1>
            <p className="mt-5 text-gray-400 text-lg">
              Best cooks and best delivery guys all at your
              <br />
              service. Hot tasty food will reach you in 60
              <br />
              minutes.
            </p>

            {/* Search Input Form */}
            <form className="max-w-md mt-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-12 pr-12 text-md text-white border border-gray-300 rounded-full bg-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search food"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-3"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Download App and Watch Video Section */}
            <div className=" flex items-center">
              <a
                href="#"
                style={{ backgroundColor: "#F65F5F" }}
                className="sm:text-sm font-semibold leading-6 px-4 py-3 rounded-full text-gray-900"
              >
                Download App
              </a>
              <div className="flex items-center gap-">
                <img src={PlayBtn} alt="Play Button" className="w-15 h-15 mt-6" />
                <p className="text-md">Watch Video</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 pl-0 md:pl-16">
          <img
            src={Pizza}
            className="w-full rounded-xl sm:w-20"
            style={{ height: "500px",width : "550px" , marginTop : "-1rem" }}
            alt="Layout Image"
          />
        </div>




      </div>
    </div>
  </section>
</div>









    </>
  );
};

export default Hero;
