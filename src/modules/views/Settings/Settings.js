import React from "react";
import { ReactComponent as AdminUser } from "../../../images/icons/5mins_user.svg";

const Settings = () => {
  return (
    <>
      <div className=" bg-alabaster-500 h-full pt-16">
        <div className="mx-20 bg-white pb-16 mb-16">
          <div className="bg-mountainmist-800 w-full rounded-t-lg h-16 pt-5 pl-8">
            <p className="text-base text-cerise-500 font-semibold">
              My profile
            </p>
          </div>
          <div className="w-full mt-4">
            <AdminUser className="h-32 w-32 mx-auto rounded-full " />
          </div>

          <div className="flex mx-16 mt-12 mb-32 ">
            <div className="w-full mr-8">
              <label>Old Password *</label>
              <input
                className="h-12   mt-4 outline-none w-full lg:w-4/4 p-4"
                placeholder="****************"
                type="password"
              ></input>
            </div>
            <div className="w-full">
              <label>New Password *</label>
              <input
                className="h-12  mt-4 outline-none w-full lg:w-4/4 p-4"
                type="password"
                placeholder="****************"
              ></input>
            </div>
          </div>
          <div className="text-center">
          <button className="bg-cerise-500 p-4 rounded text-white">
            Change Password
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
