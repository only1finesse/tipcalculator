import React from "react";
import { useState, useEffect, useCallback } from "react"
import BillContainer from "./components/BillContainer";
import OutputContainer from "./components/OutputContainer";


const App = () => {
  let [query, setQuery] = useState("");
  return (
    // <body className="font-spaceMono text-base">
    //   <div className="min-h-screen bg-cyan-100 flex flex-col justify-start sm:py-6 items-center">
    //     <div className="md:max-w-xl md:mx-auto w-full grid grid-cols-1">
    //       <div className="icon mx-05 items-center md:m-10 bg-red-200 w" >
    //         <img className="px-10"  src="images/logo.svg" alt="" />
    //         </div>
    //   {/* <div className="flex bg-white shadow-lg sm:rounded-3xl my-12 ">
    //     <div className="controls flex flex-col h-36 w-full">
    //       <div className="bill">
    //         <h3>Bill</h3>
    //       </div>
    //     </div>
    //     <div className="display"></div>
    //   </div> */}
    //   </div>
    // </div>
    // </body>
    <body className="font-spaceMono text-base text-cyan-800">
      <div className="min-h-screen bg-cyan-100 flex flex-col items-center justify-start">
        <div className="logo my-11 md:my-20 md:pt-1">
          <img src="images/logo.svg" alt="splitter logo" />
        </div>
        <div className="card bg-white px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-start  gap-4 w-full md:w-4/5 rounded-2xl h-screen md:h-auto md:items-stretch">
          <BillContainer 
          query = {query}
            onInputChange={myQuery => setQuery(myQuery)} />
          <OutputContainer />
        </div>
      </div>
    </body>
  )
}

export default App;