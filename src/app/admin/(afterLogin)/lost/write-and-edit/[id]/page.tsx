import FormLayout from "../_components/FormLayout";

export default async function LostEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  /*
  const res = await fetch(`https://api.example.com/admin/lost/${id}`, {
    cache: "no-store", // 최신 데이터를 위해 캐시 무효화
  });
  if (!res.ok) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }
  const data = await res.json();
  */

  const data = {
    id: Number(id),
    itemName: "검정색 지갑",
    category: "WALLET",
    description: "검정색 가죽 반지갑, 학생증 포함",
    imageUrls: ["/Lost/lost1.png"],
    foundLocation: "중앙도서관 2층 열람실",
    foundTime: "2026-05-15 14:30경",
    storageLocation: "학생회관 1층 분실물센터",
    status: "STORED",
  };

  return (
    <div>
      <FormLayout
        lostId={data.id}
        itemName={data.itemName}
        category={data.category}
        description={data.description}
        imageUrls={data.imageUrls}
        foundLocation={data.foundLocation}
        foundTime={data.foundTime}
        storageLocation={data.storageLocation}
        status={data.status}
      />
    </div>
  );
}
