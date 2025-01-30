import { Vehicle, InventoryLocation } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'v1',
    plateNumber: 'TBD',
    driver: {
      name: 'Muhammad Ahad',
      phone: 'TBD',
      tagId: 'GRP-001'
    },
    group: 'Group 1',
    capacity: 8,
    inventory: {
      foodPacks: 75,
      waterBottles: 144,
    }
  },
  {
    id: 'v2',
    plateNumber: 'TBD',
    driver: {
      name: 'Refaat Hatem',
      phone: '+60 11-6187 0833',
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
    plateNumber: 'TBD',
    driver: {
      name: 'Allawi',
      phone: 'TBD',
      tagId: 'GRP-003'
    },
    group: 'Group 3',
    capacity: 6,
    inventory: {
      foodPacks: 75,
      waterBottles: 144,
    }
  },
  {
    id: 'v4',
    plateNumber: 'TBD',
    driver: {
      name: 'Saira Rafique',
      phone: 'TBD',
      tagId: 'GRP-004'
    },
    group: 'Group 4',
    capacity: 6,
    inventory: {
      foodPacks: 0,
      waterBottles: 0,
      clothingBoxes: 6
    }
  },
  {
    id: 'v5',
    plateNumber: 'TBD',
    driver: {
      name: 'Mohamed Azhan',
      phone: '+60 14-501 5014',
      tagId: 'GRP-005'
    },
    group: 'Group 5',
    capacity: 6,
    inventory: {
      foodPacks: 0,
      waterBottles: 0,
    }
  }
];

export const inventoryLocations: InventoryLocation[] = [];