"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const record_route_1 = __importDefault(require("./routes/record.route"));
const body_parser_1 = require("body-parser");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/records", record_route_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
mongoose_1.default.connect(process.env.MONGODB_URI).catch((error) => {
    if (error) {
        console.log("Database connection failed" + error.message);
    }
});
app.listen(process.env.PORT, () => {
    console.log("app listning in PORT " + process.env.PORT);
});
//# sourceMappingURL=index.js.map