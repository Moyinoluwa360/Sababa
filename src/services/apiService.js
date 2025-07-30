import { API_CONFIG, filterClothingProducts } from '../config/apiConfig';
// import AliExpressAffiliateService from './aliexpressAffiliateService';

// Standardize product data format across different APIs
const standardizeProduct = (product, source = 'aliexpress') => {
  return {
    id: product.product_id || product.id || `aliexpress_${product.product_id}`,
    title: product.product_title || product.title || '',
    originalPrice: parseFloat(product.product_price || product.price || 0),
    finalPrice: parseFloat(product.product_price || product.price || 0),
    currency: product.currency || 'USD',
    platform: 'AliExpress',
    platformUrl: product.product_url || product.url || '',
    images: product.product_photos || product.images || [],
    brand: product.store_name || product.brand || 'AliExpress',
    rating: product.evaluate_rate || product.rating || null,
    reviewCount: product.evaluate_rate || product.reviewCount || null,
    category: product.category || '',
    description: product.product_description || product.description || '',
    store: product.store_name || 'AliExpress',
    source: source,
    // Additional AliExpress specific fields
    shipping: product.shipping || null,
    discount: product.discount || null,
    sales: product.sales || null
  };
};

// API Service Class
class EcommerceAPIService {
  constructor() {
    this.config = API_CONFIG;
    // this.affiliateService = new AliExpressAffiliateService();
  }

  // Search products from AliExpress (Primary: Affiliate API, Fallback: RapidAPI)
  async searchAliExpressProducts(query, options = {}) {
    try {
      console.log('🔍 Searching AliExpress products:', { query, options });
      
      // First try AliExpress Affiliate API
      if (this.config.ALIEXPRESS_AFFILIATE.appKey) {
        console.log('🎯 Using AliExpress Affiliate API');
        // return await this.affiliateService.searchProducts(query, options);
        console.log('⚠️ Affiliate service temporarily disabled');
      }
      
      // Fallback to RapidAPI
      console.log('🔄 Falling back to RapidAPI');
      return await this.searchAliExpressProductsRapidAPI(query, options);
      
    } catch (error) {
      console.error('❌ AliExpress API Error:', error);
      
      // Final fallback to mock data
      console.log('🔄 Final fallback to mock data');
      return this.getMockProducts(query, options.limit || 100);
    }
  }

