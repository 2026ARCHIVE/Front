"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormLayoutProps {
  initialTitle?: string;
  initialContent?: string;
  initialIsSticked?: boolean;
  noticeId?: string;
}
export default function FormLayout({
  initialTitle = "",
  initialContent = "",
  initialIsSticked = false,
  noticeId,
}: FormLayoutProps) {
  const [content, setContent] = useState(initialContent);
  const [title, setTitle] = useState(initialTitle);
  const [isSticked, setIsSticked] = useState(initialIsSticked);
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (noticeId) {
      alert(
        `공지사항 수정: ${JSON.stringify({ noticeId, title, content, isSticked })}`,
      );
    } else {
      alert(
        `새 공지사항 등록: ${JSON.stringify({ title, content, isSticked })}`,
      );
    }
    router.replace("/admin/notice");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full bg-white p-4">
      <input
        type="text"
        placeholder="제목을 입력하세요"
        className="bg-gray-100 p-3 mb-4 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="flex items-center gap-2 mb-4">
        <span>상단 고정</span>
        <input
          type="checkbox"
          checked={isSticked}
          onChange={(e) => setIsSticked(e.target.checked)}
        />
      </div>

      <div className="flex-1 pb-20">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
          className="w-full h-64 p-3 bg-gray-100 rounded-md resize-none outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-2 mt-10">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => router.back()}
        >
          취소
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          저장
        </button>
      </div>
    </form>
  );
}
