// src/api/notice.ts
import { apiFetchJson } from "./client";

export interface Notice {
  id: number;
  title: string;
  content: string;
  pinned: boolean;
  createdAt: string;
}

export async function getNotices() {
  return await apiFetchJson<Notice[]>("/notices", { cache: "no-store" });
}
