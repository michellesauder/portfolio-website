import { test, expect } from '@playwright/test'

test.describe('Link Verification', () => {
  test('should verify all internal navigation links', async ({ page }) => {
    await page.goto('/')

    // Test main navigation links
    const navLinks = [
      { text: 'Home', href: '/' },
      { text: 'Projects', href: '/projects' },
      { text: 'Services', href: '/services' },
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' },
    ]

    for (const link of navLinks) {
      await page.click(`text=${link.text}`)
      await expect(page).toHaveURL(link.href)
      await expect(page.locator('h1')).toBeVisible()
      
      // Verify page loads without errors
      await expect(page.locator('body')).toBeVisible()
    }
  })

  test('should verify all CTA buttons work', async ({ page }) => {
    await page.goto('/')

    // Test CTA buttons on home page
    await page.click('text=Book a call')
    await expect(page).toHaveURL('/contact')
    
    await page.goBack()
    await page.click('text=View Projects')
    await expect(page).toHaveURL('/projects')
    
    await page.goBack()
    await page.click('text=View All Projects')
    await expect(page).toHaveURL('/projects')
    
    await page.goBack()
    await page.click('text=Learn More')
    await expect(page).toHaveURL('/services')
    
    await page.goBack()
    await page.click('text=Get Started')
    await expect(page).toHaveURL('/contact')
  })

  test('should verify project detail page links', async ({ page }) => {
    await page.goto('/projects')
    
    // Wait for projects to load
    await page.waitForSelector('h1')
    
    // Click on first project card
    const firstProjectCard = page.locator('[data-testid="project-card"]').first()
    if (await firstProjectCard.count() > 0) {
      await firstProjectCard.click()
      
      // Should navigate to project detail page
      await expect(page).toHaveURL(/\/projects\/[a-zA-Z0-9-]+/)
      await expect(page.locator('h1')).toBeVisible()
      
      // Test back to projects link
      await page.click('text=Back to Projects')
      await expect(page).toHaveURL('/projects')
    }
  })

  test('should verify footer links work', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    
    // Test footer navigation links
    await page.click('footer a[href="/projects"]')
    await expect(page).toHaveURL('/projects')
    
    await page.goBack()
    await page.click('footer a[href="/services"]')
    await expect(page).toHaveURL('/services')
    
    await page.goBack()
    await page.click('footer a[href="/about"]')
    await expect(page).toHaveURL('/about')
    
    await page.goBack()
    await page.click('footer a[href="/contact"]')
    await expect(page).toHaveURL('/contact')
    
    await page.goBack()
    await page.click('footer a[href="/privacy"]')
    await expect(page).toHaveURL('/privacy')
    
    await page.goBack()
    await page.click('footer a[href="/terms"]')
    await expect(page).toHaveURL('/terms')
  })

  test('should verify external links open correctly', async ({ page, context }) => {
    await page.goto('/')
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    
    // Test external links (they should open in new tabs)
    const [githubPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('footer a[href*="github.com"]')
    ])
    
    await expect(githubPage).toHaveURL(/github\.com/)
    await githubPage.close()
    
    const [linkedinPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('footer a[href*="linkedin.com"]')
    ])
    
    await expect(linkedinPage).toHaveURL(/linkedin\.com/)
    await linkedinPage.close()
  })

  test('should verify email links work', async ({ page }) => {
    await page.goto('/')
    
    // Test email link in CTA section
    const emailLink = page.locator('a[href^="mailto:"]').first()
    await expect(emailLink).toHaveAttribute('href', 'mailto:michelle.g.sauder@gmail.com')
    
    // Test email link in footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    const footerEmailLink = page.locator('footer a[href^="mailto:"]')
    await expect(footerEmailLink).toHaveAttribute('href', 'mailto:michelle.g.sauder@gmail.com')
  })

  test('should verify mobile navigation works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Open mobile menu
    const mobileMenuButton = page.locator('[aria-label="Toggle menu"]')
    await expect(mobileMenuButton).toBeVisible()
    await mobileMenuButton.click()
    
    // Test mobile navigation links
    const mobileNavLinks = [
      { text: 'Home', href: '/' },
      { text: 'Projects', href: '/projects' },
      { text: 'Services', href: '/services' },
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' },
    ]

    for (const link of mobileNavLinks) {
      await page.click(`text=${link.text}`)
      await expect(page).toHaveURL(link.href)
      
      // Mobile menu should close after navigation
      await expect(mobileMenuButton).toBeVisible()
    }
  })

  test('should verify keyboard navigation', async ({ page }) => {
    await page.goto('/')
    
    // Test tab navigation
    await page.keyboard.press('Tab')
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
    
    // Test Enter key on focused links
    await page.keyboard.press('Enter')
    // Should navigate to the focused link's destination
    await expect(page).toHaveURL(/^\/(projects|services|about|contact)$/)
  })

  test('should verify all pages load without 404 errors', async ({ page }) => {
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
      const response = await page.goto(pagePath)
      expect(response?.status()).toBe(200)
      await expect(page.locator('h1')).toBeVisible()
    }
  })

  test('should verify project pages load correctly', async ({ page }) => {
    await page.goto('/projects')
    
    // Get all project links
    const projectLinks = await page.locator('a[href^="/projects/"]').all()
    
    for (const link of projectLinks) {
      const href = await link.getAttribute('href')
      if (href) {
        const response = await page.goto(href)
        expect(response?.status()).toBe(200)
        await expect(page.locator('h1')).toBeVisible()
      }
    }
  })
})




