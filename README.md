# CineExplorer

A modern, responsive movie exploration web application built with React and Vite. Browse popular, top-rated, upcoming, and now-playing movies with an intuitive interface featuring dark mode support, search functionality, and personalized watchlist and favorites management.

## Features

- **Movie Browsing**: Explore movies across multiple categories (Popular, Top Rated, Upcoming, Now Playing)
- **Search Functionality**: Real-time movie search with keyword queries
- **Movie Details**: View comprehensive movie information including:
  - Poster and backdrop images
  - Ratings and vote counts
  - Runtime and release date
  - Overview and tagline
  - Cast information
  - Trailers (YouTube embeds)
  - Similar movie recommendations
- **Dark Mode**: Toggle between light and dark themes with persistent storage
- **Watchlist Management**: Add/remove movies from your personal watchlist
- **Favorites**: Mark movies as favorites with heart icon
- **Pagination**: Navigate through multiple pages of movie results
- **Responsive Design**: Fully responsive grid layout that adapts to different screen sizes
- **Local Storage**: Persistent data storage for watchlist, favorites, and theme preferences

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **State Management**: Context API with useReducer
- **UI Components**: Material-UI (Tooltip)
- **Icons**: Lucide React
- **Styling**: CSS Modules
- **API**: The Movie Database (TMDb) API

## Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Toggle.jsx
│   │   └── CategoryTabs.jsx
│   ├── MoviesGrid/
│   │   ├── MoviesGrid.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Pagination.jsx
│   │   ├── Loader.jsx
│   │   └── Error.jsx
│   └── movieModal/
│       ├── MovieModal.jsx
│       ├── DetailsContainer.jsx
│       ├── BackDrop.jsx
│       ├── CloseButton.jsx
│       ├── Overview.jsx
│       ├── Cast.jsx
│       ├── Trailer.jsx
│       ├── SimilarMovies.jsx
│       └── Button.jsx
├── Contexts/
│   └── MovieContext.jsx
├── Services/
│   └── movieService.js
├── styles/
│   └── [module CSS files]
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cineExplorer
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables by creating a `.env` file:
```
VITE_API_KEY=your_tmdb_api_key
VITE_API_BASE=https://api.themoviedb.org/3
VITE_IMG_BASE=https://image.tmdb.org/t/p
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm preview
```

## Key Components

### Header
- Logo with gradient text
- Search bar with keyboard navigation (Enter key focus)
- Dark mode toggle with animated icons
- Category tabs for filtering movies

### Movies Grid
- Responsive grid layout (2-5 columns based on screen size)
- Movie cards with hover effects and overlay information
- Loading states and error handling
- Pagination controls

### Movie Modal
- Full-screen modal with backdrop
- Movie details including poster, title, ratings, and genres
- Watch trailer (YouTube embed)
- Cast information grid
- Similar movies carousel
- Watchlist and favorites buttons

### Search and Filtering
- Real-time search query handling
- Category-based filtering
- Page-based pagination
- State management with automatic API calls

## State Management

The application uses React Context API with `useReducer` for centralized state management. Key state properties:

- `movies`: Array of movies currently displayed
- `selectedMovie`: Currently selected movie for modal display
- `category`: Active movie category
- `searchQuery`: Current search query
- `currentPage`: Pagination page number
- `darkMode`: Theme preference
- `watchlist`: User's watchlist movies
- `favourite`: User's favorite movies
- `cast`: Cast members of selected movie
- `trailers`: Trailers for selected movie
- `similarMovies`: Similar movies for selected movie
- `status`: Loading/error/ready status

## API Integration

The application integrates with The Movie Database (TMDb) API for:
- Movie lists (popular, top-rated, upcoming, now-playing)
- Movie search
- Movie details
- Cast information
- Trailers and videos
- Similar movies

## Styling

The application uses CSS Modules for component-scoped styling with:
- Tailwind-inspired utility classes
- CSS custom properties for theming
- Responsive design with media queries
- Smooth transitions and animations
- Dark mode support throughout

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Performance Features

- Code splitting with Vite
- Lazy loading for images
- AbortController for request cancellation
- Debounced search queries
- Optimized re-renders with React Context

## Future Enhancements

- User authentication
- Advanced filtering options
- Movie reviews and ratings
- Recommendation algorithm
- Social sharing features
- Watch party functionality

## License

This project is open source and available under the MIT License.
