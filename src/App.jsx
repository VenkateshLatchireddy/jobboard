import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { jobs, locations, types } from './data/jobs';
import JobCard from './components/JobCard';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import EmptyState from './components/EmptyState';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortAlphabetical, setSortAlphabetical] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredJobs = useMemo(() => {
    let filtered = jobs.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = locationFilter === 'All' || 
        job.location === locationFilter;
      
      const matchesType = typeFilter === 'All' || 
        job.type === typeFilter;
      
      return matchesSearch && matchesLocation && matchesType;
    });

    if (sortAlphabetical) {
      filtered = [...filtered].sort((a, b) => 
        a.title.localeCompare(b.title)
      );
    }

    return filtered;
  }, [searchTerm, locationFilter, typeFilter, sortAlphabetical]);

  const handleReset = useCallback(() => {
    setSearchTerm('');
    setLocationFilter('All');
    setTypeFilter('All');
    setSortAlphabetical(false);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 
                    transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* ===== STUNNING NAVBAR ===== */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-white/20 shadow-lg">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-primary-500/5 to-primary-600/10 
                      animate-gradient-x"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo & Brand - Enhanced */}
            <div className="flex items-center gap-3 group">
              {/* Animated Logo Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 
                              rounded-xl blur-lg opacity-70 group-hover:opacity-100 
                              transition-opacity duration-500 animate-pulse-slow"></div>
                <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 
                              rounded-xl p-2.5 shadow-xl transform group-hover:scale-110 
                              group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              {/* Brand Text with Gradient */}
              <div className="flex flex-col">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 
                             bg-clip-text text-transparent tracking-tight">
                  Cygnus Jobs
                </h1>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Find your next opportunity
                </p>
              </div>
            </div>

            {/* Right Side - Stats & Actions */}
            <div className="flex items-center gap-4">
              {/* Job Stats Badge */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 
                            bg-gradient-to-r from-primary-50 to-primary-100/50 
                            rounded-xl border border-primary-200/50 shadow-sm">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 
                                rounded-full border-2 border-white flex items-center justify-center text-xs text-white">
                    🏢
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 
                                rounded-full border-2 border-white flex items-center justify-center text-xs text-white">
                    💼
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 
                                rounded-full border-2 border-white flex items-center justify-center text-xs text-white">
                    🌍
                  </div>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-800">{jobs.length}+</span>
                  <span className="text-xs text-gray-600 ml-1">live jobs</span>
                </div>
              </div>

              {/* Notification/Profile Icons */}
              <div className="flex items-center gap-2">
                <button className="relative p-2 text-gray-600 hover:text-primary-600 
                                 rounded-lg hover:bg-primary-50 transition-all duration-300
                                 group">
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 
                                 rounded-full border-2 border-white text-[10px] 
                                 flex items-center justify-center text-white font-bold">
                    3
                  </span>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 
                              rounded-lg flex items-center justify-center text-white 
                              font-semibold text-sm shadow-md cursor-pointer
                              hover:scale-110 hover:shadow-xl transition-all duration-300
                              border-2 border-white">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Search & Filters... (keep your existing compact code) */}
        <div className="mb-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider 
                             flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Quick Search
              </span>
            </div>
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm}
            />
          </div>
        </div>

        <Filters
          locations={locations}
          types={types}
          selectedLocation={locationFilter}
          selectedType={typeFilter}
          onLocationChange={setLocationFilter}
          onTypeChange={setTypeFilter}
          sortAlphabetical={sortAlphabetical}
          onSortChange={setSortAlphabetical}
          totalJobs={jobs.length}
          filteredCount={filteredJobs.length}
        />

        {/* Active Filters... */}
        {(locationFilter !== 'All' || typeFilter !== 'All' || searchTerm) && (
          <div className="flex flex-wrap items-center gap-2 mb-4 p-3 
                        bg-white/80 backdrop-blur-sm rounded-lg 
                        border border-primary-100 shadow-sm">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></span>
              Active:
            </span>
            
            {locationFilter !== 'All' && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md 
                             bg-gradient-to-r from-primary-50 to-primary-100 
                             text-primary-700 text-xs font-medium border border-primary-200
                             shadow-sm">
                📍 {locationFilter}
                <button 
                  onClick={() => setLocationFilter('All')}
                  className="ml-1.5 hover:bg-primary-200 rounded p-0.5 
                           transition-colors duration-200"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            
            {typeFilter !== 'All' && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md 
                             bg-gradient-to-r from-primary-50 to-primary-100 
                             text-primary-700 text-xs font-medium border border-primary-200
                             shadow-sm">
                💼 {typeFilter}
                <button 
                  onClick={() => setTypeFilter('All')}
                  className="ml-1.5 hover:bg-primary-200 rounded p-0.5 
                           transition-colors duration-200"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            
            {searchTerm && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md 
                             bg-gradient-to-r from-primary-50 to-primary-100 
                             text-primary-700 text-xs font-medium border border-primary-200
                             shadow-sm">
                🔍 "{searchTerm}"
                <button 
                  onClick={() => setSearchTerm('')}
                  className="ml-1.5 hover:bg-primary-200 rounded p-0.5 
                           transition-colors duration-200"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            
            <button
              onClick={handleReset}
              className="ml-auto text-xs text-gray-400 hover:text-primary-600 
                       transition-colors underline underline-offset-2
                       hover:no-underline font-medium"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'}
            </h2>
            <span className="text-xs px-2 py-1 bg-primary-50 text-primary-700 
                           rounded-full font-medium">
              {filteredJobs.length === 0 ? 'Try adjusting filters' : 'Ready to apply'}
            </span>
          </div>
          
          {filteredJobs.length > 0 && (
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Updated today
            </span>
          )}
        </div>

        {/* Job Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} searchTerm={searchTerm} />
            ))}
          </div>
        ) : (
          <EmptyState
            searchTerm={searchTerm}
            location={locationFilter}
            type={typeFilter}
            onReset={handleReset}
          />
        )}
      </main>

      {/* ===== STUNNING FOOTER ===== */}
      <footer className="relative mt-16 overflow-hidden">
        {/* Animated wave background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute bottom-0 left-0 w-full h-auto" 
                 viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="white" fillOpacity="1" 
                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
        </div>

        {/* Footer Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 
                              rounded-xl p-2 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Cygnus</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Connecting talented professionals with amazing companies worldwide. 
                Your dream career starts here.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  {jobs.length} active jobs
                </span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">24/7 support</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary-500 rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {['About Us', 'How it Works', 'Success Stories', 'Pricing'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm 
                                         transition-colors duration-200 flex items-center gap-2
                                         group">
                      <span className="w-1 h-1 bg-gray-500 rounded-full 
                                     group-hover:bg-primary-500 group-hover:w-2 
                                     transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary-500 rounded-full"></span>
                Resources
              </h3>
              <ul className="space-y-2">
                {['Blog', 'Career Advice', 'Salary Guide', 'Interview Tips'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm 
                                         transition-colors duration-200 flex items-center gap-2
                                         group">
                      <span className="w-1 h-1 bg-gray-500 rounded-full 
                                     group-hover:bg-primary-500 group-hover:w-2 
                                     transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary-500 rounded-full"></span>
                Connect
              </h3>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 mb-6">
                {[
                  { icon: 'M8 2H1l8.5 11.5L1.5 22h2l6.5-7 6.5 7h6L13 12l7.5-10h-2L12 9 8 2z', label: 'Twitter' },
                  { icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z', label: 'Facebook' },
                  { icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.141-.828 3.33-.236.996.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.78.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.624.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z', label: 'GitHub' },
                ].map((social) => (
                  <a key={social.label} href="#" 
                     className="w-10 h-10 bg-gray-800 hover:bg-primary-600 
                              rounded-lg flex items-center justify-center
                              transition-all duration-300 hover:scale-110 
                              hover:shadow-xl group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white 
                                  transition-colors duration-300" 
                         fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@cygnus.jobs
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 81422 44668
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative py-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-900 text-gray-400 text-xs 
                           rounded-full py-1 border border-gray-800">
                🚀 Built for the future of work
              </span>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 order-2 md:order-1">
              © 2026 Cygnus Job Board. All rights reserved. 
              <span className="mx-2">•</span>
              Made with ❤️ for developers
            </p>
            <div className="flex items-center gap-6 order-1 md:order-2">
              <a href="#" className="text-xs text-gray-500 hover:text-white 
                                    transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white 
                                    transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white 
                                    transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;