# ECommerceWebApplication

A small React e‑commerce demo built with Vite, Redux Toolkit, and Material UI.

## Overview

This project demonstrates a simple frontend e‑commerce experience: product browsing, cart management, and client-side state handled with Redux Toolkit. Product data is fetched from an API and the UI is implemented using MUI components and Emotion for styling.

## Features

- Product listing with images, titles, prices
- Add / remove items to/from cart
- Adjust item quantities in cart
- Persistent cart state (in Redux store during session)
- Data fetched from a remote API (e.g., Fake Store API)
- Responsive UI built with Material UI (MUI)

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux
- Material UI (MUI)
- Emotion (styling)

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app in your browser (usually `http://localhost:5173`).

## Build & Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available NPM Scripts

- `dev` — start Vite dev server
- `build` — create production build
- `preview` — serve the production build locally
- `lint` — run linters (if configured)

Check `package.json` for the exact script names used in this project.

## Project Structure (important files)

- `src/` — application source
- `src/Components/` — UI components and pages
- `src/Redux/` — Redux slices and store configuration
- `src/App.jsx` — root application component
- `src/main.jsx` — application entry (React + Redux provider)

## Notes

- If the app fetches data from an external API (Fake Store API), ensure you have network access.
- Styling and component organization follow a simple pattern to keep examples clear and educational.

## Contributing

Contributions and improvements are welcome. Create an issue or submit a pull request.

## License

This project is provided for educational/demo purposes. Add a license as needed.

## Contact

For questions or feedback, open an issue in the repository.

- `src/Components/Shopping/` - shopping cart page components
- `src/Redux/` - Redux slices and store configuration
- `src/App.jsx` - root app component with view switching
- `src/main.jsx` - React entry point and Redux provider

## Redux State

- `src/Redux/NavigationSlice.jsx` - manages current view (`Inventory` or `Cart`)
- `src/Redux/ProductsStore.jsx` - manages product data, loading state, cart items, and cart actions
- `src/Redux/Store.js` - configures the Redux store
 
