import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  // console.log(data);

  const rowContainer = useRef();

  const [{cartItems}, dispatch] = useStateValue();

  const [items, setItems] = useState([])

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

 
  const addtoCart = () => {
      // console.log(item)

      dispatch({
        type: actionType.SET_CARTITEMS,
        cartItems: items ,
      });

      localStorage.setItem("cartItems", JSON.stringify(items))
  }

  useEffect(() => {
    addtoCart()
},[items])



  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex gap-3 items-center scroll-smooth ${
        flag
          ? "overflow-x-scroll  scrollbar-none"
          : "overflow-y-hidden flex-wrap justify-center"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item?.id}
            className="w-300 min-w-[225px] md:w-340  md:min-w-[340px] my-12 h-[225px] bg-cardOverlay rounded-lg 
            p-2 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 -mt-8 drop-shadow-2xl "
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain rounded-lg"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-black">{item?.description} </p>
              <div className="flex items-center gap-52">
                {/* <p className="flex items-center ">
                  <span>
                    {" "}
                    <FaRegStarHalfStroke />
                  </span>
                  4.5
                </p> */}
                <p className="text-lg mx-3 text-headingColor font-semibold">
                  <span className="text-sm text-red-500">Rs</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
