"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEBHOOKS = exports.URL_SNIPER_SELF_TOKEN = exports.SNIPER_SELF_TOKEN = exports.SNIPER_GUILD_ID = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.SNIPER_GUILD_ID = "Your Guild id";//server id
exports.SNIPER_SELF_TOKEN = "Token1";//urllerin alınacağı token
exports.URL_SNIPER_SELF_TOKEN = "Token2";//urlyi çekecek token
exports.WEBHOOKS = {
    SUCCESS: async (content) => {
        await (0, node_fetch_1.default)(`Your Webhook`, {//webhook link
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
                username: "başarılı",
            }),
        });
    },
    INFO: async (content) => {
        await (0, node_fetch_1.default)(`Your Webhook`, {//webhook link
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
                username: "bilgi",
            }),
        });
    },
    FAIL: async (content) => {
        await (0, node_fetch_1.default)(`Your Webhook`, {//webhook link
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
                username: "başarısız",
            }),
        });
    },
};
