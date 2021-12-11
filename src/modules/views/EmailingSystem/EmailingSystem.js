import React from "react";
import { ReactComponent as Sent } from "../../../images/icons/sent.svg";
import { Link } from "react-router-dom";
import { ReactComponent as DTrash } from "../../../images/icons/dtrash.svg";
import { ReactComponent as DPen } from "../../../images/icons/dpen.svg";
import { ReactComponent as PkgHeader } from "../../../images/icons/tooltip_bg.svg";

import { ReactComponent as Search } from "../../../images/icons/5mins_search.svg";
import { ReactComponent as AdminUser } from "../../../images/icons/5mins_user.svg";
import { ReactComponent as Forward } from "../../../images/icons/forward.svg";

const EmailingSystem = () => {
  const docData = [
    {
      pkg_name: "Create a bot",
      pkg_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve",
    },
    {
      pkg_name: "Delete a bot",
      pkg_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve",
    },
  ]
  return (
    <>
    <div className="flex flex-wrap">
          {docData.map((item, key) => {
            return (
              <div className="mx-8 mt-8">
                <div className="bg-white h-96 shadow-lg w-72 dPkgsCard relative">
                  <PkgHeader className="w-full h-12" />
                  <div className="flex mx-8 mt-4 mb-2">
                    <div>
                      <p className="mr-20 text-mountainmist-500">Name:</p>
                      <p className="text-base font-normal  mt-2">{item.pkg_name}</p>
                    </div>
                  </div>
                  <div className="flex mx-8 mt-4 mb-2">
                    <div>
                      <p className="mr-20 text-mountainmist-500">Text:</p>
                      <p className="text-base font-normal  mt-2">{item.pkg_text}</p>
                    </div>
                  </div>
                  
                  
                  <div className="flex  mx-8 mb-4 absolute bottom-0">
                    <DPen className="mr-4 h-10 w-12"/>
                    <DTrash className=" h-10 w-10"/>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-2 border-dashed h-96 w-72 rounded-xl relative mt-8 mx-8 flex items-center">
            <Link className="mx-auto text-xl font-semibold text-gray-400 "
            to="/emailing-system">
              + Add New Mail 
            </Link>
          </div>
        </div>
      {/* <div className="flex mx-8 pt-8  max-h-full overflow-hidden ">
        <div className="w-1/4 flex flex-col bg-white pb-16 mr-4 rounded-xl">
          <div className="w-full text-center pt-8">
            <button className="bg-cerise-500 w-56 h-12 rounded-xl text-white">
              New Mail
            </button>
          </div>
          <div className=" flex items-center mx-4 mt-8">
            <div
              className="h-12 w-12 rounded-full  "
              style={{ backgroundColor: "#F4F5FA", paddingTop: ".9rem" }}
            >
              <Sent className="mx-auto " />
            </div>
            <p className="ml-4 cursor-pointer text-xl text-cerise-500 font-bold">
              Sent
            </p>
          </div>
          <div className=" flex items-center mx-4 mt-8">
            <div
              className="h-12 w-12 rounded-full  "
              style={{ backgroundColor: "#F4F5FA", paddingTop: ".4rem" }}
            >
              <DPen className="mx-auto " />
            </div>
            <p className="ml-4 cursor-pointer text-xl text-mountainmist-500 ">
              Drafts
            </p>
          </div>
          <div className=" flex items-center mx-4 mt-8">
            <div
              className="h-12 w-12 rounded-full  "
              style={{ backgroundColor: "#F4F5FA", paddingTop: ".4rem" }}
            >
              <DTrash className="mx-auto " />
            </div>
            <p className="ml-4 cursor-pointer text-xl text-mountainmist-500 ">
              Trash
            </p>
          </div>
        </div>
        <div className="w-1/4 bg-alabaster-100 h-screen mr-4 rounded-xl">
          <div>
            <div className="p-2 ml-1">
              <div class="relative mb-3 w-full flex flex-wrap ">
                <span class="absolute z-10 py-3 pl-3 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                  <Search />{" "}
                </span>
                <input
                  className="bg-white px-12 py-4 text-sm border-0 outline-none placeholder-gray-500 bgInput"
                  placeholder="Search mail"
                />
              </div>
            </div>
            <div className="p-4 h-40 bg-white mx-4 rounded-xl">
              <div className="flex">
                <div className="w-2/6">
                  <AdminUser className="rounded-full w-12 h-12" />
                </div>
                <div className="w-4/6">
                  <p className="text-base font-semibold mb-1">Thomas Rolland</p>
                  <p className="text-mountainmist-500">Goto Bot </p>
                </div>
              </div>
              <div className="mx-1 mt-4">
                <p className="text-base font-semibold mb-2">
                  Bot successfully created
                </p>
                <p className="text-mountainmist-500">3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 bg-white max-h-screen rounded-xl relative">
          <div className="flex mx-8 mt-4">
            <p className="mr-4 text-mountainmist-500">September 18, 22:19pm </p>
            <Forward />
          </div>
          <div className="flex mx-8 mt-4">
            <p className="text-base font-semibold mb-1">Thomas Rolland</p>
          </div>

          <div className="flex mx-8 mt-8">
            <div className="mr-4">
              <AdminUser className="rounded-full w-12 h-12" />
            </div>
            <div className="">
              <p className="text-base font-semibold mb-1">Thomas Rolland</p>
              <p className="text-mountainmist-500">Goto Bot </p>
            </div>
          </div>

          <div className="mx-8 mt-8 ">
          <p className="text-mountainmist-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          </div>
          <div className="flex w-full  mb-4 absolute bottom-0">
      
            <div className="h-14 w-1/12 rounded mx-1 pt-5 pl-3 bg-alabaster-100">
              <Forward />
            </div>

            <div className=" w-11/12 rounded flex mx-1 bg-alabaster-100">

              <input
                className="bg-white w-full bg-gray-200 px-12 py-4 text-sm border-0 outline-none placeholder-gray-500 bgInput"
                placeholder="Response to this mail"
              />
              <span class="absolute z-10 py-3 pl-3 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                <Sent />{" "}
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default EmailingSystem;
