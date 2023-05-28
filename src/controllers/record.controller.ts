import { RequestHandler } from "express";

import Record, { RecordModel } from "../models/record.model";

export const createRecord: RequestHandler = async (req, res, next) => {
  try {
    const data: RecordModel = req.body;
    var records = await Record.create(data);
    return res
      .status(200)
      .json({ message: "Record created successfully", data: records });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRecord: RequestHandler = async (req, res, next) => {
  try {
    var records = await Record.find({}).sort({
      _id: -1,
    });
    return res.status(200).json({ message: "All Records!", data: records });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRecord: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body.id;
    var records = await Record.findOneAndUpdate({ id: id }, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "Record updated successfully!", data: records });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRecord: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    var isDeleted = await Record.findOneAndDelete({ id: id });
    if (!isDeleted) throw new Error("Failed to delete Record");
    return res.status(200).json({ message: "Record deleted successfully!" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
