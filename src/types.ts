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
    clothes?: {
      men: number;
      women: number;
    };
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