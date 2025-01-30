import { TimelineEvent } from '../types';

export const events: TimelineEvent[] = [
  {
    id: '1',
    time: '8:00 PM',
    location: {
      name: 'Sunway University (Level 9)',
      coordinates: [3.067422952979164, 101.60382838612972]
    },
    description: 'Pre-event briefing: Q&A session and logistics discussion',
    groupName: 'All Groups',
    date: 'February 8, 2025'
  },
  {
    id: '2',
    time: '6:30 PM',
    location: {
      name: 'Aman Bistro',
      coordinates: [3.068022906805213, 101.60234780676066]
    },
    description: 'Food collection and assembly point',
    groupName: 'All Groups',
    date: 'February 15, 2025'
  },
  {
    id: '3',
    time: '7:20 PM',
    location: {
      name: 'Masjid Wilayah',
      coordinates: [3.172197169334809, 101.67103839321979]
    },
    description: 'Maghrib prayer and group division',
    groupName: 'All Groups',
    date: 'February 15, 2025'
  },
  {
    id: '4',
    time: '8:00 PM',
    location: {
      name: 'Chow Kit',
      coordinates: [3.161417, 101.697361]
    },
    description: 'Distribution area for all groups',
    groupName: 'All Groups',
    date: 'February 15, 2025'
  },
  {
    id: '6',
    time: '10:00 PM',
    location: {
      name: 'Bab Al Yemen Restaurant',
      coordinates: [3.041222, 101.706639]
    },
    description: 'Dinner and closing',
    groupName: 'All Groups',
    date: 'February 15, 2025'
  }
];