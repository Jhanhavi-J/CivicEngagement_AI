import React, { useEffect, useState } from 'react';
import civicService from '../services/civicService';

function CivicInfo() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    civicService.getEvents().then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.title} - {event.date} at {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CivicInfo;