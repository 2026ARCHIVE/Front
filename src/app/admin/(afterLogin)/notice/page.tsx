"use client";
import React, { use, useEffect } from "react";
import ListItem from "./_components/ListItem";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import WriteButton from "../../../../components/admin/WriteButton";
import DeleteCheckAlert from "@/components/admin/DeleteCheckAlert";

interface Notice {
  id: number;
  title: string;
  date: string;
  sticked?: boolean;
}

const notices: Notice[] = [
  {
    id: 1,
    title: "공지사항 제목 1",
    date: "2024-06-01",
    sticked: true,
  },
  {
    id: 2,
    title: "공지사항 제목 2",
    date: "2024-06-02",
    sticked: false,
  },
  {
    id: 3,
    title: "공지사항 제목 3",
    date: "2024-06-03",
    sticked: false,
  },
  {
    id: 4,
    title: "공지사항 제목 4",
    date: "2024-06-04",
    sticked: true,
  },
];
export default function AdminNoticePage() {
  const [noticeList, setNoticeList] = React.useState<Notice[]>([]);
  const [invalid, setInvalid] = React.useState(false);
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const [targetId, setTargetId] = React.useState<number | null>(null);
  useEffect(() => {
    const fetchNotices = async () => {
      setTimeout(() => {
        const sortedNotices = [...notices].sort((a, b) => {
          if (a.sticked && !b.sticked) return -1;
          if (!a.sticked && b.sticked) return 1;

          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setNoticeList(sortedNotices);
      }, 1000);
    };
    fetchNotices();
  }, []);

  if (noticeList.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-blue-300">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div>
      {noticeList.map((notice) => (
        <ListItem
          key={notice.id}
          title={notice.title}
          date={notice.date}
          sticked={notice.sticked}
          setSticked={(sticked) => {
            if (invalid) return;
            setNoticeList((prev) =>
              prev.map((n) => (n.id === notice.id ? { ...n, sticked } : n)),
            );
            setNoticeList((prev) => {
              const updated = prev.map((n) =>
                n.id === notice.id ? { ...n, sticked } : n,
              );
              return [...updated].sort((a, b) => {
                if (a.sticked && !b.sticked) return -1;
                if (!a.sticked && b.sticked) return 1;
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              });
            });
            //TODO: API 호출하여 공지사항의 sticked 상태 업데이트 연속 입력 안되게
            setInvalid(true);
            setTimeout(() => setInvalid(false), 1000);
          }}
          onEdit={() => {
            router.push(`/admin/notice/write-and-edit/${notice.id}`);
          }}
          onDelete={() => {
            //TODO: API 호출하여 공지사항 삭제
            setTargetId(notice.id);
            setVisible(true);
          }}
        />
      ))}
      <WriteButton link="/admin/notice/write-and-edit" />
      {visible && targetId !== null && (
        <DeleteCheckAlert
          setVisible={setVisible}
          onCancel={() => setVisible(false)}
          onConfirm={() => {
            if (targetId !== null) {
              setNoticeList((prev) => prev.filter((n) => n.id !== targetId));
            }
            setTargetId(null);
            setVisible(false);
          }}
        />
      )}
    </div>
  );
}
