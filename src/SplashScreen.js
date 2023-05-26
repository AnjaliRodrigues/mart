import React from "react";

const SplashScreen = () => {
  return (
    <body class="h-screen bg-gradient-to-r from-black via-blue-600 to-black">
      <div class="container  bg-gradient-to-r from-black via-blue-600 to-black mx-auto">
        <div class="py-8 px-10 space-y-10 content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div class="flex mb-30 ml-10 mr-10 font-mono mt-20 font-bold text-white justify-center text-2xl  bg-black bg-opacity-50  py-20 px-20 justify-center   border-2 border-blue-200 rounded-xl  ">
            ZunderMart Partner
            <div
              class="w-8 h-8 mr-3 mt-40 rounded-full animate-spin
                 align-[-0.125em]   justify-self-center border-x-4 border-solid border-blue-200 border-t-transparent"
            ></div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SplashScreen;
