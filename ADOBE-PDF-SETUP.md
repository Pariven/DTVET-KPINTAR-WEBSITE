# Adobe PDF Setup Instructions

## ✅ What Has Been Done

1. ✅ Created `/public/pdfs/` directory for storing PDF brochures
2. ✅ Updated all download handlers to use API route for iOS/Android compatibility
3. ✅ Modified download functionality in these components:
   - `certification-detail-content.tsx` (Adobe, and other general certifications)
   - `its-certification-content.tsx` (IT Specialist certifications)
   - `mce-certification-section.tsx` (Microsoft Educator certifications)
   - `mcf-certification-section.tsx` (Microsoft Fundamentals certifications)
   - `mos-certification-section.tsx` (Microsoft Office Specialist certifications)

## 📋 What You Need to Do

### Step 1: Copy Your Adobe PDF Files

You have two options:

#### Option A: Use the PowerShell Script (Recommended)
1. Run the included script: `COPY-ADOBE-PDFS.ps1`
2. This will help you copy PDFs from your Desktop to the project

#### Option B: Manual Copy
1. Navigate to: `C:\Users\Pariventheswaran\Desktop\Files\Adobe`
2. Copy your Adobe PDF files
3. Paste them into: `C:\Users\Pariventheswaran\Downloads\3d-website (2)\public\pdfs\`

### Step 2: Rename the PDF Files

Rename your PDF files to match these **exact** names:

1. **adobe-illustrator-certification.pdf** - For Adobe Illustrator certification
2. **adobe-premiere-certification.pdf** - For Adobe Premiere Pro certification
3. **adobe-after-effects-certification.pdf** - For Adobe After Effects certification
4. **adobe-indesign-certification.pdf** - For Adobe InDesign certification
5. **adobe-photoshop-certification.pdf** - For Adobe Photoshop certification

### Step 3: Test the Downloads

1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/certifications/adobe`
3. Click on any certification card
4. Click the "Download Brochure" button
5. The PDF should download automatically on:
   - ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
   - ✅ iOS (Safari, Chrome)
   - ✅ Android (Chrome, Samsung Internet)

## 🔧 How It Works

The download system uses:
- **API Route**: `/api/download/route.ts` handles file serving
- **Mobile Compatibility**: Uses proper headers for iOS/Android
- **Secure**: Files are served from the `public/pdfs/` directory only
- **User Feedback**: Toast notifications confirm download status

## 📁 File Structure

```
3d-website (2)/
├── public/
│   └── pdfs/
│       ├── adobe-illustrator-certification.pdf
│       ├── adobe-premiere-certification.pdf
│       ├── adobe-after-effects-certification.pdf
│       ├── adobe-indesign-certification.pdf
│       └── adobe-photoshop-certification.pdf
├── app/
│   ├── api/
│   │   └── download/
│   │       └── route.ts (API handler)
│   └── certifications/
│       └── adobe/
│           └── page.tsx (Adobe certifications page)
└── components/
    ├── certification-detail-content.tsx (Updated with new download handler)
    └── ... (other components)
```

## 🎯 Expected Behavior

When a user clicks "Download Brochure":
1. A toast notification appears: "Download started"
2. The PDF downloads automatically to their device
3. On mobile, the browser handles the download according to device settings
4. If download fails, an error toast appears: "Download failed"

## 🐛 Troubleshooting

### PDF doesn't download
- Check that the PDF file exists in `/public/pdfs/`
- Verify the filename matches exactly (case-sensitive)
- Check browser console for errors

### Works on desktop but not mobile
- The API route is designed for mobile compatibility
- Test on actual devices, not just browser emulators
- Some mobile browsers may open PDF in a new tab instead of downloading

### 404 Error
- Ensure PDF files are in the correct directory
- Verify filenames match the expected names
- Restart the development server

## 📱 Mobile Testing Tips

- **iOS**: Test on Safari (default) and Chrome
- **Android**: Test on Chrome and Samsung Internet
- Downloads may go to different locations based on device settings
- Some devices may show a preview before downloading

## ✨ Next Steps

After adding the Adobe PDFs, you can add brochures for other certifications by:
1. Adding PDF files to `/public/pdfs/` with appropriate names
2. The download handlers are already updated to support all certifications
