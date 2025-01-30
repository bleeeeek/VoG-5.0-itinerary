export interface BTSPhoto {
  id: string;
  url: string;
  description: string;
  category: 'Clothes' | 'Food' | 'Preparation' | 'Other';
}

const getImagePath = (path: string) => {
  // Remove the 'public' prefix since it's automatically served at root
  return path;
};

export const photos: BTSPhoto[] = [
  {
    id: '1',
    url: getImagePath('/bts-photos/clothes/clothes.jpeg'),
    description: 'Organized sorting of donated clothes including pants, shirts, and various garments for efficient distribution',
    category: 'Clothes'
  },
  {
    id: '2',
    url: getImagePath('/bts-photos/preparation/water.jpeg'),
    description: 'Cactus water bottles stocked and ready for distribution - ensuring hydration for those in need',
    category: 'Preparation'
  },
  // Add more photos as needed
]; 