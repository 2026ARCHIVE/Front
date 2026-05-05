import { notFound } from "next/navigation";
import { getLostItemById } from "../_data/lostAndFoundData";
import LostAndFoundDetailView from "../_components/detail/LostAndFoundDetailView";

export default async function LostAndFoundDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const item = getLostItemById(resolvedParams.id);
  if (!item) return notFound();

  return <LostAndFoundDetailView item={item} />;
}

