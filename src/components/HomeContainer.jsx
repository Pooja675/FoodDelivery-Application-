import React from "react";
import delivery from "../images/food-delivery.png";
import BgImage from "../images/FoodImage.jpg";


const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen"
      id="home"
    >
      <div className=" px-4 py-1 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor">
          Eat well, live well,delivered to{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            your door.
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Explore a vast selection of cuisines and dishes from local restaurants
          and eateries, all available on a single platform. From comfort
          classics to exotic flavors, FoodDash offers something for every palate
          and craving.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400  to-orange-500 w-full md:w-auto px-4 py-2 rounded"
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={BgImage}
          className="  ml-auto h-420 w-full lg:w-auto lg:h-650 rounded-lg"
          alt="BgImage"
        />

        {/* <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4">
          <div
            className="w-190 p-2 bg-red-500 bg-cardOverlay backdrop-blur-md rounded-md flex items-center 
          justify-center"
          >
            <img src={Kulcha} className="w-50 -mt-20" alt="Biryani" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HomeContainer;
