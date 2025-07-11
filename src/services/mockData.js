// Mock data for Pinterest-inspired fashion products
export const MOCK_PRODUCTS = [
  {
    id: '1',
    title: 'Vintage Mom Jeans - High Waisted Distressed Denim',
    description: 'Trendy Y2K inspired mom jeans with vintage wash and distressed details',
    originalPrice: 2500,
    finalPrice: 2875,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example1',
    images: ['/mockIMG/mockIMG1.jpeg'],
    category: 'jeans',
    availability: true,
    rating: 4.5,
    reviewCount: 128,
    availableColors: ['Blue', 'Black', 'Light Blue'],
    availableSizes: ['26', '28', '30', '32', '34'],
    options: ['With Belt', 'No Belt'],
    stock: 24
  },
  {
    id: '2',
    title: 'Straight Leg Jeans - Y2K Aesthetic',
    description: 'Classic straight leg jeans with vintage wash, perfect for Y2K and minimalist aesthetics',
    originalPrice: 2200,
    finalPrice: 2530,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example2',
    images: ['/mockIMG/mockIMG2.jpeg'],
    category: 'jeans',
    availability: true,
    rating: 4.3,
    reviewCount: 95,
    availableColors: ['Blue', 'Grey'],
    availableSizes: ['28', '30', '32', '34'],
    options: ['Ripped', 'Non-Ripped'],
    stock: 18
  },
  {
    id: '3',
    title: 'Wide Leg Cargo Pants - Streetwear Style',
    description: 'Trendy wide leg cargo pants with multiple pockets, perfect for streetwear aesthetic',
    originalPrice: 2800,
    finalPrice: 3220,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example3',
    images: ['/mockIMG/mockIMG3.jpeg'],
    category: 'pants',
    availability: true,
    rating: 4.6,
    reviewCount: 87,
    availableColors: ['Black', 'Army Green', 'Khaki'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    options: ['With Chains', 'No Chains'],
    stock: 32
  },
  {
    id: '4',
    title: 'Cottagecore Floral Dress - Aesthetic Vintage Style',
    description: 'Beautiful cottagecore inspired dress with floral pattern and vintage aesthetic',
    originalPrice: 3500,
    finalPrice: 4025,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example4',
    images: ['/mockIMG/mockIMG4.jpeg'],
    category: 'dress',
    availability: true,
    rating: 4.8,
    reviewCount: 95,
    availableColors: ['Pink', 'Yellow', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['Short Sleeve', 'Long Sleeve'],
    stock: 15
  },
  {
    id: '5',
    title: 'Y2K Mini Dress - Butterfly Print',
    description: 'Trendy Y2K mini dress with butterfly print, perfect for aesthetic fashion and TikTok trends',
    originalPrice: 2800,
    finalPrice: 3220,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example5',
    images: ['/mockIMG/mockIMG5.jpeg'],
    category: 'dress',
    availability: true,
    rating: 4.6,
    reviewCount: 156,
    availableColors: ['Purple', 'Black', 'White'],
    availableSizes: ['XS', 'S', 'M', 'L'],
    options: ['With Straps', 'Strapless'],
    stock: 21
  },
  {
    id: '6',
    title: 'Oversized Crop Top - Streetwear Aesthetic',
    description: 'Trendy oversized crop top perfect for streetwear and Y2K fashion',
    originalPrice: 1200,
    finalPrice: 1380,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example6',
    images: ['/mockIMG/mockIMG6.jpeg'],
    category: 'top',
    availability: true,
    rating: 4.3,
    reviewCount: 67,
    availableColors: ['Red', 'Black', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Belt', 'No Belt'],
    stock: 18
  },
  {
    id: '7',
    title: 'Vintage Graphic Tee - Y2K Aesthetic',
    description: 'Retro graphic tee with vintage designs, perfect for Y2K aesthetic and streetwear',
    originalPrice: 1500,
    finalPrice: 1725,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example7',
    images: ['/mockIMG/mockIMG7.jpeg'],
    category: 'shirt',
    availability: true,
    rating: 4.4,
    reviewCount: 92,
    availableColors: ['Red', 'Black', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Print', 'Plain'],
    stock: 20
  },
  {
    id: '8',
    title: 'Vintage Platform Sneakers - Chunky Aesthetic',
    description: 'Y2K inspired platform sneakers with chunky sole and vintage aesthetic',
    originalPrice: 4500,
    finalPrice: 5175,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example8',
    images: ['/mockIMG/mockIMG8.jpeg'],
    category: 'shoes',
    availability: true,
    rating: 4.6,
    reviewCount: 89,
    availableColors: ['Brown', 'Black', 'White'],
    availableSizes: ['39', '40', '41', '42'],
    options: ['With Chain', 'Without Chain'],
    stock: 25
  },
  {
    id: '9',
    title: 'Minimalist Loafers - Clean Aesthetic',
    description: 'Elegant minimalist loafers with clean design, perfect for sophisticated and clean aesthetic',
    originalPrice: 3800,
    finalPrice: 4370,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example9',
    images: ['/mockIMG/mockIMG9.jpeg'],
    category: 'shoes',
    availability: true,
    rating: 4.8,
    reviewCount: 64,
    availableColors: ['Black', 'Brown'],
    availableSizes: ['40', '41', '42'],
    options: ['With Straps', 'Strapless'],
    stock: 15
  },
  {
    id: '10',
    title: 'Vintage Crossbody Bag - Aesthetic Style',
    description: 'Charming vintage crossbody bag with aesthetic design, perfect for everyday use',
    originalPrice: 1800,
    finalPrice: 2070,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example10',
    images: ['/mockIMG/mockIMG10.jpeg'],
    category: 'bag',
    availability: true,
    rating: 4.4,
    reviewCount: 56,
    availableColors: ['Brown', 'Black', 'Tan'],
    availableSizes: ['Small', 'Medium', 'Large'],
    options: ['With Chain', 'Without Chain'],
    stock: 10
  },
  {
    id: '11',
    title: 'Cottagecore Midi Skirt - Floral Print',
    description: 'Romantic midi skirt with floral print, perfect for cottagecore and vintage looks',
    originalPrice: 2100,
    finalPrice: 2415,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example11',
    images: ['/mockIMG/mockIMG1.jpeg'],
    category: 'skirt',
    availability: true,
    rating: 4.7,
    reviewCount: 61,
    availableColors: ['Pink', 'Yellow', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Belt', 'No Belt'],
    stock: 12
  },
  {
    id: '12',
    title: 'Streetwear Oversized Hoodie - Urban Style',
    description: 'Oversized hoodie with bold graphics, perfect for streetwear and Gen Z fashion',
    originalPrice: 3200,
    finalPrice: 3680,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example12',
    images: ['/mockIMG/mockIMG2.jpeg'],
    category: 'hoodie',
    availability: true,
    rating: 4.8,
    reviewCount: 102,
    availableColors: ['Black', 'Army Green', 'Khaki'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    options: ['With Zipper', 'Without Zipper'],
    stock: 20
  },
  {
    id: '13',
    title: 'Minimalist White Sneakers - Clean Aesthetic',
    description: 'Classic minimalist white sneakers for a clean, versatile look',
    originalPrice: 3500,
    finalPrice: 4025,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example13',
    images: ['/mockIMG/mockIMG3.jpeg'],
    category: 'shoes',
    availability: true,
    rating: 4.9,
    reviewCount: 134,
    availableColors: ['White', 'Cream'],
    availableSizes: ['39', '40', '41', '42'],
    options: ['With Straps', 'Strapless'],
    stock: 10
  },
  {
    id: '14',
    title: 'Y2K Butterfly Crop Top',
    description: 'Trendy crop top with butterfly print, perfect for Y2K and TikTok fashion',
    originalPrice: 1400,
    finalPrice: 1610,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example14',
    images: ['/mockIMG/mockIMG4.jpeg'],
    category: 'top',
    availability: true,
    rating: 4.5,
    reviewCount: 77,
    availableColors: ['Red', 'Black', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Belt', 'No Belt'],
    stock: 15
  },
  {
    id: '15',
    title: 'Vintage Corduroy Jacket - Retro Style',
    description: 'Retro corduroy jacket with vintage buttons, perfect for layering',
    originalPrice: 4200,
    finalPrice: 4830,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example15',
    images: ['/mockIMG/mockIMG5.jpeg'],
    category: 'jacket',
    availability: true,
    rating: 4.6,
    reviewCount: 88,
    availableColors: ['Army Green', 'Khaki', 'Black'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    options: ['With Zipper', 'Without Zipper'],
    stock: 12
  },
  {
    id: '16',
    title: 'Cottagecore Puff Sleeve Blouse',
    description: 'Delicate blouse with puff sleeves and lace, ideal for romantic looks',
    originalPrice: 2300,
    finalPrice: 2645,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example16',
    images: ['/mockIMG/mockIMG6.jpeg'],
    category: 'blouse',
    availability: true,
    rating: 4.7,
    reviewCount: 59,
    availableColors: ['Pink', 'Yellow', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Belt', 'No Belt'],
    stock: 10
  },
  {
    id: '17',
    title: 'Streetwear Cargo Shorts - Urban Aesthetic',
    description: 'Trendy cargo shorts with utility pockets, perfect for summer streetwear',
    originalPrice: 1800,
    finalPrice: 2070,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example17',
    images: ['/mockIMG/mockIMG7.jpeg'],
    category: 'shorts',
    availability: true,
    rating: 4.4,
    reviewCount: 48,
    availableColors: ['Black', 'Army Green', 'Khaki'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Chains', 'No Chains'],
    stock: 15
  },
  {
    id: '18',
    title: 'Minimalist Ribbed Tank Top',
    description: 'Simple ribbed tank top for a clean, minimalist look',
    originalPrice: 1100,
    finalPrice: 1265,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example18',
    images: ['/mockIMG/mockIMG8.jpeg'],
    category: 'top',
    availability: true,
    rating: 4.2,
    reviewCount: 33,
    availableColors: ['Red', 'Black', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Belt', 'No Belt'],
    stock: 10
  },
  {
    id: '19',
    title: 'Y2K Pleated Mini Skirt',
    description: 'Trendy pleated mini skirt, perfect for Y2K and K-pop inspired outfits',
    originalPrice: 2000,
    finalPrice: 2300,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example19',
    images: ['/mockIMG/mockIMG9.jpeg'],
    category: 'skirt',
    availability: true,
    rating: 4.6,
    reviewCount: 71,
    availableColors: ['Pink', 'Yellow', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Belt', 'No Belt'],
    stock: 12
  },
  {
    id: '20',
    title: 'Cottagecore Straw Hat - Vintage Charm',
    description: 'Wide-brim straw hat with ribbon, perfect for cottagecore and summer looks',
    originalPrice: 1700,
    finalPrice: 1955,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example20',
    images: ['/mockIMG/mockIMG10.jpeg'],
    category: 'hat',
    availability: true,
    rating: 4.8,
    reviewCount: 44,
    availableColors: ['Brown', 'Black', 'Tan'],
    availableSizes: ['One Size'],
    options: ['With Ribbon', 'Without Ribbon'],
    stock: 8
  },
  {
    id: '21',
    title: 'Streetwear Graphic Socks - Urban Style',
    description: 'Bold graphic socks for a statement streetwear look',
    originalPrice: 800,
    finalPrice: 920,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example21',
    images: ['/mockIMG/mockIMG1.jpeg'],
    category: 'accessory',
    availability: true,
    rating: 4.5,
    reviewCount: 29,
    availableColors: ['Red', 'Black', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Print', 'Plain'],
    stock: 10
  },
  {
    id: '22',
    title: 'Minimalist Canvas Tote Bag',
    description: 'Simple canvas tote bag for everyday minimalist style',
    originalPrice: 1300,
    finalPrice: 1495,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example22',
    images: ['/mockIMG/mockIMG2.jpeg'],
    category: 'bag',
    availability: true,
    rating: 4.3,
    reviewCount: 38,
    availableColors: ['Brown', 'Black', 'Tan'],
    availableSizes: ['Small', 'Medium', 'Large'],
    options: ['With Chain', 'Without Chain'],
    stock: 12
  },
  {
    id: '23',
    title: 'Y2K Platform Boots - Chunky Sole',
    description: 'Chunky platform boots for a bold Y2K look',
    originalPrice: 4800,
    finalPrice: 5520,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example23',
    images: ['/mockIMG/mockIMG3.jpeg'],
    category: 'shoes',
    availability: true,
    rating: 4.7,
    reviewCount: 62,
    availableColors: ['Brown', 'Black', 'White'],
    availableSizes: ['39', '40', '41', '42'],
    options: ['With Chain', 'Without Chain'],
    stock: 10
  },
  {
    id: '24',
    title: 'Cottagecore Lace Gloves',
    description: 'Delicate lace gloves for a romantic, vintage-inspired look',
    originalPrice: 900,
    finalPrice: 1040,
    platform: 'jumia',
    platformUrl: 'https://www.jumia.com.ng/item/example24',
    images: ['/mockIMG/mockIMG4.jpeg'],
    category: 'accessory',
    availability: true,
    rating: 4.6,
    reviewCount: 21,
    availableColors: ['Pink', 'Yellow', 'White'],
    availableSizes: ['S', 'M', 'L'],
    options: ['With Belt', 'No Belt'],
    stock: 8
  },
  {
    id: '25',
    title: 'Minimalist Black Belt',
    description: 'Classic black belt for a clean, minimalist finish',
    originalPrice: 1200,
    finalPrice: 1380,
    platform: 'aliexpress',
    platformUrl: 'https://www.aliexpress.com/item/example25',
    images: ['/mockIMG/mockIMG5.jpeg'],
    category: 'accessory',
    availability: true,
    rating: 4.4,
    reviewCount: 19,
    availableColors: ['Black'],
    availableSizes: ['One Size'],
    options: ['With Buckle', 'Without Buckle'],
    stock: 10
  }
  // ... 15 more unique products will be added in the next batch ...
];

// Helper function to filter products by query
export const filterProductsByQuery = (products, query) => {
  if (!query) return products;
  
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.title.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
};

// Helper function to filter products by platform
export const filterProductsByPlatform = (products, platform) => {
  if (!platform) return products;
  return products.filter(product => product.platform === platform);
};

// Helper function to filter products by category
export const filterProductsByCategory = (products, category) => {
  if (!category) return products;
  return products.filter(product => product.category === category);
}; 