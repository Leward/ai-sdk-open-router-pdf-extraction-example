# ai-sdk-open-router-pdf-extraction-example

A quick example for PDF summary extraction using the Vercel AI SDK with OpenRouter provider and Zod for structured object generation.

## Overview

This project demonstrates how to use the Vercel AI SDK with the OpenRouter provider to generate structured objects using AI models. It includes TypeScript support and uses Zod for schema validation.

## Dependencies

This project uses the latest versions of:

- **zod** (^4.1.11) - TypeScript-first schema validation
- **ai** (^5.0.48) - Vercel AI SDK for building AI-powered applications
- **@openrouter/ai-sdk-provider** (^1.2.0) - OpenRouter AI SDK provider for accessing various AI models

## Prerequisites

1. Node.js 18+ installed
2. An OpenRouter API key from [openrouter.ai](https://openrouter.ai/keys)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-sdk-open-router-pdf-extraction-example
```

2. Install dependencies:
```bash
npm install
```

3. Set up your OpenRouter API key:
```bash
# Option 1: Set as environment variable
export OPENROUTER_API_KEY=your_api_key_here

# Option 2: Create a .env file
cp .env.example .env
# Edit .env and add your API key
```

## Usage

### Development (TypeScript)
```bash
npm run dev
```

### Build and Run (JavaScript)
```bash
npm run build
npm start
```

## Example Output

The script generates a structured object representing a fictional science fiction book:

```json
{
  "title": "Neural Nexus",
  "author": "Dr. Elena Vasquez",
  "genre": "science fiction",
  "publishedYear": 2087,
  "summary": "In a future where consciousness can be transferred between artificial and biological substrates, a neural engineer discovers a hidden layer of reality that connects all sentient beings across the galaxy."
}
```

## Features

- **TypeScript Support**: Full TypeScript configuration with strict type checking
- **Schema Validation**: Uses Zod for runtime type safety and validation
- **AI-Powered Object Generation**: Leverages OpenRouter's access to various AI models
- **Error Handling**: Comprehensive error handling with helpful error messages
- **Development Tools**: Hot reload with tsx for rapid development

## Project Structure

```
├── src/
│   └── index.ts          # Main application script
├── dist/                 # Compiled JavaScript output
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Customization

You can modify the `BookSchema` in `src/index.ts` to generate different types of structured objects, or change the prompt to generate different content while maintaining the same schema structure.

## Available Scripts

- `npm run dev` - Run in development mode with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript
- `npm test` - Run tests (placeholder for future implementation)
