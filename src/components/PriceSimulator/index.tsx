import React, { useState } from "react";
function PriceSimulator() {
  return (
    <>
      <div className="mx-auto container px-4 xl:px-0 pt-16 lg:pt-36">
        <div className="flex flex-col w-full items-center justify-center f-f-l">
          <div className="bg-white  xl:w-11/12 px-6 py-8 xl:px-16 lg:py-16 shadow-lg">
            <div className="lg:flex justify-between">
              <div className="pt-8 lg:pt-0 flex items-center flex-col">
                <h1 className="f-f-l font-black text-color text-4xl lg:text-7xl">
                  R$29
                </h1>
                <button className="py-4 px-4 xl:px-10 bg-gray-100 focus:outline-none f-f-r text-xl font-bold text-color mt-7">
                  Contratar agora
                </button>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xl f-f-r pt-10 text-center">
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceSimulator;
