<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 md:py-32 bg-grhiit-black-warm relative overflow-hidden">
      <!-- Subtle noise texture -->
      <div class="absolute inset-0 opacity-[0.02] pointer-events-none noise-overlay"></div>

      <!-- Red accent bar -->
      <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 md:w-2 h-32 md:h-48 bg-grhiit-red"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="max-w-4xl">
          <h1 class="font-display font-extrabold italic text-5xl md:text-6xl lg:text-7xl uppercase text-grhiit-white tracking-tight-brutal leading-brutal">
            Articles
          </h1>
          <p class="mt-6 text-xl md:text-2xl font-body text-grhiit-white/70 max-w-2xl leading-relaxed">
            Evidence-based training insights. No fluff. Just the science and mindset behind building real capacity.
          </p>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 md:py-24 bg-grhiit-black">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Loading state -->
        <div v-if="!articles" class="text-center py-20">
          <div class="font-mono text-grhiit-white/40 uppercase tracking-widest">Loading...</div>
        </div>

        <!-- Empty state -->
        <div v-else-if="articles.length === 0" class="text-center py-20">
          <div class="font-display font-bold text-2xl text-grhiit-white/60 uppercase mb-4">No articles yet</div>
          <p class="font-body text-grhiit-white/40">Check back soon for training insights.</p>
        </div>

        <!-- Articles grid -->
        <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <article
            v-for="article in articles"
            :key="article.path || article._path || article.id"
            class="group bg-grhiit-gray-900 border-l-[3px] border-grhiit-red hover:border-grhiit-white transition-colors duration-300"
          >
            <NuxtLink
              :to="article.path || article._path || `/articles/${article.stem}`"
              class="block p-6 md:p-8 h-full"
            >
              <!-- Tags -->
              <div v-if="article.tags && article.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in article.tags"
                  :key="tag"
                  class="font-mono text-xs uppercase tracking-widest text-grhiit-red"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Title -->
              <h2 class="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-grhiit-white group-hover:text-grhiit-red transition-colors mb-4">
                {{ article.title }}
              </h2>

              <!-- Description -->
              <p class="font-body text-grhiit-white/60 leading-relaxed mb-6 line-clamp-3">
                {{ article.description }}
              </p>

              <!-- Meta -->
              <div class="flex items-center justify-between text-sm mt-auto pt-4 border-t border-grhiit-gray-800">
                <span class="font-mono text-grhiit-white/40">{{ article.date }}</span>
                <span v-if="article.author" class="font-body text-grhiit-white/50">{{ article.author }}</span>
              </div>

              <!-- Read more indicator -->
              <div class="mt-4 flex items-center gap-2 font-display text-sm uppercase tracking-widest text-grhiit-red opacity-0 group-hover:opacity-100 transition-opacity">
                Read Article
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('articles-list', async () => {
  try {
    const query = queryCollection('articles')
    const all = await query.all()
    return Array.isArray(all) ? all.filter(article => article.published === true) : []
  } catch (err) {
    console.error('Error loading articles:', err)
    return []
  }
})

// SEO
useHead({
  title: 'Articles | GRHIIT',
  meta: [
    { name: 'description', content: 'Evidence-based training insights. The science and mindset behind building real capacity through high-intensity interval training.' }
  ]
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
