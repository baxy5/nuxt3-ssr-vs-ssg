<template>
  <div>
    <UContainer class="py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Server-Side Rendering Demo
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
          This page demonstrates Nuxt.js SSR capabilities
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <UCard>
            <template #header>
              <h3 class="font-semibold">Server Time</h3>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ data.serverTime }}
            </p>
          </UCard>
          <UCard>
            <template #header>
              <h3 class="font-semibold">Request Headers</h3>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              User-Agent: {{ data.userAgent }}
            </p>
          </UCard>
          <UCard>
            <template #header>
              <h3 class="font-semibold">Hydration Status</h3>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ hydrated ? 'Hydrated' : 'Server-rendered' }}
            </p>
          </UCard>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold">API Data (Server-fetched)</h2>
          </template>
          <div class="space-y-4">
            <div v-for="post in data.posts" :key="post.id" class="border-b pb-4">
              <h3 class="font-semibold text-lg">{{ post.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ post.body }}</p>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold">SSR Benefits</h2>
          </template>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1" />
              <div>
                <h3 class="font-semibold">SEO Optimization</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Search engines can crawl fully rendered content
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1" />
              <div>
                <h3 class="font-semibold">Faster First Paint</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Users see content immediately on page load
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1" />
              <div>
                <h3 class="font-semibold">Better Performance</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Reduced client-side JavaScript execution
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <div class="mt-8 text-center">
        <UButton 
          to="/ssr-demo" 
          color="primary" 
          size="lg"
          class="mr-4"
        >
          View Advanced SSR Demo
        </UButton>
        <UButton 
          to="/csr-demo" 
          variant="outline" 
          size="lg"
        >
          Compare with CSR
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
// This data is fetched on the server during SSR
const { data } = await $fetch('/api/ssr-data')

// Client-side hydration tracking
const hydrated = ref(false)

// Track hydration status
onMounted(() => {
  hydrated.value = true
})

// SEO meta tags - these are rendered on the server
useSeoMeta({
  title: 'SSR Demo - Nuxt.js Server-Side Rendering',
  description: 'A comprehensive example demonstrating server-side rendering capabilities with Nuxt.js including data fetching, SEO optimization, and performance benefits.',
  ogTitle: 'SSR Demo - Nuxt.js Server-Side Rendering',
  ogDescription: 'Learn how Nuxt.js enables powerful server-side rendering for better SEO and performance.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})

// Structured data for search engines
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'SSR Demo - Nuxt.js Server-Side Rendering',
        description: 'A comprehensive example demonstrating server-side rendering capabilities with Nuxt.js',
        url: 'https://example.com/ssr-demo'
      })
    }
  ]
})
</script>