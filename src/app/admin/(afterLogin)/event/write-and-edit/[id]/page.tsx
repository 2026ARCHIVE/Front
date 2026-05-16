import React from "react";
import FormLayout from "../_components/FormLayout";

const dummyEvent = {
  id: "1",
  title: "이벤트 제목",
  startDate: "2024-07-01T10:00", // date 대신 startDate 로 변경
  endDate: "2024-07-01T18:00", // endDate 추가
  location: "서울",
  description: "이벤트 설명입니다.",
  method: "참여 방법입니다.",
  prizeText: "상품 설명입니다.",
  prizeImageUrl: "/public/artist1.png",
  mainImageUrl: "/public/artist1.png",
};

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="p-4">
      <FormLayout
        eventId={id}
        title={dummyEvent.title}
        startDate={dummyEvent.startDate}
        endDate={dummyEvent.endDate} // endDate 전달
        location={dummyEvent.location}
        description={dummyEvent.description}
        method={dummyEvent.method}
        prizeText={dummyEvent.prizeText}
        prizeImageUrl={dummyEvent.prizeImageUrl}
        mainImageUrl={dummyEvent.mainImageUrl}
      />
    </div>
  );
}
