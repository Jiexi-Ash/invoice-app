import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";

function Invoice() {
  return (
    <>
      <InvoiceHeader />
    </>
  );
}

export default Invoice;

const InvoiceHeader = () => {
  return (
    <div className="mt-8 flex w-full items-center justify-between px-6">
      <div className="flex flex-col">
        <h1 className="text-[20px] font-bold tracking-[-0.63px] text-white">
          Invoices
        </h1>
        <p className="text-xs leading-4 tracking-[-0.15px] text-white">
          No Invoices
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center space-x-3">
          <div className="text-xs font-bold tracking-[-0.25px] text-white">
            filter
          </div>
          <ChevronDownIcon className="h-4 w-4 text-primaryPurple" />
        </div>
        <div className="flex items-center justify-center space-x-2 rounded-3xl bg-primaryPurple p-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                fill="#7C5DFA"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <span className="pr-3 text-xs font-bold tracking-[-0.25px] text-white">
            New
          </span>
        </div>
      </div>
    </div>
  );
};
