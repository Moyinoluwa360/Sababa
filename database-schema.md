# Sababa Fashion Aggregator - Database Schema Design

## Overview
This schema supports a fashion aggregator platform with multi-store shopping, outfit inspiration, and "Get the Look" functionality using Firebase Firestore.

## Core Collections

### 1. Users Collection
```
users/{userId}
├── email: string
├── displayName: string
├── photoURL: string
├── phone: string (optional)
├── dateOfBirth: date (optional)
├── gender: string (optional)
├── preferences: object
│   ├── style: array [casual, formal, streetwear, etc.]
│   ├── brands: array
│   ├── priceRange: object {min: number, max: number}
│   └── sizes: object {tops: string, bottoms: string, shoes: string}
├── addresses: array
│   └── address: object
│       ├── id: string
│       ├── name: string (Home, Work, etc.)
│       ├── street: string
│       ├── city: string
│       ├── state: string
│       ├── zipCode: string
│       ├── country: string
│       └── isDefault: boolean
├── cart: array
│   └── cartItem: object
│       ├── productId: string
│       ├── storeId: string
│       ├── quantity: number
│       ├── size: string
│       ├── color: string
│       └── addedAt: timestamp
├── wishlist: array [productIds]
├── orderHistory: array [orderIds]
├── createdAt: timestamp
└── updatedAt: timestamp
```

### 2. Products Collection
```
products/{productId}
├── name: string
├── description: string
├── category: string (tops, bottoms, shoes, accessories, etc.)
├── subcategory: string (shirts, jeans, sneakers, etc.)
├── brand: string
├── price: number
├── originalPrice: number (for sales)
├── currency: string
├── images: array [imageUrls]
├── colors: array
├── sizes: array
├── storeInfo: object
│   ├── storeId: string
│   ├── storeName: string
│   ├── storeProductId: string
│   └── storeProductUrl: string
├── inventory: object
│   ├── totalStock: number
│   └── sizeStock: object {size: quantity}
├── tags: array [casual, summer, trendy, etc.]
├── gender: string (men, women, unisex)
├── materials: array
├── careInstructions: string
├── rating: object
│   ├── average: number
│   └── count: number
├── isActive: boolean
├── createdAt: timestamp
└── updatedAt: timestamp
```

### 3. Stores Collection
```
stores/{storeId}
├── name: string
├── description: string
├── logo: string
├── website: string
├── shopifyDomain: string
├── apiCredentials: object (encrypted)
│   ├── accessToken: string
│   └── shopName: string
├── commission: object
│   ├── rate: number (percentage)
│   └── type: string (percentage, fixed)
├── isActive: boolean
├── syncSettings: object
│   ├── autoSync: boolean
│   ├── syncFrequency: string
│   └── lastSync: timestamp
├── categories: array
├── payoutInfo: object
│   ├── method: string
│   ├── details: object
│   └── schedule: string
├── createdAt: timestamp
└── updatedAt: timestamp
```

### 4. Outfits Collection
```
outfits/{outfitId}
├── title: string
├── description: string
├── mainImage: string
├── images: array [imageUrls]
├── style: string (casual, formal, streetwear, etc.)
├── occasion: string (work, party, everyday, etc.)
├── season: string (spring, summer, fall, winter, all)
├── gender: string (men, women, unisex)
├── priceRange: object
│   ├── min: number
│   └── max: number
├── products: array
│   └── outfitProduct: object
│       ├── productId: string
│       ├── category: string (top, bottom, shoes, accessory)
│       ├── isRequired: boolean
│       └── alternatives: array [productIds]
├── tags: array
├── curator: object
│   ├── userId: string (if user-generated)
│   └── name: string
├── likes: number
├── views: number
├── isPublished: boolean
├── isFeatured: boolean
├── createdAt: timestamp
└── updatedAt: timestamp
```

