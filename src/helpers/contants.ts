import fetch from "node-fetch";

export const SNIPER_GUILD_ID = "Guild Id";//server id
export const SNIPER_SELF_TOKEN = "Token1";//urllerin alınacağı token
export const URL_SNIPER_SELF_TOKEN = "Token2";//urllerin çekileceği token
 "Token2";
export const WEBHOOKS = {
  SUCCESS: async (content: string) => {
    await fetch(
      `Your Webhook`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content,
          username: "başarılı",
        }),
      }
    );
  },
  INFO: async (content: string) => {
    await fetch(
      `Your Webhook`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "bilgi",
        }),
      }
    );
  },

  FAIL: async (content: string) => {
    await fetch(
      `Your Webhook`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "başarısız",
        }),
      }
    );
  },
};
