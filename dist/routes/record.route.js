"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const record_controller_1 = require("../controllers/record.controller");
const router = (0, express_1.Router)();
router.post("/", record_controller_1.createRecord);
router.get("/", record_controller_1.getRecord);
router.patch("/", record_controller_1.updateRecord);
router.delete("/:id", record_controller_1.deleteRecord);
exports.default = router;
//# sourceMappingURL=record.route.js.map