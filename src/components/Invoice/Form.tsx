import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import DeleteIcon from "../../../public/assets/images/icon-delete.svg";
import useInput from "~/hooks/useInput";
import Image from "next/image";

export type InvoiceFormProps = {
  clientName: string;
  clientEmail: string;
  clientStreet: string;
  clientCity: string;
  clientCountry: string;
  clientPostCode: string;
  description: string;
  paymentTerms: string;
  senderStreet: string;
  senderCity: string;
  senderCountry: string;
  senderPostCode: string;
  paymentDue: string;
  status: Status;
};

type Status = "PAID" | "PENDING" | "DRAFT";

type ItemProps = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

function Form({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dateRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<string>("");
  const [items, setItems] = useState<ItemProps[]>([
    {
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    },
  ]);
  const [status, setStatus] = useState<Status>("DRAFT");
  const [invoice, setInvoice] = useState<InvoiceFormProps>({
    clientName: "",
    clientEmail: "",
    clientStreet: "",
    clientCity: "",
    clientCountry: "",
    clientPostCode: "",
    description: "",
    paymentTerms: "",
    senderStreet: "",
    senderCity: "",
    senderCountry: "",
    senderPostCode: "",
    paymentDue: "",
    status: status,
  });

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

  const clientName = useInput(invoice.clientName, "clientName", setInvoice);
  const clientEmail = useInput(invoice.clientEmail, "clientEmail", setInvoice);
  const clientStreet = useInput(
    invoice.clientStreet,
    "clientStreet",
    setInvoice
  );
  const clientCity = useInput(invoice.clientCity, "clientCity", setInvoice);
  const clientCountry = useInput(
    invoice.clientCountry,
    "clientCountry",
    setInvoice
  );
  const clientPostCode = useInput(
    invoice.clientPostCode,
    "clientPostCode",
    setInvoice
  );
  const description = useInput(invoice.description, "description", setInvoice);
  const paymentDue = useInput(invoice.paymentDue, "paymentDue", setInvoice);
  const senderStreet = useInput(
    invoice.senderStreet,
    "senderStreet",
    setInvoice
  );
  const senderCity = useInput(invoice.senderCity, "senderCity", setInvoice);
  const senderCountry = useInput(
    invoice.senderCountry,
    "senderCountry",
    setInvoice
  );
  const senderPostCode = useInput(
    invoice.senderPostCode,
    "senderPostCode",
    setInvoice
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(invoice);
    console.log(items);
  };

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ]);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
        <form className="mt-6" onSubmit={handleSubmit}>
          <h2 className="px-6 text-2xl tracking-[-0.5px] text-white">
            New Invoice
          </h2>
          {/* Bill From */}
          <div className="mt-4 px-6">
            <div className="text-xs tracking-[-0.25px] text-primaryPurple">
              Bill From
            </div>
            <div className="mt-6 flex flex-col">
              <Input label="Street Address" type="text" {...senderStreet} />
              <div className="grid grid-cols-2 gap-6">
                <Input label="City" type="text" {...senderCity} />
                <Input label="Post Code" type="text" {...senderPostCode} />
              </div>
              <Input label="Country" type="text" {...senderCountry} />
            </div>
          </div>

          <div className="mt-4 px-6">
            <div className="mb-6 text-xs tracking-[-0.25px] text-primaryPurple">
              Bill To
            </div>
            <Input label="Client's Name" type="text" {...clientName} />
            <Input label="Client's Email" type="email" {...clientEmail} />
            <Input label="Street Address" type="text" {...clientStreet} />
            <div className="grid grid-cols-2 gap-6">
              <Input label="City" type="text" {...clientCity} />
              <Input label="Post Code" type="text" {...clientPostCode} />
            </div>
            <Input label="Country" type="text" {...clientCountry} />

            <div className="mt-4">
              <div className="text-xs tracking-[-0.25px] text-primaryPurple">
                Invoice Date
              </div>
              <Input
                label="Invoice Date"
                type="date"
                {...paymentDue}
                getRef={dateRef}
              />
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
              <div className="mb-6">
                <Input
                  label="Project Description"
                  type="text"
                  {...description}
                />
              </div>
            </div>

            <ItemList
              items={items}
              handleAddItem={handleAddItem}
              setItems={setItems}
            />
          </div>
          <div className="mt-[88px]">
            <div className="bg-primaryDarkBlue p-6">
              <div className="grid grid-cols-3 gap-2">
                <button
                  className="rounded-3xl bg-secondaryDarkBlue p-4 text-xs font-bold tracking-[-0.25px] text-lavender"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  Discard
                </button>
                <button
                  className="rounded-3xl bg-[#373B53] p-4 text-xs font-bold tracking-[-0.25px] text-lavender"
                  type="button"
                >
                  Save as Draft
                </button>
                <button
                  className="rounded-3xl bg-primaryPurple p-4 text-xs font-bold tracking-[-0.25px] text-lavender"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Form;

const Input = ({
  label,
  type,
  name,
  onChange,
  value,
  getRef,
}: {
  label: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  getRef?: React.RefObject<HTMLInputElement>;
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
        value={value}
        onChange={onChange}
        ref={getRef}
      />
    </div>
  );
};

const ItemList = ({
  items,
  handleAddItem,
  setItems,
}: {
  items: ItemProps[];
  handleAddItem: () => void;
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}) => {
  const handleItemChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { name, value } = e.target;
    const newItems = [...items];

    newItems[index] = {
      ...newItems[index],
      [name]: value,
    } as ItemProps;
    setItems(newItems);
  };

  return (
    <div className="mt-10">
      <h3 className="mb- text-[18px] font-bold leading-8 tracking-[-0.38px] text-[#777F98]">
        Item List
      </h3>
      {items &&
        items.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <Input
              label="Item Name"
              type="text"
              name="name"
              onChange={(e) => handleItemChange(e, index)}
              value={item.name}
            />
            <div className="flex items-center">
              <div className="grid grid-cols-3 gap-4">
                <Input
                  label="Qty"
                  type="number"
                  name="qty"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(e, index)}
                />
                <Input
                  label="Price"
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemChange(e, index)}
                />
                <Input
                  label="Total"
                  type="number"
                  name="total"
                  value={item.total}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </div>
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={DeleteIcon}
                alt="delete icon"
                width={24}
                height={24}
                className="ml-2"
              />
            </div>
          </div>
        ))}

      <div className="">
        <button
          type="button"
          className="w-full rounded-3xl bg-secondaryDarkBlue py-4 text-xs font-bold tracking-[-0.25px] text-coolGray"
          onClick={handleAddItem}
        >
          + Add New Item
        </button>
      </div>
    </div>
  );
};
