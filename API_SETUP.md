# API Setup Guide for Pinterest-Inspired Fashion Service

## Overview
Your personal shopping service now automatically fetches Pinterest-inspired fashion products from:
- **AliExpress**: Via official AliExpress API with aesthetic search enhancement
- **Jumia**: Via web scraping with aesthetic search enhancement

## Smart Aesthetic Search System

### How It Works
The system automatically enhances search queries to return Pinterest-inspired fashion:

- **"jeans"** → searches for "vintage jeans", "mom jeans", "straight leg jeans", "distressed jeans"
- **"dress"** → searches for "cottagecore dress", "vintage dress", "minimalist dress", "Y2K dress"
- **"shirt"** → searches for "oversized shirt", "crop top", "vintage tee", "graphic tee"

### Aesthetic Categories Supported
- **Y2K**: Vintage-inspired fashion from the 2000s
- **Cottagecore**: Romantic, nature-inspired aesthetic
- **Streetwear**: Urban, trendy fashion
- **Minimalist**: Clean, simple aesthetic
- **Vintage**: Retro-inspired clothing

## AliExpress API Setup

### 1. Get AliExpress API Credentials
1. Go to [AliExpress Developer Portal](https://developers.aliexpress.com/)
2. Create a developer account
3. Create a new application
4. Get your API credentials:
   - App Key
   - App Secret
   - Access Token

### 2. Configure Environment Variables
Create a `.env` file in your project root and add:

```env
# AliExpress API Configuration
VITE_ALIEXPRESS_APP_KEY=your_aliexpress_app_key_here
VITE_ALIEXPRESS_APP_SECRET=your_aliexpress_app_secret_here
VITE_ALIEXPRESS_ACCESS_TOKEN=your_aliexpress_access_token_here
```

## Jumia Web Scraping Setup

### 1. Get ScrapingBee API Key (Optional)
For reliable web scraping, you can use ScrapingBee:
1. Go to [ScrapingBee](https://www.scrapingbee.com/)
2. Create a free account
3. Get your API key

### 2. Add ScrapingBee Key (Optional)
Add to your `.env` file:
```env
# ScrapingBee Configuration (optional)
VITE_SCRAPINGBEE_API_KEY=your_scrapingbee_api_key_here
```

**Note**: If you don't have ScrapingBee, the system will fall back to mock data for Jumia.

### 3. API Features Available
- **Smart Search**: Automatically enhances search terms for better aesthetic results
- **Product Search**: Search products by keywords, category, price range
- **Product Details**: Get detailed product information
- **Automatic Markup**: 15% markup applied automatically

## How the System Works

### 1. Customer Search Flow
1. Customer searches for "jeans" on your site
2. System automatically enhances to "vintage jeans" or "mom jeans"
3. Enhanced query sent to AliExpress API and Jumia via web scraping
4. Results filtered and displayed with 15% markup
5. All products align with Pinterest-inspired aesthetic

### 2. Product Data Structure
All products are unified into this format:
```javascript
{
  title: "Vintage Mom Jeans - High Waisted Distressed Denim",
  description: "Trendy Y2K inspired mom jeans with vintage wash",
  originalPrice: 2500, // Original price from platform
  finalPrice: 2875,    // Price with 15% markup
  platform: "aliexpress" | "jumia",
  platformUrl: "https://...", // Direct link for your purchasing
  images: ["image1.jpg", "image2.jpg"],
  category: "fashion",
  availability: true,
  rating: 4.5,
  reviewCount: 128
}
```

## Testing the System

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Product Search
1. Go to `/products`
2. Search for common terms like "jeans", "dress", "shirt"
3. Notice how results are automatically enhanced for aesthetic appeal
4. Products will have Pinterest-inspired titles and descriptions

### 3. Test Aesthetic Enhancement
- Search "jeans" → see "vintage jeans", "mom jeans" results
- Search "dress" → see "cottagecore dress", "vintage dress" results
- Search "shirt" → see "oversized shirt", "crop top" results

## Important Notes

### 1. API Rate Limits
- AliExpress API has rate limits based on your plan
- ScrapingBee has rate limits (1000 requests/month free)
- Consider upgrading for production use

### 2. Fallback System
- If AliExpress API fails, system falls back to mock data
- If Jumia scraping fails, system falls back to mock data
- Mock data includes Pinterest-inspired fashion items
- No interruption to user experience

### 3. Your Purchasing Workflow
1. Customer places order on your site
2. You see order in admin dashboard
3. Click the `platformUrl` to go directly to AliExpress/Jumia
4. Purchase the item manually
5. Update order status in your system

## Next Steps

1. **Get AliExpress API credentials** and add to `.env`
2. **Optionally get ScrapingBee key** for Jumia scraping
3. **Test the aesthetic search** with real API calls
4. **Monitor search results** to ensure Pinterest aesthetic quality
5. **Fine-tune search terms** if needed for better results
6. **Add more platforms** (eBay, Etsy, etc.) as needed

## Troubleshooting

### Common Issues:
1. **AliExpress API Errors**: Check your API credentials in `.env`
2. **Jumia Scraping Errors**: System will fall back to mock data
3. **No Products Found**: Check API limits or scraping restrictions
4. **Generic Results**: The aesthetic enhancement should help, but some manual curation may be needed
5. **Slow Loading**: Implement caching for better performance

### Support:
- Check AliExpress API documentation for specific errors
- Monitor browser console for detailed error messages
- Test with simple searches first before complex queries

## Aesthetic Quality Assurance

### What to Expect:
- **High-quality results**: Most products should have Pinterest-inspired aesthetics
- **Trendy items**: Y2K, cottagecore, streetwear, minimalist styles
- **Affordable prices**: Gen Z-friendly pricing with 15% markup

### If Results Are Too Generic:
- The system will fall back to curated mock data
- Manual curation layer can be added if needed
- Search terms can be further enhanced 