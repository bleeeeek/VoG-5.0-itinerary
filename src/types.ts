export interface TimelineEvent {
  id: string;
  time: string;
  date: string;
  location: {
    name: string;
    coordinates: [number, number];
  };
  description: string;
  groupName: string;
}

export interface Vehicle {
  id: string;
  plateNumber: string;
  driver: {
    name: string;
    phone: string;
    tagId: string;
  };
  group: string;
  capacity: number;
  inventory: {
    foodPacks: number;
    waterBottles: number;
    clothingBoxes?: number;
  };
}

export interface InventoryLocation {
  locationId: string;
  locationName: string;
  clothes: {
    men: number;
    women: number;
  };
  foodPacks: number;
  waterBottles: number;
}

export interface ClothingInventory {
  women: {
    shirts: number;
    dresses: number;
    formalShirts: number;
    pants: number;
    jacketsAndHoodies: number;
    abayahs: number;
    prayerClothes: number;
    niqabs: number;
    prayerSets: number;
  };
  men: {
    shirts: number;
    pants: number;
    thobes: number;
    suits: number;
  };
  household: {
    towels: number;
    bedsheets: number;
  };
}