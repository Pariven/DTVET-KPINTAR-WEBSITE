# 🚀 DEPLOY TO PRODUCTION - GITHUB

# Add all files to git
Write-Host "📦 Adding files to Git..." -ForegroundColor Green
git add .

# Commit with production message  
Write-Host "💾 Committing production code..." -ForegroundColor Green
git commit -m "🚀 PRODUCTION READY: Live Stripe + Customer-Facing Fees

✅ Features:
- Live Stripe payment integration (pk_live_...)
- Customer-facing fee structure (FPX: +RM1, Cards: +RM2.50)
- All debug code removed for production
- TypeScript errors resolved
- Image optimization completed
- Production environment configured
- Security hardened & performance optimized

🎯 Ready for: https://www.digitaltvetmalaysia.com"

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "✅ DEPLOYMENT COMPLETE!" -ForegroundColor Cyan
Write-Host "🌐 Your website is now ready for Vercel deployment" -ForegroundColor Yellow
Write-Host "🔗 Connect your GitHub repo to Vercel and deploy!" -ForegroundColor Yellow