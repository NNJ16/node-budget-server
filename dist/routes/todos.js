"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.post("/", todos_1.createToDo);
router.get("/", todos_1.getToDo);
router.patch("/:id", todos_1.updateToDo);
router.delete("/:id", todos_1.deleteToDo);
exports.default = router;
//# sourceMappingURL=todos.js.map