// app/api/test/route.js
export async function GET(request) {
  console.log('Test API - GET method called');
  
  return new Response(
    JSON.stringify({ 
      status: "Ok", 
      message: "Test API is working perfectly!",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV
    }),
    { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    }
  );
}

export async function POST(request) {
  console.log('Test API - POST method called');
  
  try {
    const body = await request.json();
    console.log('Test API - Received data:', body);
    
    return new Response(
      JSON.stringify({ 
        status: "Ok", 
        message: "POST request received successfully!",
        receivedData: body,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  } catch (error) {
    console.error('Test API - Error:', error);
    
    return new Response(
      JSON.stringify({ 
        status: "Error", 
        message: "Failed to process test request",
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}

export async function OPTIONS(request) {
  console.log('Test API - OPTIONS method called');
  
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    },
  });
}