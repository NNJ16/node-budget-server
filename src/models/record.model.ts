import * as mongoose from "mongoose";
import { Model } from "mongoose";

type RecordType = RecordModel & mongoose.Document;
export interface RecordModel {
  label: {
    type: String;
    required: true;
  };
  amount: {
    type: Number;
    required: true;
  };
  type: {
    type: String;
    required: true;
  };
  category: {
    type: String;
    required: true;
  };
  dateCreated: {
    type: Date;
    required: true;
  };
}
const RecordsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
});
const Record: Model<RecordType> = mongoose.model<RecordType>(
  "Record",
  RecordsSchema
);
export default Record;
