import 'dotenv/config';
import { generateObject } from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { z } from 'zod';

const BookSchema = z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    publishedYear: z.number(),
    summary: z.string(),
});

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) throw new Error('OPENROUTER_API_KEY missing');

const result = await generateObject({
    model: createOpenRouter({ apiKey })('mistralai/mistral-small-3.2-24b-instruct'),
    schema: BookSchema,
    messages: [
        {
            role: 'user',
            content: [
                {
                    type: "text",
                    text: "Generate general information about this document."
                },
                {
                    type: "file",
                    data: new URL("https://files.consumerfinance.gov/f/documents/cfpb_building_block_activities_sample-credit-card-statement_handout.pdf"),
                    mediaType: "application/pdf"
                }
            ]
        },
    ],
});

console.log(JSON.stringify(result.object, null, 2));
