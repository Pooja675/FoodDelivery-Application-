import React, { useEffect } from "react"
import { Route, Routes } from "react-router"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import CreateContainer from "./components/CreateContainer"
import { AnimatePresence } from "framer-motion"
import { useStateValue } from "./context/StateProvider"
import { getAllFoodItems } from "./utils/firebaseFunctions"
import { actionType } from "./context/reducer"


function App() {

  const[{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {

      dispatch({

        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <AnimatePresence mode="wait">
      <div className='w-screen h-auto flex flex-col bg-primary' >
        <Header/>

        <main className="mt-16 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer/>}/>
            <Route path="/createItem"  element={<CreateContainer/>}/>
          </Routes>

        </main>
      </div>
        
    </AnimatePresence>
  )
}

export default App
