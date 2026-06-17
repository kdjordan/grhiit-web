# GrHiit Project - Claude AI Configuration

## Project Overview

**GrHiit** is a business-to-consumer fitness application built as a standalone Nuxt.js project:
- **Web Portal**: Nuxt.js application for user registration, subscription management, and SEO content
- **Mobile App**: React Native application (planned) for full fitness experience  
- **Content Strategy**: SEO-optimized articles about training system to drive traffic
- **Revenue Strategy**: Encourage web subscriptions to bypass app store fees

## Current Architecture

### Technology Stack
- **Frontend**: Nuxt.js 3.19.0 with Tailwind CSS v3.4.17
- **Content Management**: Nuxt Content v3.6.3 (stable version with collections support)
- **Package Manager**: npm (converted from pnpm workspaces)
- **Deployment**: Hetzner VPS + Coolify, built from a Dockerfile (SSG output served by nginx)
- **DNS / CDN / Email**: Cloudflare (proxied, Full-strict TLS) + Cloudflare Email Routing
- **Future Backend**: Supabase + Stripe

### Project Structure
```
grhiit-web/ (standalone)
├── app/               # Nuxt application source
├── content/           # Content system for articles  
├── public/            # Static assets
├── Dockerfile         # Multi-stage build: Node 22 generate -> nginx serve
├── nginx.conf         # Static serving (SSG routing, caching, relative redirects)
├── .dockerignore      # Build context exclusions
├── package.json       # Simplified dependency management
└── .claude/           # AI session management & docs
```

## Development Workflow Rules

### 🚨 CRITICAL CONSTRAINTS

#### Server Management
- Claude may start the dev server (`npm run dev`) when needed to verify or preview changes — run it in the background and stop it when done
- Prefer reusing an already-running dev server if one is up; don't spawn duplicates
- The user may also run dev servers themselves in separate terminals

#### Package Management  
- **USE NPM** for standalone project
- **Direct commands**: `npm run dev`, `npm run generate`, etc.
- **No workspace filtering needed** - single package structure

#### Deployment Strategy
- **Platform**: Hetzner VPS + Coolify, **Dockerfile** build pack (port 80)
- **Build**: Docker multi-stage — `npm run generate` produces `.output/public`, served by nginx
- **Auto Deploy**: Pushes to `main` on GitHub (`kdjordan/grhiit-web`) trigger a Coolify rebuild/redeploy
- **TLS / DNS**: Cloudflare proxied with SSL mode **Full (strict)**; origin cert via Let's Encrypt (Traefik)
- **Note**: `amplify.yml` was removed — AWS Amplify is fully decommissioned

## Current Status & Known Issues

### ✅ CONTENT SYSTEM FULLY RESOLVED
**Resolution**: Successfully upgraded to Nuxt 3.19.0 + Content v3.6.3 with working article system

**Solutions That Worked**:
- ✅ Upgraded to stable version combination (avoided Nuxt 4 compatibility issues)
- ✅ Implemented correct Content v3 API: `queryCollection('articles')` with `.all()` method
- ✅ Fixed article routing to use `article.path` property (not `_path`)
- ✅ Configured pure SSG, served as static files via nginx in Docker
- ✅ Articles list and individual article pages working correctly

**Current Status**: 
- ✅ Hetzner/Coolify deployment working with Nuxt 3.19.x + Content v3.6.3
- ✅ Articles loading and displaying properly (both list and individual pages)
- ✅ SEO-optimized static site generation functional
- ✅ Content marketing strategy ready for implementation

### Deployment History
**Migrated off AWS Amplify (June 2026)** to Hetzner + Coolify:
- Added a multi-stage `Dockerfile` (Node 22 build → nginx serve) + `nginx.conf`
- DNS moved Namecheap BasicDNS → Cloudflare; site proxied with Full-strict TLS
- Email moved to Cloudflare Email Routing (SPF/DKIM/DMARC configured)
- AWS Amplify app, Route 53 zone, and `amplify.yml` decommissioned

