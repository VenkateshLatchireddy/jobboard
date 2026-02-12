import React from 'react';

const EmptyState = ({ searchTerm, location, type, onReset }) => {
  return (
    <div className="text-center py-12 px-4">
      <div className="max-w-sm mx-auto">
        <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full 
                      flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          No jobs found
        </h3>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
          <p className="text-gray-600 mb-2 text-xs">Try adjusting your filters:</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {searchTerm && (
              <span className="px-2 py-1 bg-white rounded-md text-primary-600 text-xs border border-primary-200">
                "{searchTerm}"
              </span>
            )}
            {location !== 'All' && (
              <span className="px-2 py-1 bg-white rounded-md text-primary-600 text-xs border border-primary-200">
                {location}
              </span>
            )}
            {type !== 'All' && (
              <span className="px-2 py-1 bg-white rounded-md text-primary-600 text-xs border border-primary-200">
                {type}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={onReset}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg 
                   text-sm font-medium hover:bg-primary-700 
                   transition-colors shadow-sm hover:shadow"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default EmptyState;