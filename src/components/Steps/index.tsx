import React from "react";
function Steps() {
  return (
    <>
      <div className="w-11/12 lg:w-auto mx-auto">
        <div className="bg-gray-200 h-1 flex items-center justify-between">
          <div className="w-1/3 bg-white-700 h-1 flex items-center">
          <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
              <div className="h-3 w-3 bg-blue-700 rounded-full" />
            </div>
            <div className="flex items-center justify-center -mr-3 relative">
            
              <div className="relative  bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                <p className="text-blue-700 text-xs font-bold">
                  Passo 1: Simulação
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="w-1/3 flex justify-between bg-white-700 h-1 items-center relative">
           
          <div className="w-1/3 flex justify-end">
            <div className="bg-white h-6 w-6 rounded-full shadow" />
          </div>

          <div className="w-1/3 flex justify-end">
            <div className="bg-white h-6 w-6 rounded-full shadow" />
          </div>
          </div>



          <div className="w-1/3 flex justify-end">
            <div className="bg-white h-6 w-6 rounded-full shadow" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Steps;
