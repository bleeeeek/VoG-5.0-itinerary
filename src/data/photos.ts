export interface BTSPhoto {
  id: string;
  url: string;
  description: string;
  date: string;
  category: 'Clothes' | 'Food' | 'Preparation' | 'Other';
}

const getImagePath = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return `${base}bts-photos${path}`;
};

export const photos: BTSPhoto[] = [
  {
    id: '1',
    url: getImagePath('/clothes/clothes.jpeg'),
    description: 'Organized sorting of donated clothes including pants, shirts, and various garments for efficient distribution',
    date: '2025-02-08',
    category: 'Clothes'
  },
  {
    id: '2',
    url: getImagePath('/preparation/water.jpeg'),
    description: 'Cactus water bottles stocked and ready for distribution - ensuring hydration for those in need',
    date: '2025-02-08',
    category: 'Preparation'
  },
  // Add more photos as needed
]; 