**Earlier AWS Amplify issues (historical)**: SQLite native binding compilation
failures, build-command/directory errors, and Nuxt Content API mismatches —
all resolved before the Coolify migration. Native deps now build fine in Docker.

**Current Platform**: Hetzner VPS + Coolify, fronted by Cloudflare — live and operational

## AI Behavior Guidelines

### Before Making Any Changes
1. **Check Current Status**: Always reference `.claude/docs/architecture.md` for latest state
2. **Consider SQLite Impact**: Any content-related changes must account for SQLite binding issues
3. **Verify Workspace Context**: Ensure commands use proper pnpm workspace filtering
4. **Static-First Approach**: All solutions must work with static site generation

### Development Approach
- **Native deps are OK now**: The Docker build installs build tools, so `better-sqlite3`/`sqlite3` compile fine (this was an AWS Amplify-era constraint, no longer applies)
- **Standalone, not monorepo**: Single npm package — no pnpm workspace filtering
- **Documentation First**: Update architecture.md for significant changes

### Communication Style
- **Reality Filter**: Never claim solutions are "fixed" until user confirms via testing
- **Label Speculation**: Mark unverified claims as [Inference] or [Unverified]
- **Acknowledge Failures**: Be transparent about previous failed attempts
- **Focus on Root Causes**: Address underlying issues, not just symptoms

## Future Architecture Vision

### Short-term Goals
1. **Resolve Deployment**: Get Nuxt Content working OR implement alternative
2. **Establish Shared Packages**: Create @grhiit/types, @grhiit/supabase-client
3. **Content Management**: Stable article/blog system for SEO

### ✅ Hetzner + Coolify Migration (DONE — June 2026)
- **Platform**: Hetzner VPS + Coolify self-hosted (completed, off AWS Amplify)
- **Cost Savings**: realized — self-hosted vs managed services
- **Full Control**: custom Docker build, room for background jobs / database hosting

## Configuration References

### Coolify Deployment (Dockerfile)
Coolify build pack = **Dockerfile**, exposed port **80**, branch **main**.
The image is a multi-stage build:
```dockerfile
# Build stage: Node 22 + native build tools, then `npm run generate`
FROM node:22-slim AS build
# (installs python3/make/g++ for better-sqlite3/sqlite3, runs npm ci + npm run generate)

# Serve stage: static .output/public via nginx
FROM nginx:alpine AS serve
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.output/public /usr/share/nginx/html
```
`nginx.conf` handles SSG routing, immutable caching for `/_nuxt/`, gzip, and
`absolute_redirect off` (relative redirects so trailing-slash redirects keep
the real host + https behind Cloudflare/Traefik).

### Key Dependencies (package.json)
```json
{
  "@nuxt/content": "^3.6.3",     // Latest stable with collections support
  "nuxt": "^3.19.0",              // Latest stable 3.x (avoiding 4.x compatibility issues)
  "@nuxtjs/tailwindcss": "^6.14.0",
  "vue": "^3.5.20"
}
```

### Working Content v3 API Pattern
```typescript
// Articles list page
const { data: articles } = await useAsyncData('articles-list', async () => {
  const query = queryCollection('articles')
  const all = await query.all()
  return Array.isArray(all) ? all.filter(article => article.published === true) : []
})

// Individual article page  
const { data: article } = await useAsyncData(`article-${slug}`, async () => {
  const query = queryCollection('articles')
  const all = await query.all()
  return all.find(article => article.path === `/articles/${slug}`)
})
```

## Session Management

- **Active Session**: Tracked in `.claude/sessions/`
- **Architecture Updates**: Document significant changes in `.claude/docs/architecture.md`
- **Issue Tracking**: Maintain current status and blocker information

---

**Last Updated**: June 2026  
**Status**: ✅ FULLY OPERATIONAL - Migrated off AWS Amplify to Hetzner + Coolify, fronted by Cloudflare  
**Architecture**: Standalone Nuxt SSG, Docker/nginx on Coolify; DNS/CDN/email on Cloudflare  
**Next Priority**: Content marketing strategy implementation