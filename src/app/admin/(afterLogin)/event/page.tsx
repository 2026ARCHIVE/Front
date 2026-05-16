"use client";
import WriteButton from "@/components/admin/WriteButton";
import React, { useEffect, useState } from "react";
import ListItem from "./_components/ListItem";
import { EventApiItem, getEvents } from "@/api/events";

export default function AdminEventPage() {
  const [events, setEvents] = useState<EventApiItem[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };
    fetchEvents();
  }, []);
  return (
    <div>
      <WriteButton link="/admin/event/write-and-edit" />
      {events.map((event) => (
        <ListItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={new Date(event.createdAt).toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
      ))}
    </div>
  );
}
