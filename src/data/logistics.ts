import { Vehicle, InventoryLocation } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'v1',
    plateNumber: 'Honda City',
    driver: {
      name: 'Muhammad Ahad',
      phone: '+60 112664251 ',
      tagId: 'GRP-001'
    },
    group: 'Group 1',
    capacity: 8,
    inventory: {
      foodPacks: 0,
      waterBottles: 0,
      clothingBoxes: 7
    }
  },
  {
    id: 'v2',
    plateNumber: 'Proton Waja',
    driver: {
      name: 'Muhammad Ali',
      phone: '+91 6656661115',
      tagId: 'GRP-002'
    },
    group: 'Group 2',
    capacity: 6,
    inventory: {
      foodPacks: 0,
      waterBottles: 0,
      clothingBoxes: 5
    }
  },
  {
    id: 'v3',
    plateNumber: 'Proton ',
    driver: {
      name: 'Refaat Hatem',
      phone: 'TBD',
      tagId: 'GRP-003'
    },
    group: 'Group 3',
    capacity: 6,
    inventory: {
      foodPacks: 200,
      waterBottles: 0
    }
  },
  {
    id: 'v4',
    plateNumber: 'Toyota Innova',
    driver: {
      name: 'Mohamed Azhan',
      phone: '+60 14-501 5014',
      tagId: 'GRP-004'
    },
    group: 'Group 4',
    capacity: 6,
    inventory: {
      foodPacks: 0,
      waterBottles: 244
    }
  },
  {
    id: 'v5',
    plateNumber: 'TBD',
    driver: {
      name: 'Azreen',
      phone: 'TBD',
      tagId: 'GRP-005'
    },
    group: 'Group 5',
    capacity: 6,
    inventory: {
      foodPacks: 0,
      waterBottles: 0
    }
  }
];

export const inventoryLocations: InventoryLocation[] = [
  {
    id: 'loc1',
    name: "Women's Clothing",
    items: [
      { name: 'Shirts', quantity: 60 },
      { name: 'Dresses', quantity: 26 },
      { name: 'Formal Shirts', quantity: 30 },
      { name: 'Pants', quantity: 56 },
      { name: 'Jackets/Hoodies', quantity: 10 },
      { name: 'Abayahs', quantity: 17 },
      { name: 'Prayer Clothes/Shawls', quantity: 18 },
      { name: 'Niqabs', quantity: 6 },
      { name: 'Prayer Sets', quantity: 6 }
    ]
  },
  {
    id: 'loc2',
    name: "Men's Clothing",
    items: [
      { name: 'Shirts', quantity: 31 },
      { name: 'Pants', quantity: 21 },
      { name: 'Thobes', quantity: 1 },
      { name: 'Suits', quantity: 2 }
    ]
  },
  {
    id: 'loc3',
    name: "Children's Clothing",
    items: [
      { name: 'Mixed Items', quantity: 30 }
    ]
  }
];