# 🚀 Cygnus Job Board

job listing application built with React and TailwindCSS.

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

```bash
cygnus-job-board/
├── public/
├── src/
│   ├── components/
│   │   ├── JobCard.jsx      # Individual job card with ₹ salary
│   │   ├── Filters.jsx      # Compact filter buttons
│   │   ├── SearchBar.jsx    # 40px height, debounced search
│   │   └── EmptyState.jsx   # No results UI
│   ├── data/
│   │   └── jobs.js          # 12+ jobs with Indian salaries
│   ├── App.jsx              # Main application logic
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind styles
├── tailwind.config.js      # Custom animations & colors
├── postcss.config.js       # Tailwind plugins
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies
└── README.md              # Documentation 

```


## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/VenkateshLatchireddy/jobboard.git

# Enter project directory
cd jobboard

# Install dependencies
npm install

# Start the app
npm run dev

```
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


📄 License

MIT - Free for learning and assignment purposes.  

Built with ❤️ for Cygnus Frontend Intern Assignment 




