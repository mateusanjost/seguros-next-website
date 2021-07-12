import React from "react";
const FormVidaIndividual = () => {
  return (
    <div
      className="bg-gray-200 dark:bg-gray-900 flex md:flex-col items-center justify-center"
      style={{ fontFamily: '"Lato", sans-serif' }}
    >
      <div className="flex md:flex-row flex-col items-center py-8 px-4">
        <div className="flex flex-col md:mr-16">
          <label
            htmlFor="age"
            className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Idade
          </label>
          <div className="relative">
            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
            <input
              id="age"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow"
              placeholder="18-70"
              type="number"
              min="18"
              max="70"
            />
          </div>
        </div>

        {/* gender */}

        <div className="flex flex-col md:mr-16 md:py-0 py-4">
          <label
            htmlFor="gender"
            className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Sexo
          </label>
          <div className="relative">
            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r dark:border-gray-700 h-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-man"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="5" r="2" />
                <path d="M10 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
              </svg>
            </div>
            <select
              id="gender"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
              placeholder="Placeholder"
            >
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
          </div>
        </div>

        {/* fumante */}
        <div className="flex flex-col md:py-0 py-4">
          <label
            htmlFor="email3"
            className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Fumante
          </label>
          <div className="relative">
            <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-indigo-700 dark:bg-white rounded-l cursor-pointer">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 1280.000000 1067.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1067.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M1725 9828 c-2 -13 -6 -174 -9 -358 -4 -356 -10 -412 -61 -593 -14
-48 -50 -143 -80 -211 -30 -68 -55 -129 -55 -135 0 -22 36 -10 85 27 102 77
193 221 232 367 28 108 25 434 -6 610 -24 138 -76 315 -91 315 -5 0 -12 -10
-15 -22z"
                  />
                  <path
                    d="M2128 8983 c-3 -21 -3 -119 0 -218 10 -398 -34 -663 -154 -931 -31
-69 -54 -127 -51 -131 21 -21 104 37 177 124 121 145 162 286 161 553 0 199
-38 452 -88 584 -23 62 -39 69 -45 19z"
                  />
                  <path
                    d="M874 6070 c-169 -5 -171 -5 -214 -35 -23 -16 -48 -38 -54 -47 -25
-40 -54 0 -43 58 l5 26 -21 -21 c-17 -17 -21 -31 -19 -74 2 -61 0 -63 -95 -87
-47 -12 -57 -12 -88 3 -51 24 -63 22 -87 -19 -11 -19 -37 -43 -57 -52 -33 -16
-36 -21 -39 -67 -3 -44 -9 -56 -52 -101 -46 -49 -77 -118 -67 -147 2 -7 -4
-23 -14 -36 -13 -16 -16 -28 -9 -40 11 -20 223 -229 270 -266 35 -27 140 -180
140 -203 0 -18 12 -38 74 -119 30 -40 96 -96 104 -89 2 3 -10 25 -27 50 l-32
45 25 7 c33 8 160 -35 305 -103 63 -29 194 -85 290 -124 251 -101 317 -138
390 -219 33 -37 85 -84 115 -104 30 -20 58 -45 61 -56 9 -30 43 -47 105 -55
68 -9 72 -11 58 -35 -15 -23 8 -52 64 -81 32 -16 935 -386 1678 -686 129 -52
379 -154 555 -225 1323 -537 3715 -1495 4878 -1954 1654 -653 2749 -1062 2947
-1103 169 -34 228 -44 255 -42 136 8 332 260 430 555 54 161 68 237 68 376 1
104 -3 136 -22 188 -27 79 -58 129 -106 171 -46 40 -38 37 -505 230 -336 139
-2519 1071 -2905 1241 -127 56 -858 361 -1117 465 -58 24 -193 79 -300 124
-255 105 -1135 468 -1313 541 -77 31 -792 326 -1590 655 -2116 872 -1909 790
-2012 799 -23 2 -45 6 -50 9 -5 3 -65 -3 -134 -13 -177 -25 -206 -18 -479 116
-85 42 -231 109 -324 150 -93 41 -178 82 -188 91 -10 9 -18 29 -18 44 0 39
-38 64 -85 56 -28 -5 -41 -1 -64 19 -39 32 -169 60 -212 45 -39 -13 -59 -3
-163 83 -63 54 -84 66 -110 64 -17 -1 -108 -5 -202 -8z"
                  />
                </g>
              </svg>
            </div>
            <input
              id="gender"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
              placeholder="Placeholder"
              type="checkbox"
            />
          </div>
        </div>
        {/* Code block ends */}
      </div>

      <div className="flex md:flex-row flex-col items-center py-8 px-4">
        {/* Code block starts */}
        <div className="flex flex-col md:mr-16">
          <label
            htmlFor="age"
            className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Renda mensal
          </label>
          <div className="relative">
            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
            <input
              id="age"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow"
              placeholder="Qual sua renda mensal?"
              type="number"
            />
          </div>
        </div>

        <div className="flex flex-col md:mr-16 md:py-0 py-4">
          <label
            htmlFor="gender"
            className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Cobertura básica
          </label>
          <div className="relative">
            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
            <input
              id="age"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow"
              placeholder="0-150000"
              type="number"
              min="0"
              max="150000"
            />
          </div>
        </div>
        {/* Code block ends */}

        {/* fumante */}
        <div className="flex flex-col md:py-0 py-4">
          <label
            htmlFor="email3"
            className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Cobertura em dobro?
          </label>
          <div className="relative">
            <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-indigo-700 dark:bg-white rounded-l cursor-pointer">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 1280.000000 1067.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1067.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M1725 9828 c-2 -13 -6 -174 -9 -358 -4 -356 -10 -412 -61 -593 -14
-48 -50 -143 -80 -211 -30 -68 -55 -129 -55 -135 0 -22 36 -10 85 27 102 77
193 221 232 367 28 108 25 434 -6 610 -24 138 -76 315 -91 315 -5 0 -12 -10
-15 -22z"
                  />
                  <path
                    d="M2128 8983 c-3 -21 -3 -119 0 -218 10 -398 -34 -663 -154 -931 -31
-69 -54 -127 -51 -131 21 -21 104 37 177 124 121 145 162 286 161 553 0 199
-38 452 -88 584 -23 62 -39 69 -45 19z"
                  />
                  <path
                    d="M874 6070 c-169 -5 -171 -5 -214 -35 -23 -16 -48 -38 -54 -47 -25
-40 -54 0 -43 58 l5 26 -21 -21 c-17 -17 -21 -31 -19 -74 2 -61 0 -63 -95 -87
-47 -12 -57 -12 -88 3 -51 24 -63 22 -87 -19 -11 -19 -37 -43 -57 -52 -33 -16
-36 -21 -39 -67 -3 -44 -9 -56 -52 -101 -46 -49 -77 -118 -67 -147 2 -7 -4
-23 -14 -36 -13 -16 -16 -28 -9 -40 11 -20 223 -229 270 -266 35 -27 140 -180
140 -203 0 -18 12 -38 74 -119 30 -40 96 -96 104 -89 2 3 -10 25 -27 50 l-32
45 25 7 c33 8 160 -35 305 -103 63 -29 194 -85 290 -124 251 -101 317 -138
390 -219 33 -37 85 -84 115 -104 30 -20 58 -45 61 -56 9 -30 43 -47 105 -55
68 -9 72 -11 58 -35 -15 -23 8 -52 64 -81 32 -16 935 -386 1678 -686 129 -52
379 -154 555 -225 1323 -537 3715 -1495 4878 -1954 1654 -653 2749 -1062 2947
-1103 169 -34 228 -44 255 -42 136 8 332 260 430 555 54 161 68 237 68 376 1
104 -3 136 -22 188 -27 79 -58 129 -106 171 -46 40 -38 37 -505 230 -336 139
-2519 1071 -2905 1241 -127 56 -858 361 -1117 465 -58 24 -193 79 -300 124
-255 105 -1135 468 -1313 541 -77 31 -792 326 -1590 655 -2116 872 -1909 790
-2012 799 -23 2 -45 6 -50 9 -5 3 -65 -3 -134 -13 -177 -25 -206 -18 -479 116
-85 42 -231 109 -324 150 -93 41 -178 82 -188 91 -10 9 -18 29 -18 44 0 39
-38 64 -85 56 -28 -5 -41 -1 -64 19 -39 32 -169 60 -212 45 -39 -13 -59 -3
-163 83 -63 54 -84 66 -110 64 -17 -1 -108 -5 -202 -8z"
                  />
                </g>
              </svg>
            </div>
            <input
              id="gender"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
              type="checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormVidaIndividual;
