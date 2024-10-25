import { useState } from 'react';
import Ramen from "./Ramen/Ramen"
import Breakfast from "./BreakFast/Breakfast"


  // State to store the active menu
  const Buttons = () => {
    const [activeMenu, setActiveMenu] = useState('Ramen');

    // Function to handle button click and show the corresponding menu
    const showMenu = (menu) => {
      setActiveMenu(menu); // Change the active menu
    };
  return (
    <>
    <div className="hidden lg:block">
    <div className="text-gray-300">
      <h1
        className="text-center mx-auto"
        style={{ fontSize: "50px", fontWeight: "700", width: "20ch" }}
      >
        <span className="text-[#cb3939]">Menu</span> That{" "}
        <span className="text-[#e1bf57]">Always </span>
        Make You Fill In <span className="text-[#cb3939]">Love</span>
      </h1>
    </div>
  </div>
  <div className="block lg:hidden">
    <div className="text-gray-300">
      <h1
        className="text-center mx-auto"
        style={{ fontSize: "50px", fontWeight: "700", width: "12ch" }}
      >
        <span className="text-[#cb3939]">Menu</span> That{" "}
        <span className="text-[#e1bf57]">Always </span>
        Make <br />
        You Fill In <span className="text-[#cb3939]">Love</span>
      </h1>
    </div>
  </div>


  {/* <div className="flex mx-5 lg:justify-center gap-4 mt-5 overflow-x-scroll lg:overflow-visible flex-nowrap">
  <a className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full" href="#!">
    Ramen
  </a>
  <a className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full" href="#!">
    Breakfast
  </a>
  <a className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full" href="#!">
    Lunch
  </a>
  <a className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full" href="#!">
    Dinner
  </a>
  <a className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full" href="#!">
    Maxican
  </a>
  <a className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full" href="#!">
    Italian
  </a>
  <a className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full" href="#!">
    Desserts
  </a>
  <a className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full" href="#!">
    Drinks
  </a>
</div> */}


    {/* <div>
      <div className="flex mx-5 lg:justify-center gap-4 mt-5 overflow-x-scroll lg:overflow-visible flex-nowrap">
        <a
          className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full"
          href="#!"
          onClick={() => showMenu('Ramen')}
        >
          Ramen
        </a>
        <a
          className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full"
          href="#!"
          onClick={() => showMenu('Breakfast')}
        >
          Breakfast
        </a>
        <a
          className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full"
          href="#!"
          onClick={() => showMenu('Lunch')}
        >
          Lunch
        </a>
        <a
          className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full"
          href="#!"
          onClick={() => showMenu('Dinner')}
        >
          Dinner
        </a>
        <a
          className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full"
          href="#!"
          onClick={() => showMenu('Mexican')}
        >
          Mexican
        </a>
        <a
          className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full"
          href="#!"
          onClick={() => showMenu('Italian')}
        >
          Italian
        </a>
        <a
          className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full"
          href="#!"
          onClick={() => showMenu('Desserts')}
        >
          Desserts
        </a>
        <a
          className="border-gray-500 border-2 focus:bg-red-600 focus:text-white focus:border-red-600 bg-transparent text-gray-500 py-1 px-4 rounded-full"
          href="#!"
          onClick={() => showMenu('Drinks')}
        >
          Drinks
        </a>
      </div>

      <div className="mt-5">
        {activeMenu === 'Ramen' && <Ramen />}
        {activeMenu === 'Breakfast' && <Breakfast />}
        {activeMenu === 'Lunch' && <Ramen />}
        {activeMenu === 'Dinner' && <Breakfast />}
        {activeMenu === 'Mexican' && <Ramen />}
        {activeMenu === 'Italian' && <Breakfast />}
        {activeMenu === 'Desserts' && <Ramen />}
        {activeMenu === 'Drinks' && <Breakfast />}
      </div>
    </div> */}


  

    <div>
      <div className="flex mx-5 lg:justify-center gap-4 mt-5 overflow-x-scroll lg:overflow-visible flex-nowrap">
        {/* Each button triggers showMenu with a different menu */}
        <a
          className={`border-gray-500 border-2 py-1 px-4 rounded-full ${
            activeMenu === 'Ramen'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          href="#!"
          onClick={() => showMenu('Ramen')}
        >
          Ramen
        </a>
        <a
          className={`border-gray-500 border-2 py-1 px-4 rounded-full ${
            activeMenu === 'Breakfast'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          href="#!"
          onClick={() => showMenu('Breakfast')}
        >
          Breakfast
        </a>
        <a
          className={`border-gray-500 border-2 py-1 px-4 rounded-full ${
            activeMenu === 'Lunch'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          href="#!"
          onClick={() => showMenu('Lunch')}
        >
          Lunch
        </a>
        <a
          className={`border-gray-500 border-2 py-1 px-4 rounded-full ${
            activeMenu === 'Dinner'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          href="#!"
          onClick={() => showMenu('Dinner')}
        >
          Dinner
        </a>
        <a
          className={`border-gray-500 border-2 py-1 px-4 rounded-full ${
            activeMenu === 'Mexican'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          href="#!"
          onClick={() => showMenu('Mexican')}
        >
          Mexican
        </a>
        <a
          className={`border-gray-500 border-2 py-1 px-4 rounded-full ${
            activeMenu === 'Italian'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          href="#!"
          onClick={() => showMenu('Italian')}
        >
          Italian
        </a>
        <a
          className={`border-gray-500 border-2 py-1 px-4 rounded-full ${
            activeMenu === 'Desserts'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          href="#!"
          onClick={() => showMenu('Desserts')}
        >
          Desserts
        </a>
        <a
          className={`border-gray-500 border-2 py-1 px-4 rounded-full ${
            activeMenu === 'Drinks'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-transparent text-gray-500 border-gray-500'
          }`}
          href="#!"
          onClick={() => showMenu('Drinks')}
        >
          Drinks
        </a>
      </div>

      {/* Conditionally render menus based on activeMenu */}
      <div className="mt-5">
        {activeMenu === 'Ramen' && <Ramen />}
        {activeMenu === 'Breakfast' && <Breakfast />}
        {activeMenu === 'Lunch' && <Ramen />}
        {activeMenu === 'Dinner' && <Breakfast />}
        {activeMenu === 'Mexican' && <Ramen />}
        {activeMenu === 'Italian' && <Breakfast />}
        {activeMenu === 'Desserts' && <Ramen />}
        {activeMenu === 'Drinks' && <Breakfast />}
      </div>
    </div>




    </>
  )
}

export default Buttons



