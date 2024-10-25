// import Pizza from "/public/images/Pizza.png";
import MobileSizePizza from "/public/images/Group 8489.svg";
import "../App.css";
// import PlayBtn from "/public/images/Group 8488.svg";

const Contact = () => {
  return (
    <>
      <div className="pt-12 items-center font-sofia">
        <section className="bg-cover bg-center py-32 w-full">
          <div className="container mx-auto text-left text-white relative">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="w-full md:w-1/2 z-10 md:mb-0 mt-12 md:mt-0">
                {/* <div>
                  <h1
                    className="text-3xl sm:text-5xl lg:text-5xl font-bold"
                    style={{ fontWeight: "900", lineHeight : "1.3" }}
                  >
                   It{"'"}s Now <span className="text-red-600">More Easy</span> to <span className="text-yellow-400">Contact</span> With Us
                  </h1>
                  <p
                    className="mt-12 text-gray-400 text-sm"
                    style={{ width: "55ch", }}
                  >
                    All you need to do is downlode one of the best delivery apps, make a and most companies are opting for mobile app devlopment for food delivery
                  </p> */}

                {/* <div className="flex items-center mt-5">
                  <a href="#!">
                      <div
                        className=""
                      >
                        <img
                          src={PlayBtn}
                          alt="Play Button"
                          className=""
                          />
                      </div>
                          </a>
                  </div> */}
                {/* </div> */}
                <div>
                  <h1
                    className="sm:text-5xl text-start lg:text-start lg:text-9xl font-extrabold"
                    style={{
                      fontWeight: "1200",
                      lineHeight: "1.1",
                      fontSize: "3.5rem",
                    }}
                  >
                    {/* First part of the h1 */}
                    It{"'"}s Now <span className="text-[#cb3939]">More Easy</span>{" "}
                    {/* Second part of the h1 */}
                    to <span className="text-[#e1bf57]">Contact</span> With Us
                  </h1>

                  <p
                    className="mt-3 text-gray-400 text-sm sm:text-base lg:text-lg"
                    style={{ maxWidth: "55ch" }}
                  >
                    {/* First part of the paragraph */}
                    <span className="block">
                      All you need to do is download one of the best delivery
                      apps,
                    </span>
                    and most companies are opting for mobile app development for
                    food delivery.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-0 md:pl-16">
                <img
                  src={MobileSizePizza}
                  className="hidden lg:block w-full rounded-xl"
                  style={{
                    height: "600px",
                    width: "550px",
                    marginTop: "-1rem",
                  }}
                  alt="Layout Image for Large Screens"
                />

                <img
                  src={MobileSizePizza}
                  className="block lg:hidden w-full rounded-xl"
                  style={{
                    height: "650px",
                    width: "700px",
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

export default Contact;
