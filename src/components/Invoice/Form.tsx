import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

function Form({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [paymentTerms, setPaymentTerms] = useState("Net 1 Day");
  const containerVariant = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      width: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="absolute left-0 top-0 z-50 flex h-full items-center justify-center overflow-auto bg-secondaryBlack"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex h-full w-full flex-col">
        <div
          className="mt-8 flex items-center px-6"
          onClick={() => setIsOpen(false)}
        >
          <ChevronLeftIcon className="h-4 w-4 text-primaryPurple" />
          <span className="ml-5 text-xs tracking-[-0.25px] text-white">
            Go back
          </span>
        </div>
        <div className="mt-6 px-6 ">
          <h2 className="text-2xl tracking-[-0.5px] text-white">New Invoice</h2>
          {/* Bill From */}
          <div className="mt-4">
            <div className="text-xs tracking-[-0.25px] text-primaryPurple">
              Bill From
            </div>
            <div className="mt-6 flex flex-col">
              <Input label="Street Address" type="text" name="StreetAddress" />
              <div className="grid grid-cols-2 gap-6">
                <Input label="City" type="text" name="SenderCity" />
                <Input label="Post Code" type="text" name="SenderPostCode" />
              </div>
              <Input label="Country" type="text" name="senderCountry" />
            </div>
          </div>
          {/* Bill To */}
          <div className="mt-4">
            <div className="mb-6 text-xs tracking-[-0.25px] text-primaryPurple">
              Bill To
            </div>
            <Input label="Client's Name" type="text" name="ClientName" />
            <Input label="Client's Email" type="email" name="ClientEmail" />
            <Input
              label="Street Address"
              type="text"
              name="ClientSenderAddress"
            />
            <div className="grid grid-cols-2 gap-6">
              <Input label="City" type="text" name="ClientCity" />
              <Input label="Post Code" type="text" name="ClientPostCode" />
            </div>
            <Input label="Country" type="text" name="ClientCountry" />

            {/* Invoice */}
            <div className="mt-4">
              <div className="mb-6 text-xs tracking-[-0.25px] text-primaryPurple">
                Invoice Date
              </div>
              <Input label="Invoice Date" type="date" name="InvoiceDate" />
              <div className="mb-6 flex w-full flex-col">
                <label className="text-xs tracking-[-0.25px] text-coolGray">
                  Payment Terms
                </label>
                <select className="mt-2 rounded-md border-none bg-primaryDarkBlue text-white">
                  <option value="Net 1 Day">Net 1 Day</option>
                  <option value="Net 7 Days">Net 7 Days</option>
                  <option value="Net 30 Days">Net 30 Days</option>
                </select>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-[18px] font-bold leading-8 tracking-[-0.38px] text-[#777F98]">
                Item List
              </h3>
              <div className="flex flex-col">
                <div className="mt-10 w-full">
                  <button className="w-full rounded-3xl bg-secondaryDarkBlue py-4 text-coolGray">
                    + Add new Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[88px]">
          <div className="bg-primaryDarkBlue p-6">
            <div className="grid grid-cols-3 gap-2">
              <button
                className="rounded-3xl bg-secondaryDarkBlue p-4 text-xs font-bold tracking-[-0.25px] text-lavender"
                onClick={() => setIsOpen(false)}
              >
                Discard
              </button>
              <button className="rounded-3xl bg-[#373B53] p-4 text-xs font-bold tracking-[-0.25px] text-lavender">
                Save as Draft
              </button>
              <button className="rounded-3xl bg-primaryPurple p-4 text-xs font-bold tracking-[-0.25px] text-lavender">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Form;

const Input = ({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) => {
  return (
    <div className="mb-6 flex flex-col">
      <label
        htmlFor="streetAddress"
        className="text-xs tracking-[-0.25px] text-coolGray"
      >
        {label}
      </label>
      <input
        type={type}
        className="mt-2 rounded-md border-none bg-primaryDarkBlue text-white  "
        name={name}
      />
    </div>
  );
};

const ItemList = () => {
  return <></>;
};
