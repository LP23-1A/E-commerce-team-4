"use client";
import { createContext, useRef } from "react";

export const createProductContext = createContext({});
export const CreateProductProvider = ({ children }: any) => {
  const formDataRef = useRef({
    productName: "",
    categoryId: "",
    price: "",
    productCode: "",
    description: "",
    residual: "",
    mainCate: "",
    subCate: "",
  });
  return (
    <createProductContext.Provider value={{ formDataRef }}>
      {children}
    </createProductContext.Provider>
  );
};
