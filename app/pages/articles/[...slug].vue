<template>
  <NuxtLayout name="article">
    <!-- Header slot -->
    <template #header>
      <div class="max-w-3xl">
        <!-- Tags -->
        <div v-if="article?.tags && article.tags.length > 0" class="flex flex-wrap gap-3 mb-6">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="font-mono text-xs uppercase tracking-widest text-grhiit-red bg-grhiit-red/10 px-3 py-1"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase text-grhiit-white tracking-tight-brutal leading-brutal">
          {{ article?.title }}
        </h1>

        <!-- Description -->
        <p v-if="article?.description" class="mt-6 text-xl md:text-2xl font-body text-grhiit-white/70 leading-relaxed">
          {{ article.description }}
        </p>

        <!-- Meta -->
        <div class="mt-8 flex flex-wrap items-center gap-6 text-sm border-t border-grhiit-gray-800 pt-6">
          <span v-if="article?.date" class="font-mono text-grhiit-white/50">
            {{ article.date }}
          </span>
          <span v-if="article?.author" class="font-body text-grhiit-white/60">
            By <span class="text-grhiit-white">{{ article.author }}</span>
          </span>
          <span v-if="article?.readingTime" class="font-mono text-grhiit-white/40">
            {{ article.readingTime }} min read
          </span>
        </div>
      </div>
    </template>

    <!-- Article content -->
    <article v-if="article" class="prose prose-lg">
      <ContentRenderer :value="article" />
    </article>

    <!-- 404 state -->
    <div v-else class="text-center py-20">
      <div class="font-display font-bold text-3xl text-grhiit-white uppercase mb-4">Article Not Found</div>
      <p class="font-body text-grhiit-white/60 mb-8">The article you're looking for doesn't exist.</p>
      <NuxtLink
        to="/articles"
        class="inline-block px-8 py-3 bg-grhiit-red text-grhiit-white font-display font-bold uppercase tracking-widest hover:bg-grhiit-red-dark transition-colors"
      >
        Browse Articles
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const { data: article } = await useAsyncData(`article-${slug}`, async () => {
  try {
    const query = queryCollection('articles')
    const all = await query.all()

    if (Array.isArray(all)) {
      const found = all.find(article =>
        article.path === `/articles/${slug}` ||
        article._path === `/articles/${slug}` ||
        article.stem === slug ||
        article.path?.endsWith(slug) ||
        article._path?.endsWith(slug)
      )
      return found || null
    }

    return null
  } catch (err) {
    console.error('Error loading article:', err)
    return null
  }
})

// Handle 404
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

// SEO meta tags
useHead({
  title: `${article.value?.title} | GRHIIT`,
  meta: [
    { name: 'description', content: article.value?.description },
    { property: 'og:title', content: article.value?.title },
    { property: 'og:description', content: article.value?.description },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:title', content: article.value?.title },
    { name: 'twitter:description', content: article.value?.description }
  ]
})
</script>
