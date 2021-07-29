import React from "react";
import FormVidaIndividualPlus from "../Forms/VidaIndividualPlus";

function Step3(props) {
  return (
    <>
      <div className="w-11/12 lg:w-full mx-auto">
        <div className="bg-gray-200 h-1 flex items-center justify-between">
          <div className="w-1/3 bg-indigo-700 h-1 flex items-center">
            <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-check"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>

          <div className="w-1/3 bg-indigo-700 h-1 flex items-center justify-start">
            <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-check"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
         
          <div className="w-1/3 bg-indigo-700 h-1 flex items-center justify-start">
            <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-check"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-evenly w-full pt-20">
     
         
     

      <div className="pt-20">
      <FormVidaIndividualPlus />
      <button onClick={props.previousStep}>Previous Step</button>
      <button onClick={props.nextStep}>Next Step</button>
      </div>

      </div>
    </>
  );
}

export default Step3;
