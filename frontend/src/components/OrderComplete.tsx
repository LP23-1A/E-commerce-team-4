import { CheckList, Clock, Correct } from "@/images";
import React from "react";

export const OrderComplete = () => {
  return (
    <div className="my-[150px] flex ">
      <Clock />
      <div className=" border-dotted border-2 border-indigo-600  flex justify-center flex-col items-center gap-[20px]">
        <Correct />
        <h2 className="text-[32px] text-[#101750] font-bold flex justify-center">
          Таны захиалга амжилттай
        </h2>
        <p className="text-[#8D92A7] px-[300px] flex text-center">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <button className="bg-[#FF1788] text-white font-bold px-10 py-4">
          Үргэлжлүүлэх
        </button>
      </div>
      <div className="flex items-end mt-[50px]">
        <CheckList />
      </div>
    </div>
  );
};
