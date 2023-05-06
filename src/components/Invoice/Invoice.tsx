import React from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

import Image from "next/image";

import EmptyIllustration from "../../../public/assets/images/illustration-empty.svg";
import { data } from "~/data";

type InvoiceData = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
};

type InvoiceListProps = Omit<
  InvoiceData,
  | "createdAt"
  | "description"
  | "paymentTerms"
  | "clientEmail"
  | "senderAddress"
  | "clientAddress"
  | "items"
>[];

function Invoice() {
  return (
    <>
      <InvoiceHeader />
      {data.length === 0 ? <InvoiceEmpty /> : <InvoiceList invoices={data} />}
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
      <div className="flex items-center justify-center space-x-6">
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

const InvoiceEmpty = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Image src={EmptyIllustration} alt="empty illustration" />

      <div className="mt-10 w-full max-w-[200px] text-center">
        <h2 className="text-[20px] text-white">There is nothing here</h2>
        <p className="mt-6 text-xs tracking-[-0.25px] text-lavender">
          create an invoice by clicking the{" "}
          <span className="font-bold">New</span> button and get started
        </p>
      </div>
    </div>
  );
};

const InvoiceList = ({ invoices }: { invoices: InvoiceListProps }) => {
  return (
    <div className="mt-8 flex w-full flex-col px-6">
      {invoices.map((invoice) => (
        <InvoiceCard
          key={invoice.id}
          id={invoice.id}
          clientName={invoice.clientName}
          total={invoice.total}
          status={invoice.status}
          paymentDue={invoice.paymentDue}
        />
      ))}
    </div>
  );
};

const InvoiceCard = ({
  id,
  clientName,
  total,
  status,
  paymentDue,
}: {
  id: string;
  clientName: string;
  total: number;
  status: string;
  paymentDue: string;
}) => {
  const paymentDueDate = new Date(paymentDue).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="mb-4 w-full rounded-lg bg-primaryDarkBlue p-6">
      <div className="flex w-full items-center justify-between">
        <div className="text-xs font-bold tracking-[-0.25px] text-white">
          <span className="text-wildBlue">#</span>
          {id}
        </div>
        <div className="text-xs font-medium tracking-[-0.25px] text-white">
          {clientName}
        </div>
      </div>

      <div className="mt-6 flex w-full items-center justify-between">
        <div className="flex flex-col">
          <div className="text-xs font-bold tracking-[-0.25px] text-lavender">
            {paymentDueDate}
          </div>
          <div className="mt-2 text-base font-bold tracking-[-0.25px] text-white">
            <span className="mr-[2px]">£</span>
            <span>{total.toFixed(2)}</span>
          </div>
        </div>
        <Status status={status} />
      </div>
    </div>
  );
};

const Status = ({ status }: { status: string }) => {
  return (
    <div
      className={`${
        status === "paid" ? "bg-[#33D69F]/10 text-[#33D69F]" : "bg-red-500"
      }
      ${status === "pending" ? "bg-[#FF8F00]/10 text-[#FF8F00] " : ""}
      ${status === "draft" ? "bg-[#DFE3FA]/10 text-lavender" : ""}
      flex h-[40px] w-[104px] items-center justify-center rounded-lg text-xs font-bold tracking-[-0.25px]`}
    >
      <div className="flex items-center justify-center">
        <div
          className={`mr-2 h-2 w-2 rounded-full ${
            status === "paid" ? "bg-[#33D69F]" : ""
          }
          ${status === "pending" ? "bg-[#FF8F00]" : ""}
          ${status === "draft" ? "bg-[#DFE3FA]" : ""}
          `}
        ></div>
        <span className="capitalize">{status}</span>
      </div>
    </div>
  );
};
