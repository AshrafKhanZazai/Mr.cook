import heartpic from "./images/Group 8426.png";
import Pizza from "./images/Pizza.png";
import MobilesizePizza from "./images/Mobile size pizza.png";
import "../App.css";
import PlayBtn from "./images/Play Btn.svg";

const Hero = () => {
  return (
    <>
      <div className="pt-12 items-center font-sofia">
        <section className="bg-cover bg-center py-32 w-full">
          <div className="container mx-auto text-left text-white relative">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0 mt-12 md:mt-0">
                <div
                  style={{ maxWidth: "7.5rem", backgroundColor: "#f65f5f33" }}
                  className="flex text-gray-200 items-center ml-3 mb-2 p-1 rounded-full"
                >
                  <img src={heartpic} alt="heart" className="w-4 h-4 mr-2" />
                  <p className="text-xs">People Trust us</p>
                </div>
                <div>
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                    style={{ fontWeight: "900" }}
                  >
                    We{"'"}re <span style={{ color: "#F54748" }}>Serious</span> For
                    <br />
                    <span style={{ color: "#F54748" }}>Food</span> &{" "}
                    <span style={{ color: "#FDC55E" }}>Delivery.</span>
                  </h1>
                  <p
                    className="mt-5 text-gray-400 text-lg"
                    style={{ width: "40ch" }}
                  >
                    Best cooks and best delivery guys all at your service. Hot
                    tasty food will reach you in 60 minutes.
                  </p>

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

                  <div className="flex items-center mt-5">
                    <a
                      href="#"
                      style={{ backgroundColor: "#F65F5F"}}
                      className="sm:text-sm font-semibold leading-6 px-4 py-3 rounded-full text-gray-900"
                    >
                      Download App
                    </a>
                    <a href="#!">
                      <div
                        style={{
                          backgroundColor: "transparent", // Ensure the container has no background
                          boxShadow:
                            "0px 20px 60px 0px rgba(223, 105, 81, 0.8)", // Shadow effect
                            borderRadius: "50%", // If you want a circular shadow
                          display: "inline-block", // Contain the image within a block element
                        }}
                        className="ml-10"
                      >
                        <img
                          src={PlayBtn}
                          alt="Play Button"
                          className="w-14 h-14"
                          />
                      </div>
                          </a>
                    <p className="text-md" style={{ marginLeft: "0.5rem" }}>
                      Watch Video
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-0 md:pl-16">
                <img
                  src={Pizza}
                  className="hidden lg:block w-full rounded-xl"
                  style={{
                    height: "500px",
                    width: "550px",
                    marginTop: "-1rem",
                  }}
                  alt="Layout Image for Large Screens"
                />

                <img
                  src={MobilesizePizza}
                  className="block lg:hidden w-full rounded-xl"
                  style={{
                    height: "350px",
                    width: "500px",
                    marginTop: "-4rem",
                  }}
                  alt="Layout Image for Small Screens"
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
