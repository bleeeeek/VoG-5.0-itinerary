import React from 'react';
import { Car, Package, Droplet, Shirt } from 'lucide-react';
import { vehicles, inventoryLocations } from '../data/logistics';

export const LogisticsInfo: React.FC = () => {
  const totalInventory = {
    foodPacks: vehicles.reduce((sum, v) => sum + v.inventory.foodPacks, 0),
    waterBottles: vehicles.reduce((sum, v) => sum + v.inventory.waterBottles, 0),
    clothes: {
      men: vehicles.reduce((sum, v) => sum + (v.inventory.clothes?.men || 0), 0),
      women: vehicles.reduce((sum, v) => sum + (v.inventory.clothes?.women || 0), 0)
    }
  };

  return (
    <div className="space-y-4 sm:space-y-8">
      {/* Total Inventory Summary */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Total Inventory</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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
              <h3 className="font-semibold text-sm sm:text-base">Men's Clothes</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{totalInventory.clothes.men}</p>
          </div>
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Shirt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <h3 className="font-semibold text-sm sm:text-base">Women's Clothes</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{totalInventory.clothes.women}</p>
          </div>
        </div>
      </div>

      {/* Vehicle Allocation */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Vehicle Allocation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="border rounded-lg p-3 sm:p-4">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{vehicle.plateNumber}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{vehicle.group}</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Tag: {vehicle.driver.tagId}
                </span>
              </div>
              <div className="space-y-1 sm:space-y-2 text-sm">
                <p><span className="font-medium">Driver:</span> {vehicle.driver.name}</p>
                <p><span className="font-medium">Contact:</span> {vehicle.driver.phone}</p>
                <div className="border-t pt-2 mt-2">
                  <p><span className="font-medium">Food Packs:</span> {vehicle.inventory.foodPacks}</p>
                  <p><span className="font-medium">Water Bottles:</span> {vehicle.inventory.waterBottles}</p>
                  {vehicle.inventory.clothes && (
                    <p><span className="font-medium">Clothes:</span> {vehicle.inventory.clothes.men} men's, {vehicle.inventory.clothes.women} women's</p>
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