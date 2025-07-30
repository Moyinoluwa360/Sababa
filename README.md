# Sababa - Fashion E-commerce Platform

A modern React/Redux e-commerce application focused on clothing and accessories, integrated with AliExpress API for real product data.

## 🚀 Features

- **Real Product Data**: Integrated with AliExpress API via RapidAPI
- **Product Filtering**: Automatic filtering for clothing and accessories only
- **Shopping Cart**: Redux-powered cart with Firestore sync
- **Wishlist**: Save and manage favorite products
- **User Authentication**: Firebase authentication
- **Responsive Design**: Mobile-first approach
- **Product Details**: Comprehensive product pages with image galleries

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Sababa
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# RapidAPI Configuration (Required for AliExpress integration)
VITE_RAPIDAPI_KEY=your_rapidapi_key_here

# Firebase Configuration (if not already configured)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### 4. Get RapidAPI Key

1. Go to [RapidAPI](https://rapidapi.com/)
2. Sign up/Login to your account
3. Search for "AliExpress Data Hub" API
4. Subscribe to the API (free tier available)
5. Copy your API key
6. Add it to your `.env` file as `VITE_RAPIDAPI_KEY`

### 5. Run the Application
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 🏗️ Architecture

### API Integration
- **Service Layer**: `src/services/apiService.js` - Centralized API management
- **Configuration**: `src/config/apiConfig.js` - API settings and product filtering
- **Redux Integration**: `src/redux/slices/productSlice.js` - State management for products

### Product Filtering
The application automatically filters products to show only clothing and accessories:
- **Categories**: Apparel, Shoes, Bags, Jewelry, etc.
- **Keywords**: dress, shirt, pants, shoes, bag, etc.
- **Exclusions**: Electronics, gadgets, appliances, etc.

### Scalable Design
The API service is designed to easily integrate additional e-commerce platforms:
- Amazon API
- Etsy API
- Shopify API
- Custom APIs

## 📱 Usage

1. **Browse Products**: Navigate through clothing and accessories
2. **Search**: Use the search functionality to find specific items
3. **Product Details**: Click on any product to view detailed information
4. **Add to Cart**: Select size, quantity, and add to shopping bag
5. **Wishlist**: Save products for later viewing
6. **Checkout**: Complete your purchase

## 🔧 Development

### Adding New APIs
To add a new e-commerce platform:

1. Update `src/config/apiConfig.js` with new API settings
2. Add new methods in `src/services/apiService.js`
3. Update the Redux slice to handle new platform data
4. Test the integration

### Product Filtering
To modify product filtering rules:

1. Edit `CLOTHING_CATEGORIES` and `CLOTHING_KEYWORDS` in `src/config/apiConfig.js`
2. Update the `filterClothingProducts` function as needed
3. Test with different search queries

## 🚀 Deployment

The application is ready for deployment on platforms like:
- Vercel
- Netlify
- Firebase Hosting
- AWS Amplify

Make sure to set up environment variables in your deployment platform.

## 📄 License

This project is licensed under the MIT License.
