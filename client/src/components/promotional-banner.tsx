import React from 'react';
import { Star } from 'lucide-react';

const MarchActivityBanner: React.FC = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-sky-200 via-blue-100 to-sky-300 flex items-center justify-between p-10 font-sans overflow-hidden relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-4 h-4 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-40 w-3 h-3 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Models Section */}
      <div className="flex-1 flex items-center justify-center gap-8 pr-10">
        {/* Model 1 */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-44 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-3 shadow-lg relative overflow-hidden">
            <div className="absolute inset-2 bg-gray-600 rounded flex items-center justify-center">
              <div className="text-white text-xs text-center">
                <div className="w-12 h-16 bg-blue-400 rounded mb-2 mx-auto opacity-80"></div>
                <div className="text-[10px] opacity-70">MARILYN MANSON</div>
              </div>
            </div>
          </div>
          <div className="text-gray-600 text-xs">
            <div>Tag?</div>
            <div>label?</div>
            <div>packaging bag?</div>
            <div className="text-yellow-600 font-semibold">Build your brand!</div>
          </div>
        </div>

        {/* Model 2 */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-44 bg-black rounded-lg flex items-center justify-center mb-3 shadow-lg">
            <div className="w-20 h-36 bg-gray-800 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Model 3 */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-44 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg flex items-center justify-center mb-3 shadow-lg">
            <div className="w-20 h-36 bg-gray-200 rounded flex items-center justify-center">
              <div className="text-gray-700 text-xs text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-2"></div>
                <div className="text-[8px]">GRAPHIC TEE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Details Section */}
      <div className="flex-1 max-w-md">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 italic">
          March Activity Month
        </h1>
        
        <div className="space-y-3">
          {/* Sample making offers */}
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-pink-400 fill-pink-400" />
            <span className="text-blue-800 font-semibold text-lg">
              1 sample making reduce <span className="text-pink-500">$15</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-pink-400 fill-pink-400" />
            <span className="text-blue-800 font-semibold text-lg">
              2 sample making reduce <span className="text-pink-500">$30</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-pink-400 fill-pink-400" />
            <span className="text-blue-800 font-semibold text-lg">
              3 sample making reduce <span className="text-pink-500">$50</span>
            </span>
          </div>
          
          {/* Free items section */}
          <div className="flex items-start gap-3 mt-4">
            <Star className="w-6 h-6 text-pink-400 fill-pink-400 mt-1" />
            <div>
              <div className="text-pink-500 font-bold text-xl mb-2">
                Free Neck, Tag and bag
              </div>
              <div className="text-blue-800 font-medium text-sm space-y-1">
                <div>Order total more than $2,000, free neck label provide</div>
                <div>Order total more than $3,000, free tag provide</div>
                <div>Order total more than $5,000, free bag provide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarchActivityBanner;