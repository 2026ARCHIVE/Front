import WriteButton from "@/components/admin/WriteButton";
import React from "react";
import ListItem from "./_components/ListItem";

const dummyEvents = [
  { id: "1", title: "이벤트 1", date: "2024-07-01" },
  { id: "2", title: "이벤트 2", date: "2024-07-15" },
  { id: "3", title: "이벤트 3", date: "2024-08-01" },
];

export default function AdminEventPage() {
  return (
    <div>
      <WriteButton link="/admin/event/write-and-edit" />
      {dummyEvents.map((event) => (
        <ListItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
        />
      ))}
    </div>
  );
}
