
// Simple test to fetch Amazon products
const API_KEY = 'fc9b8e12camshdd051ab15996633p143913jsne1cb645c820d';

async function searchAmazonProducts(query) {
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&country=US`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        console.log('Products found:', result.data?.products?.length || 0);
        console.log('Search results:', JSON.stringify(result, null, 2));
        
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Test it
searchAmazonProducts('male chlothes')