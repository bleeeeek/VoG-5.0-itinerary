export interface BTSPhoto {
  id: string;
  url: string;
  description: string;
  category: 'Clothes' | 'Food' | 'Preparation' | 'Other';
}

export const photos: BTSPhoto[] = [
  {
    id: '1',
    url: '/assets/bts-photos/clothes/clothes.jpeg',
    description: 'Organized clothing items ready for distribution',
    category: 'Clothes'
  },
  {
    id: '2',
    url: '/assets/bts-photos/preparation/water.jpeg',
    description: 'Cactus water bottles prepared for distribution',
    category: 'Preparation'
  },
  // Add more photos as needed
]; 