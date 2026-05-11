import { apiFetchJson } from "./client";

export type EventApiItem = {
  id: number;
  title: string;
  description: string | null;
  startTime: string; // ISO
  endTime: string; // ISO
  location: string;
  imageUrls: string[];
  createdAt: string;
};

export type EventApiDetailItem = EventApiItem & {
  content: string | null;
  updatedAt: string;
};

export async function getEvents() {
  const res = await apiFetchJson<EventApiItem[]>("/events", { revalidate: 300 });
  if (!res.ok) throw new Error(`이벤트 목록 조회 실패 (${res.status})`);

  if (process.env.NODE_ENV !== "production") {
    console.log("[events] raw response:", res.data);
  }

  return res.data ?? [];
}

export async function getEvent(id: string) {
  const res = await apiFetchJson<EventApiDetailItem>(`/events/${id}`, {
    revalidate: 300,
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`이벤트 상세 조회 실패 (${res.status})`);

  if (process.env.NODE_ENV !== "production") {
    console.log("[events] raw detail response:", res.data);
  }

  return res.data;
}

