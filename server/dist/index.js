"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => {
    // Start Express server
    app.listen(PORT, () => {
        console.log(`Application is running at http://localhost:${PORT}`);
        console.log(`Press CTRL-C to stop\n`);
    });
    console.log("App is working");
})
    .catch((err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    process.exit(1);
});
console.log("process", process.env.MONGODB_URI);
//# sourceMappingURL=index.js.map