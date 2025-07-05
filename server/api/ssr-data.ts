export default defineEventHandler(async (event) => {
  // Get request headers to demonstrate server-side access
  const headers = getHeaders(event)
  const userAgent = headers['user-agent'] || 'Unknown'
  
  // Get server time to prove this runs on the server
  const serverTime = new Date().toISOString()
  
  // Simulate fetching data from an external API
  // In a real app, this could be a database query or external API call
  const posts = [
    {
      id: 1,
      title: 'Understanding Server-Side Rendering',
      body: 'SSR renders your Vue components on the server before sending HTML to the client, improving SEO and initial load performance.'
    },
    {
      id: 2,
      title: 'Nuxt.js Auto-imports',
      body: 'Nuxt.js automatically imports Vue composables, utilities, and components, making development faster and more efficient.'
    },
    {
      id: 3,
      title: 'Universal Rendering',
      body: 'With Nuxt.js, you get the best of both worlds: server-side rendering for SEO and client-side navigation for user experience.'
    }
  ]
  
  // Simulate some processing time
  await new Promise<void>(resolve => setTimeout(resolve, 100))
  
  return {
    serverTime,
    userAgent: userAgent.substring(0, 50) + '...', // Truncate for display
    posts,
    message: 'This data was fetched on the server during SSR!'
  }
})