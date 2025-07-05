<template>
  <div>
    <UContainer class="py-8">
      <div class="mb-8">
        <UButton 
          to="/" 
          variant="ghost" 
          icon="i-heroicons-arrow-left"
          class="mb-4"
        >
          Back to Home
        </UButton>
        
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Client-Side Rendering Demo
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Demonstrating client-side rendering vs server-side rendering
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold">Loading States</h2>
          </template>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <UIcon 
                :name="isLoading ? 'i-heroicons-arrow-path' : 'i-heroicons-check-circle'" 
                :class="isLoading ? 'text-blue-500 animate-spin' : 'text-green-500'"
              />
              <span class="font-semibold">
                {{ isLoading ? 'Loading data...' : 'Data loaded!' }}
              </span>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <p>Page mounted: {{ pageMounted ? 'Yes' : 'No' }}</p>
              <p>Data fetched: {{ dataFetched ? 'Yes' : 'No' }}</p>
              <p>Loading time: {{ loadingTime }}ms</p>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold">CSR vs SSR Comparison</h2>
          </template>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded">
                <p class="text-lg font-bold text-red-600">CSR</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Client-side</p>
              </div>
              <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded">
                <p class="text-lg font-bold text-green-600">SSR</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Server-side</p>
              </div>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <p>This page demonstrates CSR - data is fetched after the page loads.</p>
              <p>Compare with the SSR demo where data is available immediately.</p>
            </div>
          </div>
        </UCard>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold">Client-fetched Data</h2>
          </template>
          <div v-if="isLoading" class="text-center py-8">
            <UIcon name="i-heroicons-arrow-path" class="text-blue-500 animate-spin text-4xl mb-4" />
            <p class="text-gray-600 dark:text-gray-400">Loading posts...</p>
          </div>
          <div v-else-if="posts.length > 0" class="space-y-4">
            <div v-for="post in posts" :key="post.id" class="border-b pb-4 last:border-b-0">
              <h3 class="font-semibold text-lg">{{ post.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ post.body }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Fetched at: {{ fetchedAt }}
              </p>
            </div>
          </div>
          <div v-else class="text-center py-8">
            <p class="text-gray-600 dark:text-gray-400">No data available</p>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold">Performance Impact</h2>
          </template>
          <div class="space-y-4">
            <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <h3 class="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                CSR Drawbacks
              </h3>
              <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Loading states visible to users</li>
                <li>• SEO crawlers see empty content</li>
                <li>• Slower perceived performance</li>
                <li>• Network requests after page load</li>
              </ul>
            </div>
            
            <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded">
              <h3 class="font-semibold text-green-700 dark:text-green-300 mb-2">
                SSR Advantages
              </h3>
              <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Immediate content visibility</li>
                <li>• Better SEO and crawlability</li>
                <li>• Faster first meaningful paint</li>
                <li>• Pre-rendered content delivery</li>
              </ul>
            </div>
          </div>
        </UCard>
      </div>

      <div class="mt-8 text-center">
        <UButton 
          @click="refetchData" 
          :loading="isLoading"
          color="primary" 
          size="lg"
          class="mr-4"
        >
          Refetch Data
        </UButton>
        <UButton 
          to="/" 
          variant="outline" 
          size="lg"
        >
          Compare with SSR
        </UButton>
      </div>

      <div class="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
        <h3 class="text-lg font-semibold mb-4">Understanding the Difference</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-orange-700 dark:text-orange-300 mb-2">
              This Page (CSR)
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Data is fetched after the page loads and components mount. Users see loading states.
            </p>
            <div class="text-xs text-gray-500 dark:text-gray-500 font-mono">
              1. HTML loads (empty content)<br>
              2. JavaScript executes<br>
              3. Components mount<br>
              4. API calls made<br>
              5. Data displays
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-orange-700 dark:text-orange-300 mb-2">
              SSR Pages
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Data is fetched on the server. Users see content immediately.
            </p>
            <div class="text-xs text-gray-500 dark:text-gray-500 font-mono">
              1. Server fetches data<br>
              2. HTML rendered with content<br>
              3. Full page sent to client<br>
              4. JavaScript hydrates<br>
              5. Interactive immediately
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
// CSR data fetching - happens after component mounts
const posts = ref([])
const isLoading = ref(true)
const dataFetched = ref(false)
const pageMounted = ref(false)
const fetchedAt = ref('')
const loadingTime = ref(0)

const fetchData = async () => {
  const startTime = Date.now()
  isLoading.value = true
  dataFetched.value = false
  
  try {
    // Simulate network delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const response = await $fetch('/api/csr-data')
    posts.value = response.posts
    fetchedAt.value = new Date().toLocaleTimeString()
    dataFetched.value = true
    loadingTime.value = Date.now() - startTime
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    isLoading.value = false
  }
}

const refetchData = () => {
  fetchData()
}

// This runs after component mounts (client-side only)
onMounted(() => {
  pageMounted.value = true
  fetchData()
})

// SEO meta tags - note the difference in description
useSeoMeta({
  title: 'CSR Demo - Client-Side Rendering Example',
  description: 'Demonstration of client-side rendering showing loading states and performance differences compared to server-side rendering.',
  ogTitle: 'CSR Demo - Client-Side Rendering Example',
  ogDescription: 'See how client-side rendering works and compare with server-side rendering.',
  ogImage: '/og-csr-demo.jpg',
  twitterCard: 'summary_large_image',
  keywords: 'CSR, client-side rendering, SPA, loading states, performance comparison'
})
</script>