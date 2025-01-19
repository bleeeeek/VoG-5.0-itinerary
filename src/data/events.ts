import { TimelineEvent } from '../types';

export const events: TimelineEvent[] = [
  {
    id: '1',
    time: '20:00',
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
    time: '18:30',
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
    time: '19:20',
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
    time: '20:00',
    location: {
      name: 'Chow Kit',
      coordinates: [3.161179145147297, 101.6968941937965]
    },
    description: 'Distribution area for Groups 1 & 2',
    groupName: 'Groups 1 & 2',
    date: 'February 15, 2025'
  },
  {
    id: '5',
    time: '20:00',
    location: {
      name: 'Pasar Seni',
      coordinates: [3.146748877332319, 101.69559426416488]
    },
    description: 'Distribution area for Groups 3 & 4',
    groupName: 'Groups 3 & 4',
    date: 'February 15, 2025'
  },
  {
    id: '6',
    time: '22:00',
    location: {
      name: 'Khanjee Restaurant',
      coordinates: [3.1693485729218116, 101.69712359314326]
    },
    description: 'Dinner and closing',
    groupName: 'All Groups',
    date: 'February 15, 2025'
  }
];