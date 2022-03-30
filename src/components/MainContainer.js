import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronRight,MdChevronLeft } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import { actionType } from "../context/reducer";

const MainContainer = () => {

  const [{foodItems,cartShow,cartItems},dispatch]=useStateValue()
  const [scrollValue, setScrollValue] = useState(0);

  // const [{cartItems},dispatch]=useStateValue()



  //for row container
//   const addToCart=()=>{

// dispatch({
//   type:actionType.SET_CART_ITEMS,
//   cartItems:[...items]
// })
// // localStorage.setItem("cartItems",JSON.stringify(cartItems))
// localStorage.setItem("cartItems",JSON.stringify(items))

//   }

  useEffect(()=>{


  },[scrollValue,cartShow])



  return (
    <div className=" w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full mt-5">
      <div className="w-full flex items-center justify-between">

        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our fresh & healthy fruits
        </p>

        <div className="hidden md:flex items-center gap-3">
          <motion.div  whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all ease-in-out duration-100 flex items-center justify-center"
          onClick={() => setScrollValue(-200)}
          >
            <MdChevronLeft className="text-white text-lg" />
          </motion.div>
          <motion.div  whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all ease-in-out duration-100 flex items-center justify-center"
            onClick={() => setScrollValue(200)}
          >
            <MdChevronRight className="text-white text-lg"/>
          </motion.div>
        </div>
      </div>

      {/* <RowContainer cartItems={cartItems} setItems={setItems} flag={true}  data={foodItems?.filter((n) => n.category === "fruits")}/> */}

      <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />


      </section>

<MenuContainer/>

{cartShow && (

<CartContainer/>
)}


    </div>
  );
};

export default MainContainer;
