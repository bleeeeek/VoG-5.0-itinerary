import clothesImage from '@/assets/bts-photos/clothes/clothes.jpeg'
import waterImage from '@/assets/bts-photos/preparation/water.jpeg'

export interface BTSPhoto {
  id: string;
  url: string;
  description: string;
  category: 'Clothes' | 'Food' | 'Preparation' | 'Other';
}

const getImagePath = (path: string) => {
  // For GitHub Pages, we need to prefix with the repository name
  // Remove the 'src' prefix since assets will be in the built directory
  return path.replace('src/', '/');
};

export const photos: BTSPhoto[] = [
  {
    id: '1',
    url: clothesImage,
    description: 'Organized clothing items ready for distribution',
    category: 'Clothes'
  },
  {
    id: '2',
    url: waterImage,
    description: 'Cactus water bottles prepared for distribution',
    category: 'Preparation'
  },
  // Add more photos as needed
]; 