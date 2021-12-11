import React from "react";
import { ReactComponent as ComingSoon } from "../../../../images/icons/coming_soon.svg";

const BotTemplate = () => {
  return (
    <>
      <div className=" bg-alabaster-500 h-full	"  >
        <div className="pt-32">
          
          <ComingSoon className="mx-auto "/>
          <p className="mt-8 text-center text-2xl">
          Please check back for future updates
          </p>
        </div>
      </div>
    </>
  );
};

export default BotTemplate;
