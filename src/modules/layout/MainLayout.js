import React from "react";
import SideBar from "../components/navs/sidebar";
import {ReactComponent as AdminUser} from "../../images/icons/5mins_user.svg";

const MainLayout = ({title, children}) => {
    return (
        <>
            <div className="flex max-h-screen ">
                {/* Side bar */}
                <div className="w-1/5 h-screen max-h-screen overflow-hidden">
                    <SideBar/>
                </div>
                <div className="w-4/5 flex flex-col h-screen ">
                    <div className="h-20 bg-white shadow w-full">
                        <div className="w-full">
                            <div className="flex flex-row flex-wrap justify-between content-center">
                                <p className="text-center text-2xl self-center ml-12 text-pollwa font-bold" >
                                    {title && title}
                                </p>
                                <AdminUser className="h-16 w-16 rounded-full mt-2 float-right mr-16"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-1 overflow-y-auto bg-alabaster-500">{children}</div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
