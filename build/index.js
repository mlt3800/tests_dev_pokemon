"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const router_1 = require("./routes/router");
app_1.app.use("", router_1.PokemonRouter);
