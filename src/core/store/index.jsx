import { atom } from "recoil";

// Album state
export const albumState = atom({
  key: "albumState",
  default: [], // Initially empty
});

// Bestseller state
export const bestsellerState = atom({
  key: "bestsellerState",
  default: [], // Initially empty
});
