// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Use the `app/` directory as the project source to avoid mixing root and app dirs
  srcDir: "app",
  // Explicitly set public directory path
  dir: {
    public: '../public'
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@hypernym/nuxt-gsap"],

  // GSAP Configuration
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },

  // Nuxt Content v3 configuration
  content: {
    // Content config is handled by content.config.ts
  },
  
  css: ["~/assets/css/tailwind.css"],
  
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // Pure SSG Configuration for AWS Amplify (Nuxt 3.x)
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/articles', '/articles/welcome-to-grhiit', '/articles/burpee-history-article']
    }
  },
  
  // Route rules for pre-rendering and caching
  routeRules: {
    "/": { prerender: true },
    "/program": { prerender: true },
    "/about": { prerender: true },
    "/articles": { prerender: true },
    "/articles/**": { prerender: true },
    // Static assets caching
    "/images/**": { headers: { "Cache-Control": "max-age=31536000" } },
    "/_nuxt/**": { headers: { "Cache-Control": "max-age=31536000" } }
  },
  
  // SEO Configuration
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: 'GRHIIT — Stop working out. Start training.',
      titleTemplate: '%s | GRHIIT',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Stop working out. Start training. Six weeks. Eighteen Sessions. Bodyweight only.' },
        { name: 'keywords', content: 'HIIT, bodyweight training, interval training, discipline, burpees, work to rest intervals, tabata' },
        { name: 'author', content: 'GRHIIT' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'GRHIIT — Stop working out. Start training.' },
        { property: 'og:description', content: 'A practice of voluntary discomfort. One Cycle. One price. No subscription.' },
        { property: 'og:image', content: '/og/og-default.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'GRHIIT' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'GRHIIT — Stop working out. Start training.' },
        { name: 'twitter:description', content: 'A practice of voluntary discomfort. One Cycle. One price. No subscription.' },
        { name: 'twitter:image', content: '/og/og-default.jpg' },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        // Google Fonts preconnect for performance
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        // Load Bebas Neue (display - sharp athletic headlines), DM Sans (body), JetBrains Mono (stats)
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
        }
      ],
    }
  }
});
