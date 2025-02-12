import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Map } from './components/Map';
import { Timeline } from './components/Timeline';
import { LogisticsInfo } from './components/LogisticsInfo';
import { Logo } from './components/Logo';
import { events } from './data/events';
import { TimelineEvent } from './types';
import { MapPin, Calendar, Users, Package } from 'lucide-react';
import { BTS } from './components/BTS';
import { GroupActivities } from './components/GroupActivities';

function App() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-[1000]">
          <div className="max-w-7xl mx-auto px-3 py-2 sm:px-4 sm:py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <Logo className="self-center sm:self-auto" />
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <span className="text-xs sm:text-base text-gray-600">February 15, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <span className="text-xs sm:text-base text-gray-600">5 Groups • 23 Volunteers</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
            {/* Map Section - Adjust height for mobile */}
            <div className="order-2 lg:order-1 h-[400px] sm:h-[600px]">
              <Map events={events} selectedEvent={selectedEvent} />
            </div>

            {/* Timeline Section - Adjust height for mobile */}
            <div className="order-1 lg:order-2 h-[400px] sm:h-[600px]">
              <Timeline
                events={events}
                selectedEvent={selectedEvent}
                onEventSelect={setSelectedEvent}
              />
            </div>
          </div>

          {/* Logistics Information */}
          <LogisticsInfo />

          {/* Event Information */}
          <div className="mt-4 sm:mt-8 bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Event Information</h2>
            
            {/* Group Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Group 1 Members</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                  <li>Muhammad Ahad</li>
                  <li>Adil Karim Barbhuiya</li>
                  <li>Umar Imran</li>
                  <li>Abdulrahman Musse</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Group 2 Members</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                  <li>Muhammad Ali</li>
                  <li>Naseem Ali Mansoor Ali</li>
                  <li>Aslam Anis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Group 3 Members</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                  <li>Refaat Hatem</li>
                  <li>Omar El Shazly</li>
                  <li>Shafwan</li>
                  <li>Adnan Anwar</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Group 4 Members</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                  <li>Mohamed Azhan</li>
                  <li>Syed Mohammed Eshan Amir</li>
                  <li>Sidrat Shamim</li>
                  <li>Henar Abdul Wahab</li>
                  <li>Aiman Maqsood</li>
                  <li>Waseemat Nabeeha</li>
                  <li>Amira Rashad Taha Omer</li>
                  <li>Ayesha Shajal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Group 5 Members</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                  <li>Azreen</li>
                  <li>Sara</li>
                  <li>+3 Members</li>
                </ul>
              </div>
            </div>

            {/* Group Activities */}
            <GroupActivities />

            {/* Safety Warning */}
            <div className="mt-6 bg-red-50 rounded-lg shadow-lg p-4 sm:p-6 border-l-4 border-red-500">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-red-700">⚠️ Important Safety Notice:</h2>
              <div className="text-red-800 text-sm sm:text-base space-y-2">
                <p className="font-medium">The safety of all our members is our highest priority!</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Be aware that we are operating in areas with considerable risk</li>
                  <li>Avoid entering shady or poorly lit areas</li>
                  <li>Trust your instincts - if something feels off, it probably is</li>
                  <li>Immediately inform others in your group of any concerns</li>
                  <li>Don't wait to see what happens - leave the area if you feel unsafe</li>
                  <li>Stay with your group at all times</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Side Note */}
          <div className="mt-4 sm:mt-8 bg-amber-50 rounded-lg shadow-lg p-4 sm:p-6 border-l-4 border-amber-500">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-amber-700">Side Note:</h2>
            <div className="flex items-start space-x-3">
              <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-amber-800 text-sm sm:text-base">
                Please collect cardboard boxes for the homeless so that we can provide them with it as they use it to sleep on the floor.
              </p>
            </div>
          </div>

          {/* Behind The Scenes Section */}
          <div className="mt-4 sm:mt-8">
            <BTS />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white mt-8">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
            <p className="text-center font-arabic text-xl sm:text-2xl text-gray-700 mb-2 leading-loose">
              رَّبِّ ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِمَن دَخَلَ بَيْتِىَ مُؤْمِنًۭا وَلِلْمُؤْمِنِينَ وَٱلْمُؤْمِنَـٰتِ وَلَا تَزِدِ ٱلظَّـٰلِمِينَ إِلَّا تَبَارًۢا
            </p>
            <p className="text-center text-base sm:text-lg text-gray-600 mb-2 max-w-3xl mx-auto italic">
              "My Lord! Forgive me, my parents, and whoever enters my house in faith, and ˹all˺ believing men and women. And increase the wrongdoers only in destruction."
            </p>
            <p className="text-center text-sm text-gray-500">
              Surah Nuh, Verse 28 (71:28)
            </p>
          </div>
        </footer>
      </div>
      <Analytics />
    </>
  );
}

export default App;