import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'

// ✅ Handles GET request for downloading PDFs
export async function GET(request: Request) {
  try {
    // Get the filename from query parameters
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get("file")

    if (!filename) {
      return NextResponse.json({ error: "Filename parameter is required" }, { status: 400 })
    }

    // Path to your PDF file (inside the "public" folder)
    const filePath = path.join(process.cwd(), "public", filename)

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 })
    }

    // Read the file as a binary buffer
    const fileBuffer = fs.readFileSync(filePath)

    // Extract just the filename for the download
    const downloadFilename = path.basename(filename)

    // ✅ Return PDF with correct headers for all devices
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${downloadFilename}"`,
        "Cache-Control": "no-store, no-cache, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
  } catch (error) {
    console.error("Error serving PDF:", error)
    return NextResponse.json({ error: "Failed to download file" }, { status: 500 })
  }
}
