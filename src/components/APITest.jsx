import React, { useState } from 'react';
import { EcommerceAPIService } from '../services/apiService';
import { API_CONFIG } from '../config/apiConfig';

const APITest = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testResults, setTestResults] = useState({});

  const apiService = new EcommerceAPIService();

  const runComprehensiveTest = async () => {
    console.log('🧪 Starting comprehensive API test...');
    setLoading(true);
    setError(null);
    setTestResults({});

    const tests = [
      { name: 'Basic Search - "shirt"', query: 'shirt', options: { limit: 10 } },
      { name: 'Basic Search - "dress"', query: 'dress', options: { limit: 10 } },
      { name: 'Basic Search - "fashion"', query: 'fashion', options: { limit: 10 } },
      { name: 'Basic Search - "clothing"', query: 'clothing', options: { limit: 10 } },
      { name: 'Category Search - "Women\'s Clothing"', query: '', options: { limit: 10, category: 'Women\'s Clothing' } },
      { name: 'Price Range Search', query: 'shirt', options: { limit: 10, minPrice: 5, maxPrice: 50 } },
      { name: 'Sort by Price Desc', query: 'dress', options: { limit: 10, sort: 'SALE_PRICE_DESC' } },
      { name: 'Sort by Rating', query: 'shoes', options: { limit: 10, sort: 'EVALUATE_RATE_DESC' } },
      { name: 'Page 2 Search', query: 'fashion', options: { limit: 10, page: 2 } },
      { name: 'Very General Search - "a"', query: 'a', options: { limit: 5 } },
    ];

    const testResults = {};

    for (const test of tests) {
      try {
        console.log(`\n🧪 Running test: ${test.name}`);
        console.log(`🔍 Query: "${test.query}", Options:`, test.options);
        
        const startTime = Date.now();
        const products = await apiService.searchAliExpressProducts(test.query, test.options);
        const endTime = Date.now();
        
        testResults[test.name] = {
          success: true,
          count: products.length,
          time: endTime - startTime,
          products: products.slice(0, 3) // Show first 3 products
        };
        
        console.log(`✅ ${test.name}: ${products.length} products found in ${endTime - startTime}ms`);
        
        // If we get results, show them
        if (products.length > 0) {
          setResults(products);
          break; // Stop testing if we find results
        }
        
      } catch (error) {
        console.error(`❌ ${test.name} failed:`, error);
        testResults[test.name] = {
          success: false,
          error: error.message,
          time: Date.now() - Date.now()
        };
      }
    }

    setTestResults(testResults);
    setLoading(false);
  };

  const testDirectAPI = async () => {
    console.log('🔧 Testing direct API call...');
    setLoading(true);
    setError(null);

    try {
      const url = 'https://aliexpress-datahub.p.rapidapi.com/item_search';
      const params = new URLSearchParams({
        q: 'shirt',
        page: '1',
        limit: '5',
        sort: 'SALE_PRICE_ASC'
      });

      console.log('🌐 Direct API URL:', `${url}?${params}`);
      console.log('🔑 API Key:', API_CONFIG.RAPIDAPI.key ? `${API_CONFIG.RAPIDAPI.key.substring(0, 10)}...` : 'NOT SET');

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_CONFIG.RAPIDAPI.key,
          'X-RapidAPI-Host': API_CONFIG.RAPIDAPI.aliExpressHost
        }
      });

      console.log('📡 Direct API Response status:', response.status);
      console.log('📡 Direct API Response headers:', Object.fromEntries(response.headers.entries()));

      const data = await response.json();
      console.log('📦 Direct API Response data:', data);

      setTestResults({
        'Direct API Test': {
          success: response.ok,
          status: response.status,
          data: data,
          headers: Object.fromEntries(response.headers.entries())
        }
      });

    } catch (error) {
      console.error('❌ Direct API test failed:', error);
      setError(error.message);
    }

    setLoading(false);
  };

  const checkAPIKey = () => {
    const key = API_CONFIG.RAPIDAPI.key;
    const keyInfo = {
      present: !!key,
      length: key ? key.length : 0,
      format: key ? (key.startsWith('sk-') ? 'Stripe-like' : key.startsWith('AIza') ? 'Google-like' : 'RapidAPI-like') : 'None',
      firstChars: key ? key.substring(0, 10) + '...' : 'None',
      lastChars: key ? '...' + key.substring(key.length - 4) : 'None'
    };
    
    setTestResults({
      'API Key Check': keyInfo
    });
    
    console.log('🔑 API Key Info:', keyInfo);
  };

  const testAlternativeEndpoint = async () => {
    console.log('🔧 Testing alternative endpoint...');
    setLoading(true);
    setError(null);

    try {
      // Try a different endpoint that might work better
      const url = 'https://aliexpress-datahub.p.rapidapi.com/item_detail_2';
      const params = new URLSearchParams({
        itemId: '1005005244562338' // A sample product ID from RapidAPI
      });

      console.log('🌐 Alternative API URL:', `${url}?${params}`);

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_CONFIG.RAPIDAPI.key,
          'X-RapidAPI-Host': API_CONFIG.RAPIDAPI.aliExpressHost
        }
      });

      console.log('📡 Alternative API Response status:', response.status);

      const data = await response.json();
      console.log('📦 Alternative API Response data:', data);

      setTestResults({
        'Alternative Endpoint Test': {
          success: response.ok,
          status: response.status,
          data: data
        }
      });

    } catch (error) {
      console.error('❌ Alternative endpoint test failed:', error);
      setError(error.message);
    }

    setLoading(false);
  };

  const testWithoutFilters = async () => {
    console.log('🔧 Testing without any filters...');
    setLoading(true);
    setError(null);

    try {
      const url = 'https://aliexpress-datahub.p.rapidapi.com/item_search';
      const params = new URLSearchParams({
        q: 'a', // Very simple query
        page: '1',
        limit: '5'
      });

      console.log('🌐 Simple API URL:', `${url}?${params}`);

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_CONFIG.RAPIDAPI.key,
          'X-RapidAPI-Host': API_CONFIG.RAPIDAPI.aliExpressHost
        }
      });

      console.log('📡 Simple API Response status:', response.status);

      const data = await response.json();
      console.log('📦 Simple API Response data:', data);

      setTestResults({
        'Simple Search Test': {
          success: response.ok,
          status: response.status,
          data: data
        }
      });

    } catch (error) {
      console.error('❌ Simple search test failed:', error);
      setError(error.message);
    }

    setLoading(false);
  };

  const testSearchV2 = async () => {
    console.log('🔧 Testing search v2 endpoint...');
    setLoading(true);
    setError(null);

    try {
      // Try the v2 search endpoint
      const url = 'https://aliexpress-datahub.p.rapidapi.com/item_search_2';
      const params = new URLSearchParams({
        q: 'shirt',
        page: '1',
        limit: '5'
      });

      console.log('🌐 Search V2 API URL:', `${url}?${params}`);

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_CONFIG.RAPIDAPI.key,
          'X-RapidAPI-Host': API_CONFIG.RAPIDAPI.aliExpressHost
        }
      });

      console.log('📡 Search V2 API Response status:', response.status);

      const data = await response.json();
      console.log('📦 Search V2 API Response data:', data);

      setTestResults({
        'Search V2 Test': {
          success: response.ok,
          status: response.status,
          data: data
        }
      });

    } catch (error) {
      console.error('❌ Search V2 test failed:', error);
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>🧪 API Test Component</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={checkAPIKey}
          style={{ marginRight: '10px', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          🔑 Check API Key
        </button>
        
        <button 
          onClick={testDirectAPI}
          style={{ marginRight: '10px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          🔧 Test Direct API
        </button>
        
        <button 
          onClick={testWithoutFilters}
          style={{ marginRight: '10px', padding: '10px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '5px' }}
        >
          🔍 Simple Search
        </button>
        
        <button 
          onClick={testAlternativeEndpoint}
          style={{ marginRight: '10px', padding: '10px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          🔄 Alternative Endpoint
        </button>
        
        <button 
          onClick={testSearchV2}
          style={{ marginRight: '10px', padding: '10px', backgroundColor: '#6f42c1', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          🔍 Search V2
        </button>
        
        <button 
          onClick={runComprehensiveTest}
          disabled={loading}
          style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          {loading ? '🔄 Testing...' : '🧪 Run Comprehensive Test'}
        </button>
      </div>

      {error && (
        <div style={{ padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '5px', marginBottom: '20px' }}>
          ❌ Error: {error}
        </div>
      )}

      {Object.keys(testResults).length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h3>📊 Test Results:</h3>
          <pre style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', overflow: 'auto', maxHeight: '400px' }}>
            {JSON.stringify(testResults, null, 2)}
          </pre>
        </div>
      )}

      {results.length > 0 && (
        <div>
          <h3>📦 Found Products ({results.length}):</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {results.map((product, index) => (
              <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                <h4>{product.title}</h4>
                <p>Price: ${product.finalPrice} {product.currency}</p>
                <p>Platform: {product.platform}</p>
                <p>Category: {product.category}</p>
                {product.images && product.images.length > 0 && (
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default APITest; 