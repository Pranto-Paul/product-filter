# Product Filter Application

A modern, responsive product filtering application built with React and Tailwind CSS. This application allows users to filter products based on various criteria such as category, price range, color, and brand.

## Features

- 🔍 Real-time search functionality
- 🏷️ Multiple filter options:
  - Category filter (Sneakers, Flats, Sandals, Heels)
  - Price range filter (dynamically calculated based on product prices)
  - Color filter with visual color indicators
  - Brand filter (Nike, Adidas, Puma, Vans)
- 🎨 Modern UI with:
  - Glass-effect navigation bar
  - Fixed sidebar with scrollable filters
  - Responsive product grid
  - Interactive product cards
- ⚡ Real-time filtering with multiple criteria
- 🎯 Context API for state management

## Technologies Used

- React.js
- Tailwind CSS
- React Icons
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/product-filter.git
```

2. Navigate to the project directory:

```bash
cd product-filter
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Card.jsx        # Product card component
│   └── Input.jsx       # Reusable radio input component
├── sidebar/
│   ├── Category.jsx    # Category filter component
│   ├── Colors.jsx      # Color filter component
│   └── Price.jsx       # Price filter component
├── recomended/
│   └── Recomendec.jsx  # Brand filter component
├── store/
│   └── index.jsx       # Context and state management
├── hook/
│   └── index.js        # Custom hook for data processing
└── db/
    └── data.js         # Product data
```

## Features in Detail

### Product Cards

- Product image
- Title and company name
- Rating stars
- Review count
- Price information (original and discounted)
- Add to cart/wishlist button

### Filtering System

- Category filter: Filter products by their category
- Price filter: Filter products within specific price ranges
- Color filter: Filter products by color with visual indicators
- Brand filter: Filter products by manufacturer
- Search: Search products by title

### Responsive Design

- Mobile-friendly layout
- Scrollable sidebar
- Responsive product grid
- Adaptive spacing and typography

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Product images and data are for demonstration purposes only
- Icons provided by React Icons
- Styling powered by Tailwind CSS
