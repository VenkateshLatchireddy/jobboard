import React from 'react';

const Filters = ({ 
  locations, 
  types, 
  selectedLocation, 
  selectedType, 
  onLocationChange, 
  onTypeChange,
  sortAlphabetical,
  onSortChange,
  totalJobs,
  filteredCount
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
      {/* Header - Minimal */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-gray-700">Filters</h2>
          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
            {filteredCount}/{totalJobs}
          </span>
        </div>
        
        <button
          onClick={() => {
            onLocationChange('All');
            onTypeChange('All');
            onSortChange(false);
          }}
          className="text-xs text-gray-500 hover:text-primary-600 transition-colors 
                   flex items-center gap-1 px-2 py-1 hover:bg-gray-50 rounded"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset
        </button>
      </div>

      {/* Filter Rows - Compact */}
      <div className="space-y-3">
        {/* Location & Type - Side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Location */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-1">
              <span>📍</span> Location
            </label>
            <div className="flex flex-wrap gap-1.5">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => onLocationChange(location)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                    ${selectedLocation === location
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-transparent'
                    }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-1">
              <span>💼</span> Job Type
            </label>
            <div className="flex flex-wrap gap-1.5">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => onTypeChange(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                    ${selectedType === type
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-transparent'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sort Option - Minimal */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sortAlphabetical}
              onChange={(e) => onSortChange(e.target.checked)}
              className="w-3.5 h-3.5 text-primary-600 border-gray-300 rounded 
                       focus:ring-1 focus:ring-primary-500"
            />
            <span className="text-xs text-gray-600 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Sort A-Z
            </span>
          </label>
          
          <span className="text-[10px] text-gray-400">
            Click tags to filter
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Filters);