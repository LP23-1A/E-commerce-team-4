import { SaveProduct, SearchProduct, Star, TrolleyProduct } from "@/images";
import React, { useContext } from "react";
import useSWR from "swr";
import { UserOrderContext } from ".";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ProductUserDetail = () => {
  const router = useRouter();
  const { orderData, setOrderData, addCart }: any =
    useContext(UserOrderContext);
  const { data, error } = useSWR(
    "http://localhost:8000/products/product",
    fetcher
  );
  const allProduct = data?.getAll;

  if (error) return <div>Error fetching</div>;
  if (!data) return <div>Loading...</div>;
  const handlerProductDetail = (id: string) => {
    router.push("/user/productDetail");
    localStorage.setItem("productId", JSON.stringify(id));
  };
  localStorage.removeItem("productId");
  return (
    <div className="flex flex-col gap-10 mx-auto w-[1440px] mb-32">
      {allProduct.map((val: any) => {
        return (
          <div className="flex gap-10">
            <img
              src={val.images}
              alt=""
              className="w-[240px] h-[240px]"
              onClick={() => handlerProductDetail(val._id)}
            />
            <div className="flex flex-col justify-between my-4">
              <div className="flex flex-col gap-3">
                <div className="flex gap-5 items-center">
                  <h1 className="font-semibold text-[#151875]">
                    {val.productName}
                  </h1>
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-yellow-500 rounded-3xl"></div>
                    <div className="h-2 w-2 bg-red-500 rounded-3xl"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-3xl"></div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#151875] font-medium">
                    {val.price
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    ₮
                  </p>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="text-md text-[#9295AA]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta itaque recusandae quasi, velit voluptate, sapiente
                  optio reprehenderit saepe corrupti temporibus modi veritatis.
                </p>
              </div>
              <div className="flex items-center gap-10">
                <button
                  className="flex justify-center items-center rounded-[50%] h-9 w-9 bg-white shadow-xl"
                  onClick={() => addCart(val._id)}
                >
                  <Toaster position="top-right" />
                  <TrolleyProduct />
                </button>
                <button className="flex justify-center items-center rounded-[50%] h-9 w-9 bg-white shadow-xl">
                  <SaveProduct />
                </button>
                <button className="flex justify-center items-center rounded-[50%] h-9 w-9 bg-white shadow-xl">
                  <SearchProduct />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
