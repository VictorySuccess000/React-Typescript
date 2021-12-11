import React from "react";
import { ReactComponent as Search } from "../../../images/icons/5mins_search.svg";
import { useHistory } from "react-router-dom";

const ClientsTab = () => {
  const history = useHistory();

  const TableHeader = ({ title }) => (
    <th className="py-4 px-2">
      <p className="text-sm font-normal text-left">{title}</p>
    </th>
  );
  const TableData = ({ title }) => (
    <td className="py-4 px-2">
      <p className="text-sm font-normal text-left">{title}</p>
    </td>
  );

  return (
    <div className="ml-8">
      <div className="flex flex-row mt-4 items-center ">
        {/* <input
                className="outline-none px-4 h-16 rounded-2xl shadow-lg border border-transparent w-72"
                placeholder="Search by name"
            /> */}
        <div>
          <div class="relative mb-3 w-full flex flex-wrap ">
            <span class="absolute z-10 py-3 pl-3 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
              <Search />{" "}
            </span>
            <input
              className="bg-white px-12 py-4 text-sm border-0 dPkgsCard outline-none placeholder-gray-500 bgInput"
              placeholder="Search clients"
            />
          </div>
        </div>
        <div className="mr-4">
          <div className="relative mb-3 w-full flex flex-wrap ">
            <select className="outline-none cursor-pointer text-gray-400 text-sm px-6 appearance-none py-4 rounded-2xl shadow-lg border border-transparent ml-4 w-72">
              <option className="text-sm mx-4"> Subscription Type</option>
            </select>
          </div>
        </div>
        {/* <select className="outline-none px-4 h-12 rounded-2xl shadow-lg border border-transparent ml-4 w-72">
          <option>All Subscription Types</option>
        </select> */}
        {/* <button className="bg-cerise-500 shadow h-12 px-4 rounded text-white">
          New Client
        </button> */}
      </div>

      <p className="mt-8 text-lg font-semibold">
        Below are the list of your clients
      </p>

      <div className={"mr-8 mt-4"}>
        <table className="border w-full bg-white">
          <thead>
            <tr className={"border bg-gray-100 border-gray-200"}>
              <TableHeader title={"CLIENT NAME"} />
              <TableHeader title={"DATE OF SUBSCRIPTION"} />
              <TableHeader title={"DAYS LEFT"} />
              <TableHeader title={"COMPANY NAME"} />
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(0)
              .map((item) => (
                <tr
                  className={"bg-white border cursor-pointer"}
                  onClick={(e) => history.push("/clients/1")}
                >
                  <TableData title={"Geek"} />
                  <TableData title={"September 1st, 2021"} />
                  <TableData title={"3 Days"} />
                  <TableData title={"Geek Inc."} />
                </tr>
              ))}
          </tbody>
        </table>

        <div className={"flex w-full place-items-center justify-center"}>
          <button className="mt-4 rounded-lg text-base p-4 text-black bg-white w-72 border border-gray-300 mb-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsTab;