  // Search products from AliExpress using RapidAPI (fallback method)
  async searchAliExpressProductsRapidAPI(query, options = {}) {
    try {
      const {
        limit = 100,
        page = 1,
        sort = 'SALE_PRICE_ASC',
        category = '',
        minPrice = 0,
        maxPrice = 1000
      } = options;

      const url = `${this.config.RAPIDAPI.baseUrl}/item_search`;
      const params = new URLSearchParams({
        q: query,
        page: page.toString(),
        limit: limit.toString(),
        sort: sort,
        category: category,
        min_price: minPrice.toString(),
        max_price: maxPrice.toString()
      });

      console.log('🌐 API Request URL:', `${url}?${params}`);
      console.log('🔑 API Key present:', !!this.config.RAPIDAPI.key);

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': this.config.RAPIDAPI.key,
          'X-RapidAPI-Host': this.config.RAPIDAPI.aliExpressHost
        }
      });

      console.log('📡 API Response status:', response.status);

      // Check for quota exceeded error
      if (response.status === 429) {
        console.log('⚠️ API quota exceeded, using mock data');
        return this.getMockProducts(query, limit);
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API Error response:', errorText);
        throw new Error(`AliExpress API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('📦 API Response data:', data);
      
      // Handle different response structures
      let productsArray = [];
      
      if (data.result) {
        // Check if there's an error status
        if (data.result.status && data.result.status.data === 'error') {
          console.log('❌ API returned error status:', data.result.status.msg);
          
          // If it's a "no results" error, try a more general search
          if (data.result.status.msg['data-error']?.includes('no results were found')) {
            console.log('🔄 No results found, trying more general search...');
            
            // Try a more general search with different parameters
            const generalParams = new URLSearchParams({
              q: 'fashion',  // More general term
              page: '1',
              limit: '10',
              sort: 'SALE_PRICE_ASC'
            });
            
            const generalResponse = await fetch(`${url}?${generalParams}`, {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': this.config.RAPIDAPI.key,
                'X-RapidAPI-Host': this.config.RAPIDAPI.aliExpressHost
              }
            });
            
            if (generalResponse.ok) {
              const generalData = await generalResponse.json();
              console.log('🔄 General search response:', generalData);
              
              // Process the general search results
              if (generalData.result) {
                if (Array.isArray(generalData.result)) {
                  productsArray = generalData.result;
                } else if (generalData.result.items && Array.isArray(generalData.result.items)) {
                  productsArray = generalData.result.items;
                } else if (generalData.result.products && Array.isArray(generalData.result.products)) {
                  productsArray = generalData.result.products;
                } else if (generalData.result.data && Array.isArray(generalData.result.data)) {
                  productsArray = generalData.result.data;
                } else if (typeof generalData.result === 'object') {
                  for (const key of Object.keys(generalData.result)) {
                    if (Array.isArray(generalData.result[key])) {
                      productsArray = generalData.result[key];
                      break;
                    }
                  }
                }
              }
            }
          } else {
            throw new Error(`API Error: ${data.result.status.msg['data-error'] || 'Unknown error'}`);
          }
        }
        // Check if result is an array (direct products)
        else if (Array.isArray(data.result)) {
          productsArray = data.result;
        }
        // Check if result is an object with items/products inside
        else if (data.result.items && Array.isArray(data.result.items)) {
          productsArray = data.result.items;
        }
        else if (data.result.products && Array.isArray(data.result.products)) {
          productsArray = data.result.products;
        }
        else if (data.result.data && Array.isArray(data.result.data)) {
          productsArray = data.result.data;
        }
        // If result is an object, try to find any array property
        else if (typeof data.result === 'object') {
          console.log('🔍 Result object keys:', Object.keys(data.result));
          // Look for any array property that might contain products
          for (const key of Object.keys(data.result)) {
            if (Array.isArray(data.result[key])) {
              productsArray = data.result[key];
              console.log(`📦 Found products in result.${key}:`, productsArray.length);
              break;
            }
          }
        }
      }
      
      if (productsArray.length === 0) {
        console.log('⚠️ No products array found in response structure');
        console.log('🔍 Full response structure:', JSON.stringify(data, null, 2));
        return [];
      }

      console.log('🔍 Found products before filtering:', productsArray.length);

      // TEMPORARY: Show first few products for debugging
      console.log('🔍 Sample products before filtering:', productsArray.slice(0, 3));

      // Filter for clothing/accessories only
      const clothingProducts = filterClothingProducts(productsArray);
      
      console.log('👕 Clothing products after filtering:', clothingProducts.length);
      
      // TEMPORARY: If no clothing products found, return first 5 products for testing
      if (clothingProducts.length === 0) {
        console.log('⚠️ No clothing products found, returning first 5 products for testing');
        const testProducts = productsArray.slice(0, 5).map(product => standardizeProduct(product, 'aliexpress'));
        return testProducts;
      }
      
      // Standardize product format
      const standardizedProducts = clothingProducts.map(product => standardizeProduct(product, 'aliexpress'));
      
      console.log('✅ Final standardized products:', standardizedProducts.length);
      
      return standardizedProducts;

    } catch (error) {
      console.error('❌ AliExpress API Error:', error);
      throw new Error(`Failed to fetch AliExpress products: ${error.message}`);
    }
  }

  // Mock data for when API quota is exceeded
  getMockProducts(query, limit = 20) {
    console.log('🎭 Using mock data for query:', query);
    
    const mockProducts = [
      {
        id: 'mock_1',
        title: 'Casual Cotton T-Shirt',
        originalPrice: 25.99,
        finalPrice: 19.99,
        currency: 'USD',
        platform: 'AliExpress',
        platformUrl: '#',
        images: ['https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=T-Shirt'],
        brand: 'Fashion Brand',
        rating: 4.5,
        reviewCount: 128,
        category: 'Men\'s Clothing',
        description: 'Comfortable cotton t-shirt perfect for everyday wear',
        store: 'Fashion Store',
        source: 'mock',
        shipping: 'Free',
        discount: '23%',
        sales: 1500
      },
      {
        id: 'mock_2',
        title: 'Elegant Summer Dress',
        originalPrice: 45.99,
        finalPrice: 32.99,
        currency: 'USD',
        platform: 'AliExpress',
        platformUrl: '#',
        images: ['https://via.placeholder.com/300x400/4ECDC4/FFFFFF?text=Dress'],
        brand: 'Elegant Fashion',
        rating: 4.7,
        reviewCount: 89,
        category: 'Women\'s Clothing',
        description: 'Beautiful summer dress with floral pattern',
        store: 'Elegant Store',
        source: 'mock',
        shipping: 'Free',
        discount: '28%',
        sales: 890
      },
      {
        id: 'mock_3',
        title: 'Classic Denim Jeans',
        originalPrice: 55.99,
        finalPrice: 42.99,
        currency: 'USD',
        platform: 'AliExpress',
        platformUrl: '#',
        images: ['https://via.placeholder.com/300x400/45B7D1/FFFFFF?text=Jeans'],
        brand: 'Denim Co.',
        rating: 4.3,
        reviewCount: 256,
        category: 'Men\'s Clothing',
        description: 'Classic blue denim jeans with perfect fit',
        store: 'Denim Store',
        source: 'mock',
        shipping: 'Free',
        discount: '23%',
        sales: 2100
      },
      {
        id: 'mock_4',
        title: 'Stylish Sneakers',
        originalPrice: 75.99,
        finalPrice: 58.99,
        currency: 'USD',
        platform: 'AliExpress',
        platformUrl: '#',
        images: ['https://via.placeholder.com/300x400/96CEB4/FFFFFF?text=Sneakers'],
        brand: 'SportStyle',
        rating: 4.6,
        reviewCount: 167,
        category: 'Shoes',
        description: 'Comfortable and stylish sneakers for daily use',
        store: 'Sport Store',
        source: 'mock',
        shipping: 'Free',
        discount: '22%',
        sales: 1200
      },
      {
        id: 'mock_5',
        title: 'Fashion Handbag',
        originalPrice: 35.99,
        finalPrice: 24.99,
        currency: 'USD',
        platform: 'AliExpress',
        platformUrl: '#',
        images: ['https://via.placeholder.com/300x400/FFEAA7/FFFFFF?text=Handbag'],
        brand: 'Accessory Pro',
        rating: 4.4,
        reviewCount: 93,
        category: 'Bags & Wallets',
        description: 'Elegant handbag perfect for any occasion',
        store: 'Accessory Store',
        source: 'mock',
        shipping: 'Free',
        discount: '31%',
        sales: 750
      }
    ];

    // Filter mock products based on query
    const filteredProducts = mockProducts.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    // Return requested number of products
    return filteredProducts.slice(0, limit);
  }

  // Get product details from AliExpress
  async getAliExpressProductDetails(productId) {
    try {
      const url = `${this.config.RAPIDAPI.baseUrl}/item_detail_2`;
      const params = new URLSearchParams({
        itemId: productId
      });

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': this.config.RAPIDAPI.key,
          'X-RapidAPI-Host': this.config.RAPIDAPI.aliExpressHost
        }
      });

      if (!response.ok) {
        throw new Error(`AliExpress API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.result) {
        throw new Error('Product not found');
      }

      return standardizeProduct(data.result, 'aliexpress');

    } catch (error) {
      console.error('AliExpress Product Details Error:', error);
      throw new Error(`Failed to fetch product details: ${error.message}`);
    }
  }

  // Get trending products from AliExpress
  async getAliExpressTrendingProducts(options = {}) {
    try {
      const {
        limit = 20,
        category = 'Apparel & Accessories'
      } = options;

      const url = `${this.config.RAPIDAPI.baseUrl}/item_search`;
      const params = new URLSearchParams({
        q: 'trending fashion clothing',
        page: '1',
        limit: limit.toString(),
        sort: 'SALE_PRICE_ASC',
        category: category
      });

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': this.config.RAPIDAPI.key,
          'X-RapidAPI-Host': this.config.RAPIDAPI.aliExpressHost
        }
      });

      if (!response.ok) {
        throw new Error(`AliExpress API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Handle different response structures (same logic as search method)
      let productsArray = [];
      
      if (data.result) {
        if (Array.isArray(data.result)) {
          productsArray = data.result;
        }
        else if (data.result.items && Array.isArray(data.result.items)) {
          productsArray = data.result.items;
        }
        else if (data.result.products && Array.isArray(data.result.products)) {
          productsArray = data.result.products;
        }
        else if (data.result.data && Array.isArray(data.result.data)) {
          productsArray = data.result.data;
        }
        else if (typeof data.result === 'object') {
          for (const key of Object.keys(data.result)) {
            if (Array.isArray(data.result[key])) {
              productsArray = data.result[key];
              break;
            }
          }
        }
      }
      
      if (productsArray.length === 0) {
        return [];
      }

      const clothingProducts = filterClothingProducts(productsArray);
      return clothingProducts.map(product => standardizeProduct(product, 'aliexpress'));

    } catch (error) {
      console.error('AliExpress Trending Products Error:', error);
      throw new Error(`Failed to fetch trending products: ${error.message}`);
    }
  }

  // Generic search method that can be extended for multiple platforms
  async searchProducts(query, options = {}) {
    const { platform = 'aliexpress', ...searchOptions } = options;
    
    switch (platform.toLowerCase()) {
      case 'aliexpress':
        return await this.searchAliExpressProducts(query, searchOptions);
      // Future platforms can be added here
      // case 'amazon':
      //   return await this.searchAmazonProducts(query, searchOptions);
      // case 'etsy':
      //   return await this.searchEtsyProducts(query, searchOptions);
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }
  }

  // Generic product details method
  async getProductDetails(productId, platform = 'aliexpress') {
    switch (platform.toLowerCase()) {
      case 'aliexpress':
        return await this.getAliExpressProductDetails(productId);
      // Future platforms can be added here
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }
  }
}

// Create singleton instance
const apiService = new EcommerceAPIService();

// Export both the class and the singleton instance
export { EcommerceAPIService };
export default apiService; 