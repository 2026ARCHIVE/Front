import { apiFetchJson } from "./client";

export type LostItemCategoryApi =
  | "CLOTHING"
  | "ACCESSORY"
  | "ELECTRONICS"
  | "BAG"
  | "WALLET"
  | "DOCUMENT"
  | "UMBRELLA"
  | "BOTTLE"
  | "STATIONERY"
  | "KEY"
  | "OTHER";

export type LostItemStatusApi = "STORED" | "RETURNED" | "DISPOSED";

export type LostItemApi = {
  id: number;
  itemName: string;
  category: LostItemCategoryApi;
  foundLocation: string;
  imageUrls: string[];
  status: LostItemStatusApi;
  createdAt: string; // ISO
};

export type LostItemDetailApi = LostItemApi & {
  description: string | null;
  foundTime: string | null; // ISO
  storageLocation: string | null;
  updatedAt: string;
};

export async function getLostItems(params?: {
  search?: string;
  category?: LostItemCategoryApi;
}) {
  const qs = new URLSearchParams();
  if (params?.search) qs.set("search", params.search);
  if (params?.category) qs.set("category", params.category);
  const query = qs.toString();

  const res = await apiFetchJson<LostItemApi[]>(
    `/lost-items${query ? `?${query}` : ""}`,
    { revalidate: 300 },
  );
  if (!res.ok) throw new Error(`분실물 목록 조회 실패 (${res.status})`);
  return res.data ?? [];
}

export async function getLostItem(id: string) {
  const res = await apiFetchJson<LostItemDetailApi>(`/lost-items/${id}`, {
    revalidate: 300,
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`분실물 상세 조회 실패 (${res.status})`);
  return res.data;
}

