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
          Advanced SSR Demo
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Demonstrating advanced server-side rendering techniques
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold">User Location (IP-based)</h2>
          </template>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-map-pin" class="text-blue-500" />
              <div>
                <p class="font-semibold">Country: {{ locationData.country }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  IP: {{ locationData.ip }}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-clock" class="text-green-500" />
              <div>
                <p class="font-semibold">Timezone: {{ locationData.timezone }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Local Time: {{ localTime }}
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold">Performance Metrics</h2>
          </template>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded">
                <p class="text-2xl font-bold text-green-600">{{ ssrMetrics.renderTime }}ms</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Server Render Time</p>
              </div>
              <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded">
                <p class="text-2xl font-bold text-blue-600">{{ ssrMetrics.dataFetchTime }}ms</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Data Fetch Time</p>
              </div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded">
              <p class="text-2xl font-bold text-purple-600">{{ ssrMetrics.totalResponseTime }}ms</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Total Response Time</p>
            </div>
          </div>
        </UCard>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <UCard>
          <template #header>
            <h2 class="text-xl font-bold">Dynamic Content</h2>
          </template>
          <div class="space-y-4">
            <div v-for="item in dynamicContent" :key="item.id" class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold">{{ item.title }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.content }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-500">{{ item.timestamp }}</p>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-xl font-bold">Server Environment</h2>
          </template>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-sm text-gray-600 dark:text-gray-400">Node.js Version:</span>
              <span class="text-sm font-mono">{{ serverEnv.nodeVersion }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600 dark:text-gray-400">Platform:</span>
              <span class="text-sm font-mono">{{ serverEnv.platform }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600 dark:text-gray-400">Memory Usage:</span>
              <span class="text-sm font-mono">{{ serverEnv.memoryUsage }}MB</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600 dark:text-gray-400">Uptime:</span>
              <span class="text-sm font-mono">{{ serverEnv.uptime }}s</span>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-xl font-bold">SEO Validation</h2>
          </template>
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-green-500" />
              <span class="text-sm">Meta tags rendered</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-green-500" />
              <span class="text-sm">Structured data included</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-green-500" />
              <span class="text-sm">Open Graph tags</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-green-500" />
              <span class="text-sm">Twitter Card meta</span>
            </div>
          </div>
        </UCard>
      </div>

      <div class="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 class="text-lg font-semibold mb-4">SSR Benefits Demonstrated</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-blue-700 dark:text-blue-300">Server-Side Processing</h4>
            <ul class="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>• IP-based location detection</li>
              <li>• Server environment information</li>
              <li>• Real-time performance metrics</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-blue-700 dark:text-blue-300">SEO & Performance</h4>
            <ul class="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>• Pre-rendered content for crawlers</li>
              <li>• Optimized meta tags</li>
              <li>• Faster initial page load</li>
            </ul>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
// Fetch advanced SSR data
const { data: advancedData } = await $fetch('/api/advanced-ssr-data')

// Destructure the data for easier access
const { 
  locationData, 
  ssrMetrics, 
  dynamicContent, 
  serverEnv 
} = advancedData

// Client-side reactive local time
const localTime = ref('')

// Update local time every second on client
onMounted(() => {
  const updateTime = () => {
    localTime.value = new Date().toLocaleTimeString()
  }
  updateTime()
  setInterval(updateTime, 1000)
})

// Advanced SEO setup
useSeoMeta({
  title: 'Advanced SSR Demo - Real-time Server-Side Rendering',
  description: 'Advanced demonstration of Nuxt.js server-side rendering capabilities including real-time data, performance metrics, and server environment information.',
  ogTitle: 'Advanced SSR Demo - Real-time Server-Side Rendering',
  ogDescription: 'See server-side rendering in action with real-time data, performance metrics, and advanced techniques.',
  ogImage: '/og-advanced-ssr.jpg',
  twitterCard: 'summary_large_image',
  keywords: 'SSR, server-side rendering, Nuxt.js, performance, SEO, real-time data'
})

// Structured data for advanced demo
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Advanced SSR Demo',
        description: 'Advanced demonstration of server-side rendering capabilities',
        url: 'https://example.com/ssr-demo',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web'
      })
    }
  ]
})
</script>