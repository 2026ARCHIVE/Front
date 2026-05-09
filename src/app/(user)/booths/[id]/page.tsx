import { experienceList } from "@/data/festival";
import { notFound } from "next/navigation";
import { dummyBooths } from "../_data/boothData";
import DummyBoothDetailView from "../_components/DummyBoothDetailView";
import FestivalBoothDetailView from "../_components/FestivalBoothDetailView";

export default async function BoothDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const n = Number(id);
  if (!Number.isFinite(n) || !Number.isInteger(n)) notFound();

  const festivalItem = experienceList.find((b) => b.id === n);
  if (festivalItem) {
    return (
      <FestivalBoothDetailView item={festivalItem} categoryLabel="체험 부스" />
    );
  }

  const dummy = dummyBooths.find((b) => b.id === n);
  if (dummy) {
    return <DummyBoothDetailView booth={dummy} />;
  }

  notFound();
}
