"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar
        className="bg-white rounded-md p-4"
        onChange={onChange}
        value={value}
      />

      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {events.map((event) => (
        <div
          className="border border-2 border-t-4 odd:border-t-lamaSky  even:border-t-lamaPurple p-4 rounded-md mt-2"
          key={event.id}
        >
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-gray-600">{event.title}</h1>
            <span className="text-gray-300 text-xs">{event.time}</span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{event.title}</p>
        </div>
      ))}
    </div>
  );
};

export default EventCalendar;
