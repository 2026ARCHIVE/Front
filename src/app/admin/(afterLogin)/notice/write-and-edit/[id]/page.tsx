import FormLayout from "./_components/FormLayout";

const dummyNotice = {
  id: "1",
  title: "공지사항 제목 예시",
  content: "공지사항 내용 예시입니다.",
  isSticked: true,
};

interface Notice {
  id: string;
  title: string;
  content: string;
  isSticked: boolean;
}
export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const Params = await params;
  const { id } = Params;
  const notice: Notice | null = id === dummyNotice.id ? dummyNotice : null;
  if (notice === null) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }
  return (
    <div>
      <FormLayout
        initialTitle={notice.title}
        initialContent={notice.content}
        initialIsSticked={notice.isSticked}
        noticeId={notice.id}
      />
    </div>
  );
}
