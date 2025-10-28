import { test, expect } from '@playwright/test'

test.describe('Accessibility Tests', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/')
    
    // Check that there's only one h1 per page
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)
    
    // Check that headings are properly structured
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
    
    // Test that focus is visible
    const focusStyles = await focusedElement.evaluate((el) => {
      const styles = window.getComputedStyle(el)
      return {
        outline: styles.outline,
        outlineWidth: styles.outlineWidth,
        outlineStyle: styles.outlineStyle,
      }
    })
    
    expect(focusStyles.outlineWidth).not.toBe('0px')
  })

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/')
    
    // Check for aria-label on interactive elements
    const themeToggle = page.locator('[aria-label="Toggle theme"]')
    await expect(themeToggle).toBeVisible()
    
    const mobileMenuButton = page.locator('[aria-label="Toggle menu"]')
    await expect(mobileMenuButton).toBeVisible()
  })

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/')
    
    // Check that all images have alt text
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })

  test('should have proper form labels', async ({ page }) => {
    await page.goto('/contact')
    
    // Check that form inputs have proper labels
    const nameInput = page.locator('input[name="name"]')
    const emailInput = page.locator('input[name="email"]')
    const messageInput = page.locator('textarea[name="message"]')
    
    await expect(nameInput).toBeVisible()
    await expect(emailInput).toBeVisible()
    await expect(messageInput).toBeVisible()
    
    // Check that inputs are properly labeled
    const nameLabel = page.locator('label[for="name"]')
    const emailLabel = page.locator('label[for="email"]')
    const messageLabel = page.locator('label[for="message"]')
    
    await expect(nameLabel).toBeVisible()
    await expect(emailLabel).toBeVisible()
    await expect(messageLabel).toBeVisible()
  })

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/')
    
    // This is a basic test - in a real scenario, you'd use axe-core
    // to check color contrast ratios
    const textElements = page.locator('p, h1, h2, h3, h4, h5, h6, a, button')
    const textCount = await textElements.count()
    
    expect(textCount).toBeGreaterThan(0)
    
    // Check that text is visible (basic contrast check)
    for (let i = 0; i < Math.min(textCount, 10); i++) {
      const element = textElements.nth(i)
      await expect(element).toBeVisible()
    }
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')
    
    // Test tab navigation through interactive elements
    const interactiveElements = page.locator('a, button, input, textarea, select')
    const elementCount = await interactiveElements.count()
    
    expect(elementCount).toBeGreaterThan(0)
    
    // Test that we can tab through elements
    for (let i = 0; i < Math.min(elementCount, 5); i++) {
      await page.keyboard.press('Tab')
      const focusedElement = page.locator(':focus')
      await expect(focusedElement).toBeVisible()
    }
  })

  test('should have proper semantic HTML', async ({ page }) => {
    await page.goto('/')
    
    // Check for semantic HTML elements
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    
    // Check for proper navigation structure
    await expect(page.locator('nav')).toBeVisible()
  })

  test('should work with screen reader', async ({ page }) => {
    await page.goto('/')
    
    // Check that important content is accessible
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    
    // Check that interactive elements are properly labeled
    const buttons = page.locator('button')
    const buttonCount = await buttons.count()
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const ariaLabel = await button.getAttribute('aria-label')
      const textContent = await button.textContent()
      
      // Button should have either aria-label or text content
      expect(ariaLabel || textContent).toBeTruthy()
    }
  })

  test('should have proper link text', async ({ page }) => {
    await page.goto('/')
    
    // Check that links have descriptive text
    const links = page.locator('a')
    const linkCount = await links.count()
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i)
      const text = await link.textContent()
      const ariaLabel = await link.getAttribute('aria-label')
      
      // Link should have either descriptive text or aria-label
      expect(text?.trim() || ariaLabel).toBeTruthy()
    }
  })
})




