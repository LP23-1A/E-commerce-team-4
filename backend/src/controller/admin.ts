import { Request, Response } from "express";
import { AdminModel } from "../model/admin";

type AdminType = {
  email: String;
  name: String;
  shopInformation: String;
  city: String;
  district: String;
  khoroo: String;
  exprience: String;
  product: String;
};
const createAdmin = async (req: Request, res: Response) => {
  try {
    const {
      email,
      name,
      shopInformation,
      city,
      district,
      khoroo,
      exprience,
      product,
    }: Required<AdminType> = req.body;
    const createAdmin = await AdminModel.create({
      email: email,
      name: name,
      shopInformation: shopInformation,
      city: city,
      district: district,
      khoroo: khoroo,
      exprience: exprience,
      product: product,
    });
    res.status(201).send({ success: true, createAdmin });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};
const getAdmin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const getAdmin = await AdminModel.findOne({ email: email });
    res.status(200).send({ success: true, getAdmin });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const updateAdmin = async (req: Request, res: Response) => {
  try {
    const updateId = req.params.id;
    const { email, name } = req.body;
    const updateAdmin = await AdminModel.findByIdAndUpdate(updateId, {
      email: email,
      name: name,
    });
    res.status(201).send({ success: true, updateAdmin });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const deleteAdmin = async (req: Request, res: Response) => {
  try {
    const deleteId = req.body.id;
    const deleteAdmin = AdminModel.findByIdAndDelete(deleteId);
    res.status(200).send({ success: true, deleteAdmin });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};
export { createAdmin, getAdmin, updateAdmin, deleteAdmin };