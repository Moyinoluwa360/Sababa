// API Configuration
export const API_CONFIG = {
  RAPIDAPI: {
    key: import.meta.env.VITE_RAPIDAPI_KEY || '',
    aliExpressHost: 'aliexpress-datahub.p.rapidapi.com',
    baseUrl: 'https://aliexpress-datahub.p.rapidapi.com'
  },
  ALIEXPRESS_AFFILIATE: {
    appKey: import.meta.env.VITE_ALIEXPRESS_APP_KEY || '',
    appSecret: import.meta.env.VITE_ALIEXPRESS_APP_SECRET || '',
    trackingId: import.meta.env.VITE_ALIEXPRESS_TRACKING_ID || '',
    baseUrl: 'https://api.aliexpress.com/v2',
    apiVersion: '2.0'
  }
};

// Product categories for clothing and accessories
export const CLOTHING_CATEGORIES = [
  'Apparel & Accessories',
  'Women\'s Clothing',
  'Men\'s Clothing',
  'Kids\' Clothing',
  'Shoes',
  'Bags & Wallets',
  'Jewelry & Watches',
  'Hair Accessories',
  'Scarves & Gloves',
  'Belts',
  'Hats & Caps',
  'Sunglasses',
  'Socks & Stockings',
  'Underwear & Sleepwear',
  'Sportswear',
  'Formal Wear',
  'Casual Wear',
  'Outerwear',
  'Swimwear',
  'Lingerie'
];

// Search keywords for clothing and accessories
export const CLOTHING_KEYWORDS = [
  // General clothing
  'dress', 'shirt', 'pants', 'jeans', 'skirt', 'blouse', 'jacket', 'coat',
  'sweater', 'hoodie', 't-shirt', 'tank top', 'cardigan', 'blazer',
  'suit', 'vest', 'tunic', 'trousers', 'shorts', 'leggings', 'jumpsuit',
  'romper', 'kimono', 'poncho', 'shawl', 'wrap', 'robe', 'pajamas',
  
  // Footwear
  'shoes', 'boots', 'sneakers', 'sandals', 'heels', 'flats', 'loafers',
  'oxfords', 'pumps', 'stilettos', 'wedges', 'espadrilles', 'mules',
  'clogs', 'slides', 'slippers', 'athletic', 'running', 'casual',
  
  // Bags and accessories
  'bag', 'purse', 'wallet', 'backpack', 'handbag', 'clutch', 'tote',
  'crossbody', 'shoulder bag', 'messenger', 'duffel', 'laptop bag',
  'jewelry', 'necklace', 'earrings', 'bracelet', 'ring', 'watch',
  'belt', 'scarf', 'gloves', 'sunglasses', 'hat', 'cap', 'beanie',
  
  // Underwear and sleepwear
  'underwear', 'lingerie', 'bra', 'panties', 'boxers', 'briefs',
  'sleepwear', 'nightgown', 'pajamas', 'sleep shirt', 'robe',
  
  // Swimwear
  'swimwear', 'bikini', 'swimsuit', 'swim trunks', 'board shorts',
  
  // Sportswear
  'sportswear', 'athletic', 'gym', 'workout', 'fitness', 'yoga',
  'running', 'training', 'activewear', 'leggings', 'sports bra',
  
  // Socks and stockings
  'socks', 'stockings', 'tights', 'pantyhose', 'ankle socks', 'knee socks',
  
  // Fashion terms
  'fashion', 'style', 'trendy', 'casual', 'formal', 'elegant', 'vintage',
  'modern', 'classic', 'designer', 'brand', 'luxury', 'premium'
];

// Filter out non-clothing products
export const filterClothingProducts = (products) => {
  console.log('🔍 Filtering products:', products.length);
  
  return products.filter(product => {
    // Get title from various possible field names
    const title = (
      product.title?.toLowerCase() || 
      product.product_title?.toLowerCase() || 
      product.name?.toLowerCase() || 
      ''
    );
    
    // Get category from various possible field names
    const category = (
      product.category?.toLowerCase() || 
      product.product_category?.toLowerCase() || 
      product.cat?.toLowerCase() || 
      ''
    );
    
    console.log('📦 Product:', { title, category });
    
    // Check if product is clothing/accessories related
    const isClothing = CLOTHING_CATEGORIES.some(cat => 
      title.includes(cat.toLowerCase()) || 
      category.includes(cat.toLowerCase())
    ) || CLOTHING_KEYWORDS.some(keyword => 
      title.includes(keyword.toLowerCase())
    );
    
    // Filter out electronics, gadgets, etc.
    const isElectronics = [
      'phone', 'laptop', 'computer', 'electronic', 'gadget', 'appliance',
      'camera', 'speaker', 'headphone', 'charger', 'cable', 'wire',
      'battery', 'power', 'electric', 'digital', 'smart', 'tech',
      'game', 'console', 'tv', 'monitor', 'keyboard', 'mouse'
    ].some(term => title.includes(term));
    
    const shouldInclude = isClothing && !isElectronics;
    console.log(`✅ Product "${title}" - Include: ${shouldInclude} (Clothing: ${isClothing}, Electronics: ${isElectronics})`);
    
    return shouldInclude;
  });
}; 