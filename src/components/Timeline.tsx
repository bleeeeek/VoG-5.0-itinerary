import React from 'react';
import { Clock } from 'lucide-react';
import { TimelineEvent } from '../types';
import { format } from 'date-fns';

interface TimelineProps {
  events: TimelineEvent[];
  selectedEvent: TimelineEvent | null;
  onEventSelect: (event: TimelineEvent) => void;
}

export const Timeline: React.FC<TimelineProps> = ({
  events,
  selectedEvent,
  onEventSelect,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 sm:p-6 h-full overflow-y-auto">
      <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6">Event Timeline</h2>
      <div className="space-y-3 sm:space-y-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`relative flex items-start space-x-2 sm:space-x-4 cursor-pointer transition-all
              ${selectedEvent?.id === event.id ? 'scale-102 sm:scale-105' : ''}
            `}
            onClick={() => onEventSelect(event)}
          >
            <div className="flex-shrink-0">
              <div className={`
                w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                ${selectedEvent?.id === event.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}
              `}>
                <Clock className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              {index !== events.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200 absolute left-4 sm:left-6 top-8 sm:top-12 transform -translate-x-1/2" />
              )}
            </div>
            <div className={`flex-grow p-2 sm:p-4 rounded-lg transition-colors text-sm sm:text-base
              ${selectedEvent?.id === event.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
            `}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1">
                <h3 className="font-semibold">{event.location.name}</h3>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-xs sm:text-sm">
                  <span className="font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {event.date}
                  </span>
                  <span className="font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {event.time}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-1">{event.description}</p>
              <span className="text-xs sm:text-sm font-medium text-gray-500">
                {event.groupName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};