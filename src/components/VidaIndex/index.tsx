import React, { useState } from "react";
function IndexPage() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="relative w-full h-full">
        <div className="hidden md:block">
          <img
            className="absolute bg-cover bg-center w-full h-full inset-0"
            src="https://cdn.tuk.dev/assets/templates/prodify/background.png"
            alt="n/a"
          />
        </div>
        <div className="relative px-4 xl:px-0  container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-16 lg:pt-36 gap-8">
          <div className="text-color">
            <h1 className="text-7xl w-1/2 xl:w-full xl:text-8xl font-black f-f-l">
              Seguro de. vida. Individual.
            </h1>
            <div className="f-f-r text-xl lg:text-3xl pb-20 sm:pb-0 pt-10 xl:pt-20">
              <h2>Lorem ipsum dolor. </h2>
              <h2>Lorem ipsum dolor.</h2>
              <h2> Lorem ipsum dolor.</h2>
            </div>
            <button className="hover:opacity-90 text-xl w-full xl:text-3xl xl:w-10/12 mt-4 xl:mt-11 f-f-r py-6 bg-red-700 text-white text-bold">
              Contratar agora
            </button>
          </div>
          <div className="">
            <img
              className="w-full lg:-ml-16 xl:-ml-44"
              src="https://andrebona.com.br/wp-content/uploads/2021/06/Seguro-de-vida-como-funciona-e-quando-vale-a-pena-1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
    </>
  );
}

export default IndexPage;
