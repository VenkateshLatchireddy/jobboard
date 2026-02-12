import React, { useMemo, useState } from 'react';

const JobCard = ({ job, searchTerm }) => {
  const [isSaved, setIsSaved] = useState(false);
  
  const highlightedTitle = useMemo(() => {
    if (!searchTerm) return job.title;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = job.title.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? 
        <mark key={index} className="bg-yellow-100 text-yellow-900 px-0.5 rounded">
          {part}
        </mark> : 
        part
    );
  }, [job.title, searchTerm]);

  // Format salary based on type
  const formattedSalary = job.salary;

  return (
    <article className="bg-white rounded-xl border border-gray-200 hover:border-primary-300 
                     hover:shadow-lg transition-all duration-200 p-4 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 bg-gradient-to-br ${job.color} rounded-lg 
                          flex items-center justify-center text-lg shadow-sm`}>
            {job.logo}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
              {highlightedTitle}
            </h3>
            <p className="text-xs text-gray-600 flex items-center">
              {job.company}
            </p>
          </div>
        </div>
        <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
          {job.postedAt}
        </span>
      </div>

      {/* Details - Compact */}
      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {job.location}
          </span>
          <span className="flex items-center text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formattedSalary}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className={`text-[10px] px-2 py-1 rounded-full font-medium ${
            job.type === 'Full-time' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-purple-100 text-purple-700'
          }`}>
            {job.type}
          </span>
          <span className="text-[10px] text-gray-500 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {job.applicants}
          </span>
        </div>

        <p className="text-xs text-gray-600 line-clamp-2">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {job.requirements.slice(0, 2).map((req, i) => (
            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
              {req}
            </span>
          ))}
          {job.requirements.length > 2 && (
            <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">
              +{job.requirements.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
        <button className="px-3 py-1.5 bg-primary-600 text-white rounded-lg 
                         text-xs font-medium hover:bg-primary-700 transition-colors
                         shadow-sm hover:shadow flex items-center gap-1">
          Apply Now
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className={`p-1.5 rounded-lg transition-colors ${
            isSaved ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <svg className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} 
               stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* New Badge */}
      {job.postedAt.includes('hour') && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] 
                       px-1.5 py-0.5 rounded-full animate-pulse">
          NEW
        </span>
      )}
    </article>
  );
};

export default React.memo(JobCard);