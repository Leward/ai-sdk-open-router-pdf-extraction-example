import { generateObject } from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { z } from 'zod';

// Define the schema for the object we want to generate
const BookSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  publishedYear: z.number(),
  summary: z.string(),
});

async function main() {
  try {
    // Check if API key is provided
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error('Error: OPENROUTER_API_KEY environment variable is required.');
      console.log('Please set your OpenRouter API key:');
      console.log('export OPENROUTER_API_KEY=your_api_key_here');
      console.log('Or copy .env.example to .env and set your API key there.');
      process.exit(1);
    }

    console.log('Generating object using OpenRouter AI SDK...');

    // Create OpenRouter provider with API key
    const openrouter = createOpenRouter({
      apiKey: apiKey,
    });

    const result = await generateObject({
      model: openrouter('openai/gpt-3.5-turbo'),
      schema: BookSchema,
      prompt: 'Generate information about a fictional science fiction book.',
    });

    console.log('Generated object:');
    console.log(JSON.stringify(result.object, null, 2));
  } catch (error) {
    console.error('Error generating object:', error);
    process.exit(1);
  }
}

main();