### 5. Orders Collection
```
orders/{orderId}
├── userId: string
├── orderNumber: string (generated)
├── status: string (pending, confirmed, processing, shipped, delivered, cancelled)
├── items: array
│   └── orderItem: object
│       ├── productId: string
│       ├── storeId: string
│       ├── storeName: string
│       ├── productName: string
│       ├── price: number
│       ├── quantity: number
│       ├── size: string
│       ├── color: string
│       ├── image: string
│       └── status: string (pending, confirmed, shipped, delivered)
├── subtotal: number
├── tax: number
├── shipping: number
├── commission: number
├── total: number
├── currency: string
├── shippingAddress: object
├── billingAddress: object
├── paymentInfo: object
│   ├── method: string
│   ├── transactionId: string
│   ├── status: string
│   └── processedAt: timestamp
├── storeOrders: array
│   └── storeOrder: object
│       ├── storeId: string
│       ├── items: array
│       ├── subtotal: number
│       ├── status: string
│       └── tracking: object
├── tracking: object
│   ├── trackingNumber: string
│   ├── carrier: string
│   └── status: string
├── notes: string
├── createdAt: timestamp
└── updatedAt: timestamp
```

### 6. Categories Collection
```
categories/{categoryId}
├── name: string
├── slug: string
├── description: string
├── image: string
├── parentId: string (for subcategories)
├── level: number (0 for main, 1 for sub, etc.)
├── order: number (for sorting)
├── isActive: boolean
├── productCount: number
├── createdAt: timestamp
└── updatedAt: timestamp
```

### 7. Reviews Collection
```
reviews/{reviewId}
├── userId: string
├── productId: string
├── orderId: string
├── rating: number (1-5)
├── title: string
├── comment: string
├── images: array [imageUrls]
├── size: string (size purchased)
├── fit: string (small, true to size, large)
├── helpful: number (helpful votes)
├── verified: boolean (verified purchase)
├── isPublished: boolean
├── createdAt: timestamp
└── updatedAt: timestamp
```

## Supporting Collections

### 8. Sync Logs Collection
```
syncLogs/{logId}
├── storeId: string
├── type: string (products, inventory, orders)
├── status: string (success, error, partial)
├── recordsProcessed: number
├── recordsAdded: number
├── recordsUpdated: number
├── errors: array
├── startTime: timestamp
└── endTime: timestamp
```

### 9. Analytics Collection
```
analytics/{date}
├── date: string (YYYY-MM-DD)
├── pageViews: object
├── productViews: object
├── outfitViews: object
├── searches: object
├── conversions: object
├── revenue: object
└── userActivity: object
```

### 10. Notifications Collection
```
notifications/{notificationId}
├── userId: string
├── type: string (order, promotion, system)
├── title: string
├── message: string
├── data: object
├── isRead: boolean
├── priority: string (low, medium, high)
├── createdAt: timestamp
└── expiresAt: timestamp
```

## Indexes and Queries

### Firestore Composite Indexes Needed
1. **Products**: category + isActive + createdAt
2. **Products**: storeId + isActive + updatedAt
3. **Products**: tags (array) + isActive + price
4. **Orders**: userId + status + createdAt
5. **Orders**: status + createdAt
6. **Outfits**: style + gender + isPublished
7. **Outfits**: isPublished + isFeatured + createdAt
8. **Reviews**: productId + isPublished + rating

### Security Rules Structure
```javascript
// Example security rules for products
match /products/{productId} {
  allow read: if resource.data.isActive == true;
  allow write: if request.auth != null && 
    request.auth.token.admin == true;
}

// User data access
match /users/{userId} {
  allow read, write: if request.auth != null && 
    request.auth.uid == userId;
}
```

## Data Relationships

### Key Relationships
1. **Users ↔ Orders**: One-to-many via userId
2. **Products ↔ Stores**: Many-to-one via storeId
3. **Outfits ↔ Products**: Many-to-many via products array
4. **Orders ↔ Products**: Many-to-many via items array
5. **Users ↔ Reviews**: One-to-many via userId
6. **Products ↔ Reviews**: One-to-many via productId

### Denormalization Strategy
To optimize for read performance:
- Store basic product info in cart items
- Store store name in order items
- Cache product counts in categories
- Maintain rating averages in products

## Scalability Considerations

### Sharding Strategy
- **Products**: Shard by store or category for large catalogs
- **Orders**: Shard by date (monthly) for high volume
- **Analytics**: Daily documents to prevent large document growth

### Performance Optimizations
- Use Firestore bundles for initial app loading
- Implement pagination for product listings
- Cache frequently accessed data
- Use Cloud Functions for complex queries

This schema supports all planned features while maintaining performance and scalability for your fashion aggregator platform.