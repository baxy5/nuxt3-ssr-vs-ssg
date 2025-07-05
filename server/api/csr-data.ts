export default defineEventHandler(async (event) => {
  // Simulate API processing time
  await new Promise<void>(resolve => setTimeout(resolve, 200))
  
  // Return data similar to SSR but with CSR-specific messaging
  const posts = [
    {
      id: 1,
      title: 'Client-Side Rendering Example',
      body: 'This data was fetched from the client after the page loaded. Notice the loading state you saw before this appeared.'
    },
    {
      id: 2,
      title: 'Loading States in CSR',
      body: 'Client-side rendering often requires loading states while waiting for API responses, which can impact user experience.'
    },
    {
      id: 3,
      title: 'SEO Considerations',
      body: 'Search engine crawlers may not wait for JavaScript to execute and load this content, potentially impacting SEO rankings.'
    },
    {
      id: 4,
      title: 'Performance Trade-offs',
      body: 'While CSR can provide smooth navigation after initial load, the first page load typically takes longer due to additional network requests.'
    }
  ]
  
  return {
    posts,
    fetchedAt: new Date().toISOString(),
    renderType: 'client-side',
    message: 'This data was fetched on the client side after component mounting!'
  }
})