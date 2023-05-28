import { Router } from "express";
import {
  createRecord,
  getRecord,
  updateRecord,
  deleteRecord,
} from "../controllers/record.controller";

const router = Router();

router.post("/", createRecord);

router.get("/", getRecord);

router.patch("/:id", updateRecord);

router.delete("/:id", deleteRecord);

export default router;