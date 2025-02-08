import React from 'react';
import { Users, Package, Shirt } from 'lucide-react';

export const GroupActivities: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mt-4 sm:mt-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Group Activities</h2>

      {/* Food Distribution */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Package className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-blue-600">Food Distribution Teams</h3>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="font-medium mb-2">Groups 3, 4, and 5</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Two sisters will prepare food packs (food box + water)</li>
            <li>One brother will handle distribution to those in need</li>
            <li>Maintain organized queues for efficient distribution</li>
          </ul>
        </div>
      </div>

      {/* Clothes Distribution */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Shirt className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-blue-600">Clothes Distribution Teams</h3>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="font-medium mb-2">Groups 1 and 2</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Organize recipients in orderly lines</li>
            <li>Assist with size selection and appropriate clothing choices</li>
            <li>Ensure fair and organized distribution process</li>
          </ul>
        </div>
      </div>

      {/* Important Note */}
      <div className="mt-6 bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
        <p className="text-amber-800 text-sm">
          <span className="font-medium">Note:</span> These group assignments and distribution procedures are subject to change based on ground conditions and team requirements.
        </p>
      </div>
    </div>
  );
}; 