import React from 'react';
import Admin from './index';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Plan() {
  return (
    <Admin>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        editable
        selectable
        events={[
          { title: 'event 1', date: '2021-11-01' },
          { title: 'event 2', date: '2021-11-21' }
        ]}      
      />
    </Admin>
  );
}