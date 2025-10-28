'use client'

import React, { useEffect, useState } from 'react'

export function useAccessibility() {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState('normal')

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    setIsHighContrast(highContrastQuery.matches)

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches)
    }

    highContrastQuery.addEventListener('change', handleContrastChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      highContrastQuery.removeEventListener('change', handleContrastChange)
    }
  }, [])

  const increaseFontSize = () => {
    const currentSize = document.documentElement.style.fontSize || '16px'
    const newSize = Math.min(parseInt(currentSize) + 2, 24)
    document.documentElement.style.fontSize = `${newSize}px`
    setFontSize(newSize > 18 ? 'large' : 'normal')
  }

  const decreaseFontSize = () => {
    const currentSize = document.documentElement.style.fontSize || '16px'
    const newSize = Math.max(parseInt(currentSize) - 2, 12)
    document.documentElement.style.fontSize = `${newSize}px`
    setFontSize(newSize < 14 ? 'small' : 'normal')
  }

  const resetFontSize = () => {
    document.documentElement.style.fontSize = '16px'
    setFontSize('normal')
  }

  return {
    isReducedMotion,
    isHighContrast,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  }
}

export function AccessibilityToolbar() {
  const { increaseFontSize, decreaseFontSize, resetFontSize, fontSize } = useAccessibility()

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
      <div className="flex items-center space-x-2">
        <button
          onClick={decreaseFontSize}
          className="p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          aria-label="Decrease font size"
          title="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={resetFontSize}
          className="p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          aria-label="Reset font size"
          title="Reset font size"
        >
          A
        </button>
        <button
          onClick={increaseFontSize}
          className="p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          aria-label="Increase font size"
          title="Increase font size"
        >
          A+
        </button>
      </div>
    </div>
  )
}

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 transition-all"
    >
      Skip to main content
    </a>
  )
}

export function FocusIndicator() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      *:focus:not(:focus-visible) {
        outline: none !important;
      }
      
      *:focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}




