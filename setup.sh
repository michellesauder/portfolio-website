#!/bin/bash

# Portfolio Website Development Environment Setup
# This script sets up a complete development environment with all tools

set -e

echo "🚀 Setting up Portfolio Website Development Environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js $(node -v) detected"

# Install dependencies
print_status "Installing dependencies..."
npm install

# Install Playwright browsers
print_status "Installing Playwright browsers..."
npx playwright install

# Setup Git hooks
print_status "Setting up Git hooks..."
npx husky install

# Run initial quality checks
print_status "Running initial quality checks..."

print_status "Running ESLint..."
npm run lint:fix

print_status "Running Prettier..."
npm run format

print_status "Running TypeScript check..."
npm run type-check

# Build the application
print_status "Building application..."
npm run build

# Build Storybook
print_status "Building Storybook..."
npm run build-storybook

print_success "Development environment setup complete!"

echo ""
echo "📋 Available commands:"
echo "  npm run dev              - Start development server"
echo "  npm run storybook         - Start Storybook"
echo "  npm run test              - Run Playwright tests"
echo "  npm run test:ui           - Run tests with UI"
echo "  npm run analyze           - Analyze bundle size"
echo "  npm run lighthouse        - Run Lighthouse audit"
echo "  npm run lint:fix          - Fix ESLint issues"
echo "  npm run format            - Format code with Prettier"
echo ""
echo "🌐 URLs:"
echo "  Development: http://localhost:3000"
echo "  Storybook:   http://localhost:6006"
echo ""
echo "📚 Documentation:"
echo "  README.md - Complete setup and usage guide"
echo "  .github/workflows/ - CI/CD pipeline configuration"
echo ""
print_success "Happy coding! 🎉"

