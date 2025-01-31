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
    url: '/bts-photos/clothes/clothes.jpeg',
    description: 'Sorting and organizing donated clothes for distribution',
    category: 'Clothes'
  },
  {
    id: '2',
    url: '/bts-photos/preparation/water.jpeg',
    description: 'Water bottles prepared for distribution',
    category: 'Preparation'
  },
  // Add more photos as needed
]; 