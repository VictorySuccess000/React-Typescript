import React from "react";
import { ReactComponent as Search } from "../../../images/icons/5mins_search.svg";
import { ReactComponent as PkgHeader } from "../../../images/icons/pkgheader.svg";
import {ReactComponent as CheckMark} from "../../../images/icons/check_mark.svg"
import { ReactComponent as DPen } from "../../../images/icons/dpen.svg";
import {ReactComponent as DTrash} from "../../../images/icons/dtrash.svg"

const PkgsSubcripion = () => {
  const docData = [
    {
      pkg_name: "n",
      pkg_price: "",
      pkg_feature: [
        "Basic Features",
        "Conditional logic",
        "A/B Test",
     
      ],
    },
    {
      pkg_name: "n",
      pkg_price: "",
      pkg_feature: [
        "Basic Features",
        "Conditional logic",
        "A/B Test",
        "Conditional logic",
      ],
    },
    {
      pkg_name: "n",
      pkg_price: "",
      pkg_feature: [
        "Basic Features",
        "Conditional logic",
        "A/B Test",
        "Conditional logic",
        "A/B Test",
        "Conditional logic",
      ],
    },
    {
      pkg_name: "n",
      pkg_price: "",
      pkg_feature: [
        "Basic Features",
        "A/B Test",
        "Conditional logic",
        "A/B Test",
        "Conditional logic",
      ],
    },
  ];
  return (
    <>
      <div className=" bg-alabaster-500 pb-16 pt-8">
        <div>
          <div className="flex justify-between mx-8 items-center ">
            <div class="p-2">
              <div class="relative mb-3 w-full flex flex-wrap ">
                <span class="absolute z-10 py-3 pl-3 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                  <Search />{" "}
                </span>
                <input
                  className="bg-white px-12 py-4 text-sm border-0 dPkgsCard outline-none placeholder-gray-500 bgInput"
                  placeholder="Search packages"
                />
              </div>
            </div>
            <button className="bg-cerise-500 shadow h-12 px-4 rounded text-white">
              Create New Password
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {docData.map((item, key) => {
            return (
              <div className="mx-8 mt-8">
                <div className="bg-white h-96 shadow-lg w-72 dPkgsCard relative">
                  <PkgHeader className="w-full h-12" />
                  <div className="flex mx-8 mt-4 mb-2">
                    <div>
                      <p className="mr-20 text-mountainmist-500">Name:</p>
                      <p className="text-base font-bold  mt-2">Small</p>
                    </div>
                    <div>
                      <p className="text-mountainmist-500">Price:</p>
                      <div className="flex">
                        <p className="text-base font-bold text-cerise-500 mt-2">
                          $ 50{" "}
                        </p>

                        <p className="text-base font-bold  mt-2"> / month</p>
                      </div>
                    </div>
                  </div>
                  {item.pkg_feature.map((item, key) => (
                    <>
                      <div className="mx-8 text-mountainmist-500 " style={{marginBottom: ".2rem"}}>
                        <p className="flex">
                          <CheckMark className="mr-2"/>
                          {item}
                        </p>
                      </div>
                    </>
                  ))}
                  <div className="flex  mx-8 mb-4 absolute bottom-0">
                    <DPen className="mr-4 h-10 w-12"/>
                    <DTrash className=" h-10 w-10"/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PkgsSubcripion;
