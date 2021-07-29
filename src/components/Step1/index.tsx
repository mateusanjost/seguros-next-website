import React from "react";
import FormVidaIndividual from "../Forms/VidaIndividual/index";

function Step1(this: any, props: any) {
  return (
    <>
      {/* <div>
        <h2>Step {props.currentStep}</h2>
        <p>Total Steps: {props.totalSteps}</p>
        <p>Is Active: {props.isActive}</p>
        <p>
          <button onClick={props.previousStep}>Previous Step</button>
        </p>
        <p>
          <button onClick={props.nextStep}>Next Step</button>
        </p>
        <p>
          <button onClick={() => props.goToStep(2)}>Step 2</button>
        </p>
        <p>
          <button onClick={props.firstStep}>First Step</button>
        </p>
        <p>
          <button onClick={props.lastStep}>Last Step</button>
        </p>
      </div> */}

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
          <div className="w-1/3 flex justify-start">
            <div className="bg-white h-6 w-6 rounded-full shadow" />
          </div>
          <div className="w-1/3 flex justify-start">
            <div className="bg-white h-6 w-6 rounded-full shadow" />
          </div>
        </div>
      </div>

      <div className="flex justify-evenly w-full pt-20">
        <div className="pt-20">
          <FormVidaIndividual />
        </div>

        <div className="p-5  dark:border-gray-700  border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100 lg:w-auto w-full 0 bg-none">
          {" "}
          <div className="mx-auto container px-4 xl:px-0 pt-16 lg:pt-36">
            <div className="flex flex-col w-full items-center justify-center f-f-l">
              <div className="bg-white  xl:w-11/12 px-6 py-8 xl:px-16 lg:py-16 shadow-lg">
                <div className="lg:flex justify-between">
                  <div className="pt-8 lg:pt-0 flex items-center flex-col">
                    <h1 className="f-f-l font-black text-color text-4xl lg:text-7xl">
                      R$29
                    </h1>
                    <button
                      onClick={() => props.goToStep(2)}
                      className="py-4 px-4 xl:px-10 bg-gray-100 focus:outline-none f-f-r text-xl font-bold text-color mt-7"
                    >
                      Contratar agora
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl f-f-r pt-10 text-center"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;
