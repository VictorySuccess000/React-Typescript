import React from "react";
import BotHero from "../botHero";
import { useHistory } from "react-router-dom";

const BotDesign = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/bot-template/dynamic-reply");
  }

  return (
    <>
      <div className=" bg-alabaster-500 	"  >
        <div className="h-8"></div>
        <BotHero/>
        <div className="mx-32 mt-12 bg-mountainmist-900 rounded-xl ">
          <div className="bg-mountainmist-800 w-full rounded-lg h-16 pt-4 pl-8">
            <p className="text-xl font-normal">
              Please fill in the fields below
            </p>
          </div>
          <div className="flex flex-col mx-8 mt-8 ">
            <input
              className="h-12  mt-4  outline-none  w-full lg:w-3/4 p-4"
              placeholder="Template Title *"
            ></input>
          </div>
          <div className="flex flex-col mx-8  ">
            <input
              className="h-12  mt-4 outline-none w-full lg:w-3/4 p-4"
              placeholder="Template Category *"
            ></input>
          </div>{" "}
          <div className="flex flex-col mx-8  ">
            <input
              className="h-12  outline-none  mt-4 w-full lg:w-3/4 p-4"
              placeholder="Template Channel *"
            ></input>
          </div>
          <div className="flex flex-col  mx-8  mt-4">
            <a
              className="h-14 mt-5 rounded-xl cursor-pointer text-center mb-8  lg:w-1/4 text-lg py-3 text-white"
              style={{ backgroundColor: "#CC2B7C" }}
              onClick={handleClick}
            >
              {" "}
              Build Template
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotDesign;
