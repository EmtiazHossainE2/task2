import React from "react";
import { AiTwotoneAppstore ,AiFillApple} from "react-icons/ai";
import { Fade } from "react-reveal";

const Feature = () => {
  return (
    <div id='features'>
      <div className="sm:h-[100vh] h-auto mx-10 flex flex-col sm:flex-row justify-center items-center">
        <Fade right>
          <div className=" bg-white sm:py-10 sm:px-8 sm:mr-8 py-4 px-5 mt-8 sm:mb-8 rounded">
            <AiTwotoneAppstore className=" text-6xl text-stone-700 mt-6"></AiTwotoneAppstore>
            <h4 className="primary-color font-bold sm:my-8 my-4 sm:text-3xl text:2xl">
              LOOKING FOR A App?
            </h4>
            <p className="text-stone-700  sm:text-xl text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro ratione ducimus harum! Dolores, blanditiis.
            </p>
            <button className=" bg-blue-500 px-6 py-2 rounded hover:bg-yellow-400  duration-500 font-semibold text-white my-6">
              BUY Now
            </button>
          </div>
        </Fade>
        <Fade left>
          <div className=" bg-yellow-400 sm:py-10 sm:px-8 py-4 px-5 mt-8 sm:mb-8 mb-8 rounded">
            <AiFillApple className=" text-6xl text-stone-700 mt-6"></AiFillApple>
            <h4 className="primary-color font-bold sm:my-8 my-4 sm:text-3xl text:2xl">
              WANT TO SELL A APP?
            </h4>
            <p className="text-white sm:text-xl text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro ratione ducimus harum! Dolores, blanditiis.
            </p>
            <button className=" bg-blue-500 px-6 py-2 rounded hover:bg-white hover:text-black duration-500 my-6 font-semibold text-white">
              SELL YOUR APP
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Feature;
