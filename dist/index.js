"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = 3000;
const app = (0, express_1.default)();
const corsOptions = {
    origin: 'https://www.section.io'
};
app.use((0, cors_1.default)(corsOptions));
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});
app.get('/:name', (req, res) => {
    let name = req.params.name;
    res.json({
        message: `Hello ${name}`
    });
});
;
//# sourceMappingURL=index.js.map