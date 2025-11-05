# PowerShell script to copy Adobe PDF files to the public/pdfs directory
# Run this script from PowerShell to automatically copy and rename your Adobe PDFs

$sourcePath = "C:\Users\Pariventheswaran\Desktop\Files\Adobe"
$destinationPath = "C:\Users\Pariventheswaran\Downloads\3d-website (2)\public\pdfs"

Write-Host "Copying Adobe PDF files..." -ForegroundColor Green
Write-Host "From: $sourcePath" -ForegroundColor Yellow
Write-Host "To: $destinationPath" -ForegroundColor Yellow
Write-Host ""

# Check if source directory exists
if (-Not (Test-Path $sourcePath)) {
    Write-Host "ERROR: Source directory not found: $sourcePath" -ForegroundColor Red
    Write-Host "Please update the source path in this script." -ForegroundColor Yellow
    exit
}

# Create destination directory if it doesn't exist
if (-Not (Test-Path $destinationPath)) {
    New-Item -Path $destinationPath -ItemType Directory -Force
    Write-Host "Created destination directory: $destinationPath" -ForegroundColor Green
}

# List all PDF files in source directory
$pdfFiles = Get-ChildItem -Path $sourcePath -Filter "*.pdf"

if ($pdfFiles.Count -eq 0) {
    Write-Host "No PDF files found in source directory" -ForegroundColor Red
    exit
}

Write-Host "Found $($pdfFiles.Count) PDF file(s) in source directory:" -ForegroundColor Cyan
foreach ($file in $pdfFiles) {
    Write-Host "  - $($file.Name)" -ForegroundColor White
}

Write-Host ""
Write-Host "Please rename your PDFs to match these exact names:" -ForegroundColor Yellow
Write-Host "  1. adobe-illustrator-certification.pdf" -ForegroundColor White
Write-Host "  2. adobe-premiere-certification.pdf" -ForegroundColor White
Write-Host "  3. adobe-after-effects-certification.pdf" -ForegroundColor White
Write-Host "  4. adobe-indesign-certification.pdf" -ForegroundColor White
Write-Host "  5. adobe-photoshop-certification.pdf" -ForegroundColor White
Write-Host ""

# Ask user to confirm manual copy or provide mapping
$response = Read-Host "Would you like to manually copy the files now? (Y/N)"

if ($response -eq 'Y' -or $response -eq 'y') {
    Write-Host ""
    Write-Host "Copying all PDF files to destination..." -ForegroundColor Green
    
    foreach ($file in $pdfFiles) {
        $destination = Join-Path $destinationPath $file.Name
        Copy-Item -Path $file.FullName -Destination $destination -Force
        Write-Host "Copied: $($file.Name)" -ForegroundColor Green
    }
    
    Write-Host ""
    Write-Host "Files copied successfully!" -ForegroundColor Green
    Write-Host "Please rename them according to the list above in the pdfs folder." -ForegroundColor Yellow
} else {
    Write-Host "Copy cancelled. Please copy files manually." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
