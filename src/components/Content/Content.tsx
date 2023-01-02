import React from "react";

const Content = () => {
  return (
    <section>
      <div className="content-container">
        <div className="">
          <div className="grid grid-rows-1  ">
            <div className="grid grid-cols-4">
              <div className="col-span-1  mx-2.5   ">
                <div className="bg-sky-500 rounded relative ">
                  <div className="p-2.5 ">
                    <h3 className="text-3xl mb-6 text-white font-bold">150</h3>
                    <p className="text-base mb-3 text-white">New York</p>
                  </div>

                  <div className="absolute top-6 right-10">
                    <i className="fa-solid fa-cart-plus text-6xl text-gray-500 opacity-60  hover:scale-125 durations-200 transition"></i>
                  </div>

                  <div className=" bg-gray-light hover:opacity-40 ">
                    <a
                      href=""
                      className=" text-white  flex relative text-center  p-2 justify-center "
                    >
                      <span> More Info</span>
                      <i className="fa-solid fa-circle-right text-white mt-[6px] ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-span-1  mx-2.5  ">
                <div className="bg-green-500 rounded relative ">
                  <div className="p-2.5 ">
                    <h3 className="text-3xl mb-6 text-white font-bold">44</h3>
                    <p className="text-base mb-3 text-white">Bounce Rate</p>
                  </div>

                  <div className="absolute top-6 right-10">
                    <i className="fa-solid fa-chart-area text-6xl text-gray-500 opacity-60  hover:scale-125 durations-200 transition"></i>
                  </div>

                  <div className=" bg-gray-light hover:opacity-40 ">
                    <a
                      href=""
                      className=" text-black  flex relative text-center  p-2 justify-center "
                    >
                      <span> More Info</span>
                      <i className="fa-solid fa-circle-right text-black mt-[6px] ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-1  mx-2.5  ">
                <div className="bg-yellow-500 rounded relative ">
                  <div className="p-2.5 ">
                    <h3 className="text-3xl mb-6 text-white font-bold">53</h3>
                    <p className="text-base mb-3 text-white">
                      User Registrations
                    </p>
                  </div>

                  <div className="absolute top-6 right-10">
                    <i className="fa-solid fa-user text-gray-500  text-6xl opacity-60 hover:scale-125 durations-200 transition"></i>
                  </div>

                  <div className=" bg-gray-light hover:opacity-40 ">
                    <a
                      href=""
                      className=" text-black  flex relative text-center  p-2 justify-center "
                    >
                      <span> More Info</span>
                      <i className="fa-solid fa-circle-right text-black mt-[6px] ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-span-1  mx-2.5  ">
                <div className="bg-rose-500 rounded relative ">
                  <div className="p-2.5 ">
                    <h3 className="text-3xl mb-6 text-white font-bold">65</h3>
                    <p className="text-base mb-3 text-white">Unique Visitors</p>
                  </div>

                  <div className="absolute top-6 right-10">
                    <i className="fa-solid fa-chart-pie ext-gray-500  text-6xl opacity-60 hover:scale-125 durations-200 transition"></i>
                  </div>

                  <div className=" bg-gray-light  hover:opacity-40 ">
                    <a
                      href=""
                      className=" text-black  flex relative text-center  p-2 justify-center "
                    >
                      <span> More Info</span>
                      <i className="fa-solid fa-circle-right text-white mt-[6px] ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Content;
