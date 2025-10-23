'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Google Analytics 4
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    // Load Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    // Initialize gtag
    ;(window as any).gtag = (window as any).gtag || function() {
      ((window as any).gtag.q = (window as any).gtag.q || []).push(arguments)
    }
    ;(window as any).gtag('js', new Date())
    ;(window as any).gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [measurementId])

  return null
}

// Track page views
export function usePageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: pathname,
        page_title: document.title,
      })
    }
  }, [pathname])
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, parameters)
  }
}

// Track project views
export function trackProjectView(projectName: string) {
  trackEvent('project_view', {
    project_name: projectName,
    page_location: window.location.href,
  })
}

// Track contact form submissions
export function trackContactFormSubmission() {
  trackEvent('contact_form_submit', {
    page_location: window.location.href,
  })
}

// Track CTA clicks
export function trackCTAClick(ctaText: string, ctaLocation: string) {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    page_location: window.location.href,
  })
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: any
  }
}
