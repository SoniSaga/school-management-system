"use client";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import { calendarEvents } from "@/lib/data";
import moment from "moment";

const BigCalendar = () => {
  const localizer = momentLocalizer(moment);
  const [view, setView] = useState<View>(Views.DAY);
  return (
    
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        view={view}
        views={["week", "day"]}
      
        onView={(newView) => setView(newView)}
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 17, 0, 0)}
      />
  
  );
};

export default BigCalendar;
