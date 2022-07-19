import type { TopAppBarComponentDev } from "@smui/top-app-bar";
import { writable } from "svelte/store";

const PathId = {
  HOME: "/",
  RECRUIT: "/recruit",
  GUIDE: "/guide",
  ACCOUNT: "/account",
  OTHERS: "/others",
} as const;

let scrollId = writable("");
let firestoreStatus = writable("");
let currentPath = writable("/home");
let isLoading = writable(true);
let sampleData = writable();

export {
  scrollId,
  firestoreStatus,
  PathId,
  currentPath,
  isLoading,
  sampleData,
};