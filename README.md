# ai-sdk-open-router-pdf-extraction-example

PDF summary extraction with Vercel AI SDK, OpenRouter, and Zod.

## Setup

1. Install: `npm install`
2. Add key: `echo "OPENROUTER_API_KEY=your_key" > .env`
3. Run: `npm run dev`

## Problem

View [error](error.txt) for more details.

**Summary:** OpenRouter returned an annotation with type: "file"; the SDK expected only type: "url_citation" and threw a
validation error, causing the object-generation call to fail even though the HTTP status was 200.