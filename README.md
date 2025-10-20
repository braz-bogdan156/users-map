📖 Users Map
An interactive interface for discovering users by geolocation and interests. Built with React + TypeScript, using Leaflet.js for maps and marker clustering.

🛠 Tech Stack
⚛️ React 18 + TypeScript – UI and type safety

🗺 Leaflet + React‑Leaflet – map integration

🔗 react-leaflet-cluster – marker clustering

🎨 CSS Modules – component styling

⚡ Vite – fast dev server and build tool

✅ ESLint + TypeScript‑ESLint – static code analysis

⚙️ Setup & Run
Clone the repository:

git clone https://github.com/braz-bogdan156/users-map
cd users-map
Install dependencies:

npm install
Run the development server:

npm run dev
The app will be available at: 👉 http://localhost:5173

Build for production:

npm run build
Preview the production build:

npm run preview
📌 Features
🔹 Core Requirements
Display 10,000 users on the map as markers

Marker clustering when zoomed out

User pop‑up card with name and interests on marker click

Interest filtering via search input

Smooth zoom into clusters on click

🔹 Optional Enhancements
Debounced search for fast filtering

Statistics bar showing filtered vs visible users

Custom styles for clusters and markers

📂 Project Structure

users-map/

├── src/
│ ├── components/
│ ├── hooks/  
│ ├── utils/  
│ ├── types/  
│ ├── App.tsx  
│ └── main.tsx  
├── public/  
├── package.json
├── tsconfig.json
└── vite.config.ts

🚀 Deployment
Production frontend deployed on Vercel: users-map-seven.vercel.app

✅ Evaluation Criteria
Functionality: all requirements implemented

Code Quality: clean and structured architecture

Best Practices: modern libraries and patterns

User Experience: smooth map interaction and fast filtering

Scalability: easy to extend with new features (multi‑tag filtering, user profiles, etc.)
