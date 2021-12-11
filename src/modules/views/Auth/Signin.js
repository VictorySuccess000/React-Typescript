import React from "react";
import { ReactComponent as Logo } from "../../../images/icons/5MINBOT.svg";

const SignIn = () => {
  return (
    <>
      <div>
        <Logo className="mx-8 w-48 h-32" />
        <div className="mx-8 ">
          <p className="text-xl mb-16 text-center md:text-left ">PLEASE PROVIDE ADMIN DETAILS BELOW</p>
          <form>
            <div className="flex flex-col mb-4">
              <label className="text-mountainmist-500 text-lg">Email *</label>
              <input
                className="h-14 mt-4  outline-none w-full lg:w-3/4 p-4"
                placeholder="jane@doe.com"
              ></input>
            </div>
            <div className="flex flex-col ">
              <label className="text-mountainmist-500 text-lg">
                Password *
              </label>
              <input
                className="h-14 outline-none  mt-4 rounded-xl w-full lg:w-3/4 p-4"
                placeholder="*****************"
              ></input>
            </div>
            <div className="flex flex-col mt-8">
              <a
                className="h-14 mt-4 rounded-xl text-center w-full lg:w-3/4 text-2xl py-2 text-white"
                style={{ backgroundColor: "#CC2B7C" }}
                href="/clients"
              >
                {" "}
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
