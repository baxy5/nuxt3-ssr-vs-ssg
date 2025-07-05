export default defineEventHandler(async (event) => {
  const startTime = Date.now()
  
  // Get client IP and headers
  const headers = getHeaders(event)
  const clientIP = headers['x-forwarded-for'] || headers['x-real-ip'] || '127.0.0.1'
  
  // Mock location data (in real app, you'd use IP geolocation service)
  const locationData = {
    ip: clientIP,
    country: 'United States',
    timezone: 'America/New_York',
    city: 'New York'
  }
  
  // Server environment information
  const serverEnv = {
    nodeVersion: process.version,
    platform: process.platform,
    memoryUsage: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
    uptime: Math.round(process.uptime())
  }
  
  // Dynamic content with timestamps
  const dynamicContent = [
    {
      id: 1,
      title: 'Real-time Server Data',
      content: 'This content was generated on the server at request time.',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Performance Optimization',
      content: 'SSR allows for server-side caching and optimization strategies.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString() // 5 minutes ago
    },
    {
      id: 3,
      title: 'SEO Benefits',
      content: 'Search engines can fully index this pre-rendered content.',
      timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString() // 10 minutes ago
    }
  ]
  
  // Simulate data fetching time
  const dataFetchStart = Date.now()
  await new Promise<void>(resolve => setTimeout(resolve, 50))
  const dataFetchTime = Date.now() - dataFetchStart
  
  // Calculate render time
  const renderTime = Math.floor(Math.random() * 20) + 10 // 10-30ms simulated render time
  
  const totalResponseTime = Date.now() - startTime
  
  // Performance metrics
  const ssrMetrics = {
    renderTime,
    dataFetchTime,
    totalResponseTime
  }
  
  return {
    locationData,
    serverEnv,
    dynamicContent,
    ssrMetrics,
    generatedAt: new Date().toISOString(),
    requestHeaders: {
      userAgent: headers['user-agent']?.substring(0, 100) + '...',
      accept: headers.accept?.substring(0, 50) + '...',
      acceptLanguage: headers['accept-language']?.substring(0, 30) + '...'
    }
  }
})