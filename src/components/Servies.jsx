import RightImg from "./images/Group 8482.svg";
import RightImgSmall from "./images/Small hero img.svg";
import rosemary from "./images/rosemary.png";
import Online from "./images/image 15.svg";
import deleivery from "./images/image 17.svg";
import Other from "./images/image 18.svg";

const links = [
  { href: "#!", text: "Online Orders", imgSrc: Online },
  { href: "#!", text: "24/7 Service", imgSrc: deleivery },
  { href: "#!", text: "Pre-Reservation", imgSrc: Other },
  { href: "#!", text: "Organized Foodhut", imgSrc: Other },
  { href: "#!", text: "Super Chef", imgSrc: Other },
  { href: "#!", text: "Clean Kitchen", imgSrc: Other },
];

const Servies = () => {
  return (
    <>
    <img className="hidden lg:block" style={{ marginLeft: "91%" }} src={rosemary} alt="" />

<section className="relative">
  {/* Large Screen Image */}
  <img
    className="object-cover object-center w-full max-w-[760px] hidden lg:block" // This image will only show on large screens
    src={RightImg} // Replace with your large screen image source
    alt=""
  />

  {/* Overlay Text Section for Large Screen */}
  <div
    style={{ marginLeft: "34rem", marginTop: "6rem" }}
    className="absolute top-0 left-0 p-8 text-white lg:ml-34 lg:mt-6 text-center lg:text-left hidden lg:block">
    <h1 className="text-3xl lg:text-4xl font-bold mb-2">
      We are <span className="text-[#cb3939]">more</span> than <br />
      <span className="text-[#e1bf57]">multiple</span> services
    </h1>
    <p className="text-sm lg:text-base text-[#9ba3af] max-w-[70ch] mx-auto lg:mx-0">
      This is a type of restaurant which typically serves food and drink,
      in addition to light refreshments such as baked goods or snacks. The
      term comes from the French word meaning food.
    </p>
    <div className="grid grid-cols-2 gap-x-4 mt-5 max-w-96 mx-auto lg:mx-0">
      {links.map((link, index) => (
        <div key={index} className="flex items-center mb-4">
          <a href={link.href}>
            <div className="bg-transparent rounded-full inline-block mr-2">
              <img src={link.imgSrc} alt={link.text} className="w-7 h-7" />
            </div>
          </a>
          <p className="text-sm">{link.text}</p>
        </div>
      ))}
    </div>
    <a
      style={{ backgroundColor: "#F65F5F", color: "#FFFF" }}
      className="py-2 px-3 rounded-full"
      href="#!"
    >
      About Us
    </a>
  </div>
</section>

{/* Mobile Version */}
<div className="block lg:hidden">
  {/* Mobile Image */}
  <img
    className="object-cover object-center w-70 mt-12 block mx-auto" // Center the mobile image
    src={RightImgSmall} // Replace with your mobile image source
    alt=""
  />

  {/* Mobile Text Section */}
  <div className="p-8 text-white text-left">
    <h1 className="text-5xl font-bold mb-2">
      We are <span className="text-[#cb3939]">more</span><br /> than 
      <span className="text-[#e1bf57]"> multiple</span> <br />services
    </h1>
    <p className="text-sm text-[#9ba3af] max-w-[70ch] mx-auto">
      This is a type of restaurant which typically serves food and drink,
      in addition to light refreshments such as baked goods or snacks. The
      term comes from the French word meaning food.
    </p>
    <div className="grid grid-cols-1 gap-x-4 mt-5 max-w-96">
      {links.map((link, index) => (
        <div key={index} className="flex items-center mb-4">
          <a href={link.href}>
            <div className="bg-transparent rounded-full inline-block mr-2">
              <img src={link.imgSrc} alt={link.text} className="w-7 h-7" />
            </div>
          </a>
          <p className="text-sm">{link.text}</p>
        </div>
      ))}
    </div>
    <a
      style={{ backgroundColor: "#F65F5F", color: "#FFF" }}
      className="py-2 px-3 rounded-full"
      href="#!"
    >
      About Us
    </a>
  </div>
</div>





    </>
  );
};

export default Servies;





