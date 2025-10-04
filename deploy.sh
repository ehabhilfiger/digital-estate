#!/bin/bash
# Quick Deploy Script for Digital Estate

echo "🚀 Deploying Digital Estate Architect to Vercel..."
echo ""
echo "Project: Ehab Allababidi - Digital Estate"
echo "Location: C:\Users\defco\digital-estate"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project directory"
    echo "Run: cd C:\Users\defco\digital-estate"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "Ready to deploy! Choose an option:"
echo ""
echo "1. Deploy to Vercel (recommended):"
echo "   vercel --prod"
echo ""
echo "2. Test locally first:"
echo "   npm start"
echo "   Then visit: http://localhost:3000"
echo ""
echo "3. Deploy preview:"
echo "   vercel"
echo ""

read -p "Deploy now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "🚀 Deploying to production..."
    vercel --prod
fi
