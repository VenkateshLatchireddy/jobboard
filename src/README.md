# 🚀 Cygnus Job Board

A production-ready job listing application built with React and TailwindCSS.

![Job Board Preview](https://via.placeholder.com/1200x630/4f46e5/ffffff?text=Cygnus+Job+Board)

## ✨ Features

### Core Requirements ✅
- **Job Cards** - Display title, company, location, type, salary, requirements
- **Location Filter** - Filter by Remote, On-site, Hybrid
- **Job Type Filter** - Toggle between Internship and Full-time
- **Search Functionality** - Real-time search with debouncing
- **Responsive Design** - Mobile-first, works on all devices

### Bonus Features ⭐
- **Alphabetical Sorting** - A-Z toggle with custom switch
- **Keyword Highlighting** - Yellow highlight for searched terms
- **Active Filter Tags** - Click to remove individual filters
- **Empty State** - Beautiful no-results UI with animations
- **Save Jobs** - Bookmark functionality
- **New Job Badges** - Highlight recently posted jobs
- **Real-time Stats** - Live job count updates
- **Advanced Search** - Search by title, company, and skills

## 🛠️ Tech Stack

- **React 18** - UI Library with Hooks
- **TailwindCSS 3** - Styling with custom animations
- **Vite** - Next-gen build tool
- **Modern JavaScript** - ES6+ features

## 📁 Project Structure







src/
├── components/
│ ├── JobCard.jsx # Individual job card with highlight
│ ├── Filters.jsx # Location and type filters
│ ├── SearchBar.jsx # Debounced search input
│ └── EmptyState.jsx # No results display
├── data/
│ └── jobs.js # 12+ mock jobs with diverse data
├── App.jsx # Main logic with useMemo optimization
├── main.jsx # Entry point
└── index.css # Tailwind styles   




## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview  





🔍 Key Implementation Details 


State Management  


const [searchTerm, setSearchTerm] = useState('');
const [locationFilter, setLocationFilter] = useState('All');
const [typeFilter, setTypeFilter] = useState('All');
const [sortAlphabetical, setSortAlphabetical] = useState(false);  



Filtering Logic
Memoized computations with useMemo for performance

Combined filters (search + location + type + sort)

Case-insensitive search with regex

Debounced input (300ms delay)

Multi-field search (title, company, requirements)



Responsive Design
Mobile: Single column (320px+)

Tablet: 2 columns (768px+)

Desktop: 3 columns (1024px+)

Fluid typography and spacing 



📱 Live Demo
View Live Demo 



🎥 Screen Recording
Watch Demo Video 



📄 License
MIT - Free for learning and assignment purposes.  




Built with ❤️ for Cygnus Frontend Intern Assignment 




---

# **✅ FINAL SETUP COMMANDS**

```powershell

# 1. Create fresh project
npm create vite@latest jobboard -- --template react
cd jobboard

# 2. Install Tailwind CSS v3
npm install -D tailwindcss@3.3.3 postcss@8.4.27 autoprefixer@10.4.14
npx tailwindcss init -p

# 3. Install other dependencies
npm install

# 4. NOW COPY ALL THE FILES ABOVE INTO THEIR RESPECTIVE LOCATIONS

# 5. Run the project
npm run dev