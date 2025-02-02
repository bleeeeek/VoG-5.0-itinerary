import React from 'react';
import { Car, Package, Droplet, Shirt, Home } from 'lucide-react';
import { vehicles } from '../data/logistics';

export const LogisticsInfo: React.FC = () => {
  const totalInventory = {
    foodPacks: vehicles.reduce((sum, v) => sum + v.inventory.foodPacks, 0),
    waterBottles: vehicles.reduce((sum, v) => sum + v.inventory.waterBottles, 0),
    clothes: {
      women: {
        shirts: 60,
        dresses: 26,
        formalShirts: 30,
        pants: 56,
        jacketsAndHoodies: 10,
        abayahs: 17,
        prayerClothes: 18,
        niqabs: 6,
        prayerSets: 6
      },
      men: {
        shirts: 28,
        pants: 16,
        thobes: 1,
        suits: 2
      },
      household: {
        towels: 7,
        bedsheets: 5
      }
    }
  };

  const totalWomensClothes = Object.values(totalInventory.clothes.women).reduce((a, b) => a + b, 0);
  const totalMensClothes = Object.values(totalInventory.clothes.men).reduce((a, b) => a + b, 0);
  const totalHouseholdItems = Object.values(totalInventory.clothes.household).reduce((a, b) => a + b, 0);

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
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{totalWomensClothes + totalMensClothes}</p>
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
              <h4 className="font-semibold text-pink-700 mb-3">Women's Clothing ({totalWomensClothes})</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Shirts:</span> <span>{totalInventory.clothes.women.shirts}</span></li>
                <li className="flex justify-between"><span>Dresses:</span> <span>{totalInventory.clothes.women.dresses}</span></li>
                <li className="flex justify-between"><span>Formal Shirts:</span> <span>{totalInventory.clothes.women.formalShirts}</span></li>
                <li className="flex justify-between"><span>Pants:</span> <span>{totalInventory.clothes.women.pants}</span></li>
                <li className="flex justify-between"><span>Jackets/Hoodies:</span> <span>{totalInventory.clothes.women.jacketsAndHoodies}</span></li>
                <li className="flex justify-between"><span>Abayahs:</span> <span>{totalInventory.clothes.women.abayahs}</span></li>
                <li className="flex justify-between"><span>Prayer Clothes/Shawls:</span> <span>{totalInventory.clothes.women.prayerClothes}</span></li>
                <li className="flex justify-between"><span>Niqabs:</span> <span>{totalInventory.clothes.women.niqabs}</span></li>
                <li className="flex justify-between"><span>Prayer Sets:</span> <span>{totalInventory.clothes.women.prayerSets}</span></li>
              </ul>
            </div>

            {/* Men's Clothing */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-3">Men's Clothing ({totalMensClothes})</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Shirts:</span> <span>{totalInventory.clothes.men.shirts}</span></li>
                <li className="flex justify-between"><span>Pants:</span> <span>{totalInventory.clothes.men.pants}</span></li>
                <li className="flex justify-between"><span>Thobes:</span> <span>{totalInventory.clothes.men.thobes}</span></li>
                <li className="flex justify-between"><span>Suits:</span> <span>{totalInventory.clothes.men.suits}</span></li>
              </ul>
            </div>

            {/* Household Items */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-3">Household Items ({totalHouseholdItems})</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Towels:</span> <span>{totalInventory.clothes.household.towels}</span></li>
                <li className="flex justify-between"><span>Bedsheets:</span> <span>{totalInventory.clothes.household.bedsheets}</span></li>
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