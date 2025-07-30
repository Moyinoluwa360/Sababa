// Smart search term mapping for Pinterest-inspired fashion
const AESTHETIC_SEARCH_TERMS = {
  'jeans': ['vintage jeans', 'mom jeans', 'straight leg jeans', 'distressed jeans', 'high waisted jeans', 'Y2K jeans'],
  'pants': ['vintage pants', 'wide leg pants', 'cargo pants', 'straight leg pants', 'high waisted pants'],
  'dress': ['cottagecore dress', 'vintage dress', 'minimalist dress', 'Y2K dress', 'aesthetic dress'],
  'shirt': ['oversized shirt', 'crop top', 'vintage tee', 'graphic tee', 'minimalist shirt'],
  'top': ['crop top', 'oversized top', 'vintage top', 'aesthetic top', 'Y2K top'],
  'skirt': ['mini skirt', 'pleated skirt', 'vintage skirt', 'aesthetic skirt', 'Y2K skirt'],
  'shoes': ['vintage sneakers', 'platform shoes', 'chunky shoes', 'aesthetic shoes', 'Y2K shoes'],
  'bag': ['vintage bag', 'minimalist bag', 'aesthetic bag', 'Y2K bag', 'trendy bag'],
  'jacket': ['vintage jacket', 'oversized jacket', 'aesthetic jacket', 'Y2K jacket', 'trendy jacket'],
  'sweater': ['vintage sweater', 'oversized sweater', 'aesthetic sweater', 'cottagecore sweater'],
  'hoodie': ['vintage hoodie', 'oversized hoodie', 'aesthetic hoodie', 'streetwear hoodie'],
  'shorts': ['vintage shorts', 'high waisted shorts', 'aesthetic shorts', 'Y2K shorts'],
  'blouse': ['vintage blouse', 'aesthetic blouse', 'minimalist blouse', 'cottagecore blouse'],
  'cardigan': ['vintage cardigan', 'oversized cardigan', 'aesthetic cardigan', 'cottagecore cardigan'],
  'coat': ['vintage coat', 'oversized coat', 'aesthetic coat', 'minimalist coat']
};

// Trend keywords to add to searches
const TREND_KEYWORDS = [
  'vintage', 'aesthetic', 'trendy', 'Y2K', 'cottagecore', 'streetwear', 
  'minimalist', 'oversized', 'cropped', 'high waisted', 'distressed',
  'butterfly', 'pastel', 'earth tone', 'neutral', 'viral', 'TikTok fashion'
];

// Function to enhance search terms for better aesthetic results
export const enhanceSearchTerms = (query) => {
  const lowerQuery = query.toLowerCase();
  
  // Check if we have specific aesthetic terms for this query
  for (const [baseTerm, aestheticTerms] of Object.entries(AESTHETIC_SEARCH_TERMS)) {
    if (lowerQuery.includes(baseTerm)) {
      // Return a random aesthetic variation
      return aestheticTerms[Math.floor(Math.random() * aestheticTerms.length)];
    }
  }
  
  // If no specific mapping, add trend keywords
  const trendKeyword = TREND_KEYWORDS[Math.floor(Math.random() * TREND_KEYWORDS.length)];
  return `${query} ${trendKeyword}`;
}; 