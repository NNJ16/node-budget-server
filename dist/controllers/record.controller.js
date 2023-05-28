"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecord = exports.updateRecord = exports.getRecord = exports.createRecord = void 0;
const record_model_1 = __importDefault(require("../models/record.model"));
const createRecord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        var records = yield record_model_1.default.create(data);
        return res
            .status(200)
            .json({ message: "Record created successfully", data: records });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createRecord = createRecord;
const getRecord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var records = yield record_model_1.default.find({}).sort({
            _id: -1,
        });
        return res.status(200).json({ message: "All Records!", data: records });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getRecord = getRecord;
const updateRecord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body.id;
        var records = yield record_model_1.default.findOneAndUpdate({ id: id }, req.body, {
            new: true,
        });
        return res
            .status(200)
            .json({ message: "Record updated successfully!", data: records });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateRecord = updateRecord;
const deleteRecord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        var isDeleted = yield record_model_1.default.findOneAndDelete({ id: id });
        if (!isDeleted)
            throw new Error("Failed to delete Record");
        return res.status(200).json({ message: "Record deleted successfully!" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteRecord = deleteRecord;
//# sourceMappingURL=record.controller.js.map