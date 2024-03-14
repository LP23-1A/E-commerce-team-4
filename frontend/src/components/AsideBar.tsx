"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { data } from "@/utils/Sidebar";
import Link from "next/link";

const AsideBar = () => {
  const router = useRouter();
  const [active, setActive] = useState<number | any>(0);
  const path = window.location.pathname;
  // const handler = (index: number) => {
  //   setActive(index);
  // };
  console.log(path);

  return (
    <div className="flex flex-col pt-4 gap-3 bg-white h-screen w-80">
      {data.map((e, index) => {
        return (
          <Link
            href={e.slug}
            className="flex items-center gap-6 text-xl cursor-pointer"
            style={{ backgroundColor: path === e.slug ? "#EEEEEE" : "" }}
          >
            {e.icon}
            <p>{e.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default AsideBar;
