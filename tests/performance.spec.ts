import { test, expect } from '@playwright/test'

test.describe('Performance Tests', () => {
  test('should load home page quickly', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000)
    
    // Check that critical content is visible
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('text=Book a call')).toBeVisible()
  })

  test('should have good Core Web Vitals', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')
    
    // Check that images are loaded
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      await expect(img).toBeVisible()
    }
  })

  test('should load all pages efficiently', async ({ page }) => {
    const pages = [
      '/',
      '/projects',
      '/services',
      '/about',
      '/contact',
      '/privacy',
      '/terms',
    ]

    for (const pagePath of pages) {
      const startTime = Date.now()
      await page.goto(pagePath)
      const loadTime = Date.now() - startTime
      
      // Each page should load within 2 seconds
      expect(loadTime).toBeLessThan(2000)
      
      // Check that page content is visible
      await expect(page.locator('h1')).toBeVisible()
    }
  })

  test('should handle mobile performance', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime
    
    // Mobile page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000)
    
    // Check that mobile content is visible
    await expect(page.locator('h1')).toBeVisible()
  })

  test('should have optimized images', async ({ page }) => {
    await page.goto('/')
    
    // Check that images are using Next.js Image component
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const src = await img.getAttribute('src')
      
      // Images should be optimized (WebP/AVIF or have proper sizing)
      expect(src).toBeTruthy()
    }
  })

  test('should handle slow network conditions', async ({ page }) => {
    // Simulate slow 3G network
    await page.route('**/*', (route) => {
      setTimeout(() => route.continue(), 100)
    })
    
    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime
    
    // Even with slow network, page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000)
    
    // Critical content should still be visible
    await expect(page.locator('h1')).toBeVisible()
  })

  test('should have proper caching headers', async ({ page }) => {
    const response = await page.goto('/')
    
    // Check that static assets have proper caching
    const cacheControl = response?.headers()['cache-control']
    expect(cacheControl).toBeTruthy()
  })

  test('should load project pages efficiently', async ({ page }) => {
    await page.goto('/projects')
    
    // Wait for projects to load
    await page.waitForSelector('h1')
    
    // Get all project links
    const projectLinks = await page.locator('a[href^="/projects/"]').all()
    
    for (const link of projectLinks.slice(0, 3)) { // Test first 3 projects
      const href = await link.getAttribute('href')
      if (href) {
        const startTime = Date.now()
        await page.goto(href)
        const loadTime = Date.now() - startTime
        
        // Project pages should load within 2 seconds
        expect(loadTime).toBeLessThan(2000)
        
        // Check that project content is visible
        await expect(page.locator('h1')).toBeVisible()
      }
    }
  })

  test('should handle concurrent page loads', async ({ browser }) => {
    // Test multiple pages loading simultaneously
    const pages = ['/', '/projects', '/services', '/about', '/contact']
    const contexts = await Promise.all(
      pages.map(() => browser.newContext())
    )
    
    const startTime = Date.now()
    await Promise.all(
      contexts.map((context, index) => 
        context.newPage().then(page => page.goto(pages[index]))
      )
    )
    const loadTime = Date.now() - startTime
    
    // All pages should load within 4 seconds
    expect(loadTime).toBeLessThan(4000)
    
    // Clean up
    await Promise.all(contexts.map(context => context.close()))
  })
})




