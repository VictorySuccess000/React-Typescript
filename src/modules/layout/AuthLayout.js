import React from "react";
import { ReactComponent as AuthImage } from "../../images/icons/5mins_auth.svg";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="hidden md:flex">
        <div className="w-1/2 h-full">{children}</div>
        <div className="w-1/2 h-full bg-alabaster-500" >
          <AuthImage className="h-screen w-full object-cover" />
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="h-full">{children}</div>
        {/* <div className="w-1/2 h-full bg-alabaster-500" >
          <AuthImage className="h-screen w-full object-cover" />
        </div> */}
      </div>
    </>
  );
};

export default AuthLayout;
