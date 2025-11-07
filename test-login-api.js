// Simple test script to check login API
const testLoginAPI = async () => {
  try {
    console.log('🧪 Testing login API at http://localhost:3000/api/auth/login');
    
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',  // Change this to a real user email
        password: 'testpassword'     // Change this to a real password
      }),
    });
    
    console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));
    
    const data = await response.text();
    console.log('📡 Response body:', data);
    
    if (response.ok) {
      console.log('✅ Login API is working correctly');
      try {
        const json = JSON.parse(data);
        console.log('✅ Response is valid JSON:', json);
      } catch (e) {
        console.log('❌ Response is not valid JSON');
      }
    } else {
      console.log('❌ Login API returned error');
    }
    
  } catch (error) {
    console.error('💥 Test failed:', error.message);
  }
};

// Run the test if this file is executed directly
if (typeof window === 'undefined') {
  testLoginAPI();
}