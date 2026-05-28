# ECommerceWebApplication

A React e-commerce demo built with Vite, Redux Toolkit, and Material UI.

## Overview

<<<<<<< HEAD
This project demonstrates a frontend e-commerce experience with an inventory view and a shopping cart view. Product data is fetched from an external API, and cart state is managed centrally in Redux.

## Features

- Inventory page with product listings
- Add items to cart
- Cart page with quantity controls and remove item support
- Navigation state to switch between inventory and cart views
- Data fetching from the Fake Store API
- UI built with Material UI and Emotion styling
=======
This project showcases a simple e-commerce frontend with product browsing, cart management, and state handling using Redux Toolkit.

## Features

- Product listing and details
- Add/remove products from cart
- Global state management with Redux Toolkit
- User interface built using Material UI (MUI)
- Fast development experience with Vite
>>>>>>> 0de507cfdcd535a124fba89ce0a30fc9edcec7a0

## Tech Stack

- React 19
- Vite
- Redux Toolkit
- React Redux
- Material UI (MUI)
- Emotion styling

## Installation

Install project dependencies:

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Open the displayed URL in your browser (usually `http://localhost:5173`).

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/` - application source code
- `src/Components/` - reusable UI components and page layout
- `src/Components/HomePage/` - inventory page layout and sections
- `src/Components/Shopping/` - shopping cart page components
- `src/Redux/` - Redux slices and store configuration
- `src/App.jsx` - root app component with view switching
- `src/main.jsx` - React entry point and Redux provider

## Redux State

- `src/Redux/NavigationSlice.jsx` - manages current view (`Inventory` or `Cart`)
- `src/Redux/ProductsStore.jsx` - manages product data, loading state, cart items, and cart actions
- `src/Redux/Store.js` - configures the Redux store
 
