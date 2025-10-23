import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/')

    // Test navigation links
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
    }
  })

  test('should have working dark mode toggle', async ({ page }) => {
    await page.goto('/')
    
    // Check if dark mode toggle exists
    const themeToggle = page.locator('[aria-label="Toggle theme"]')
    await expect(themeToggle).toBeVisible()
    
    // Click toggle and check if dark class is added
    await themeToggle.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })
})

test.describe('Home Page', () => {
  test('should display hero section', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('h1')).toContainText('Michelle Sauder')
    await expect(page.locator('text=Book a call')).toBeVisible()
    await expect(page.locator('text=View Projects')).toBeVisible()
  })

  test('should display featured projects', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('text=Featured Projects')).toBeVisible()
    // Check if project cards are visible
    await expect(page.locator('[data-testid="project-card"]').first()).toBeVisible()
  })

  test('should display services teaser', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('text=Services')).toBeVisible()
    await expect(page.locator('text=Cloud Architecture')).toBeVisible()
    await expect(page.locator('text=Backend & APIs')).toBeVisible()
    await expect(page.locator('text=AI Integrations')).toBeVisible()
    await expect(page.locator('text=DevOps & Observability')).toBeVisible()
  })
})

test.describe('Projects Page', () => {
  test('should display projects list', async ({ page }) => {
    await page.goto('/projects')
    
    await expect(page.locator('h1')).toContainText('Projects')
    await expect(page.locator('text=Search projects')).toBeVisible()
  })
})

test.describe('Services Page', () => {
  test('should display all services', async ({ page }) => {
    await page.goto('/services')
    
    await expect(page.locator('h1')).toContainText('Services')
    await expect(page.locator('text=Cloud Architecture')).toBeVisible()
    await expect(page.locator('text=Backend & APIs')).toBeVisible()
    await expect(page.locator('text=AI Integrations')).toBeVisible()
    await expect(page.locator('text=DevOps & Observability')).toBeVisible()
  })
})

test.describe('About Page', () => {
  test('should display about content', async ({ page }) => {
    await page.goto('/about')
    
    await expect(page.locator('h1')).toContainText('About Me')
    await expect(page.locator('text=My Philosophy')).toBeVisible()
    await expect(page.locator('text=Technical Expertise')).toBeVisible()
  })
})

test.describe('Contact Page', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/contact')
    
    await expect(page.locator('h1')).toContainText('Get in Touch')
    await expect(page.locator('input[name="name"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('textarea[name="message"]')).toBeVisible()
  })
})

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/')
    
    const h1 = page.locator('h1')
    await expect(h1).toHaveCount(1)
    
    // Check if headings are properly structured
    const headings = page.locator('h1, h2, h3, h4, h5, h6')
    const headingCount = await headings.count()
    expect(headingCount).toBeGreaterThanOrEqual(3)
  })

  test('should have proper focus management', async ({ page }) => {
    await page.goto('/')
    
    // Test keyboard navigation
    await page.keyboard.press('Tab')
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })
})
