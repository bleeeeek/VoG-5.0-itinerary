import React from 'react';
import { Car, Package, Droplet, Shirt, Home } from 'lucide-react';
import { vehicles, inventoryLocations } from '../data/logistics';

export const LogisticsInfo: React.FC = () => {
  const totalInventory = {
    foodPacks: vehicles.reduce((sum, v) => sum + (v.inventory.foodPacks || 0), 0),
    waterBottles: vehicles.reduce((sum, v) => sum + (v.inventory.waterBottles || 0), 0),
    clothes: inventoryLocations.reduce((sum, location) => {
      return sum + location.items.reduce((itemSum, item) => itemSum + item.quantity, 0);
    }, 0),
    household: {
      towels: 7,
      bedsheets: 5
    }
  };

  // Get women's clothing items
  const womensClothing = inventoryLocations.find(loc => loc.name === "Women's Clothing")?.items || [];
  // Get men's clothing items
  const mensClothing = inventoryLocations.find(loc => loc.name === "Men's Clothing")?.items || [];
  // Get children's clothing items
  const childrensClothing = inventoryLocations.find(loc => loc.name === "Children's Clothing")?.items || [];

  const totalHouseholdItems = Object.values(totalInventory.household).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-4 sm:space-y-8">
      {/* Total Inventory Summary */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Total Inventory</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Package className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <h3 className="font-semibold text-sm sm:text-base">Food Packs</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{totalInventory.foodPacks}</p>
          </div>
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Droplet className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <h3 className="font-semibold text-sm sm:text-base">Water Bottles</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{totalInventory.waterBottles}</p>
          </div>
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Shirt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <h3 className="font-semibold text-sm sm:text-base">Total Clothes</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{totalInventory.clothes}</p>
          </div>
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <h3 className="font-semibold text-sm sm:text-base">Household Items</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{totalHouseholdItems}</p>
          </div>
        </div>

        {/* Detailed Clothing Inventory */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Detailed Clothing Inventory</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Women's Clothing */}
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-700 mb-3">
                Women's Clothing ({womensClothing.reduce((sum, item) => sum + item.quantity, 0)})
              </h4>
              <ul className="space-y-2 text-sm">
                {womensClothing.map(item => (
                  <li key={item.name} className="flex justify-between">
                    <span>{item.name}:</span>
                    <span>{item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Men's Clothing */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-3">
                Men's Clothing ({mensClothing.reduce((sum, item) => sum + item.quantity, 0)})
              </h4>
              <ul className="space-y-2 text-sm">
                {mensClothing.map(item => (
                  <li key={item.name} className="flex justify-between">
                    <span>{item.name}:</span>
                    <span>{item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Household Items */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-3">Household Items ({totalHouseholdItems})</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Towels:</span> <span>{totalInventory.household.towels}</span></li>
                <li className="flex justify-between"><span>Bedsheets:</span> <span>{totalInventory.household.bedsheets}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Allocation */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Vehicle Allocation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="border rounded-lg p-2 sm:p-4">
              <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{vehicle.plateNumber}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{vehicle.group}</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Tag: {vehicle.driver.tagId}
                </span>
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                <p><span className="font-medium">Driver:</span> {vehicle.driver.name}</p>
                <p><span className="font-medium">Contact:</span> {vehicle.driver.phone}</p>
                <div className="border-t pt-2 mt-2">
                  {vehicle.inventory.foodPacks > 0 && (
                    <p><span className="font-medium">Food Packs:</span> {vehicle.inventory.foodPacks}</p>
                  )}
                  {vehicle.inventory.waterBottles > 0 && (
                    <p><span className="font-medium">Water Bottles:</span> {vehicle.inventory.waterBottles}</p>
                  )}
                  {vehicle.inventory.clothingBoxes && (
                    <p><span className="font-medium">Clothing Boxes:</span> {vehicle.inventory.clothingBoxes}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};