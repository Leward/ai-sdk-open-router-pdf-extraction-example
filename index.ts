import 'dotenv/config';
import { generateObject } from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { z } from 'zod';
import {mistral} from "@ai-sdk/mistral";

const BookSchema = z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    publishedYear: z.number(),
    summary: z.string(),
});

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) throw new Error('OPENROUTER_API_KEY missing');

const models = {
    openrouter: {
        // does not work
        mistralSmall: createOpenRouter({ apiKey })('mistralai/mistral-small-3.2-24b-instruct'),

        // works
        gpt5Nano: createOpenRouter({ apiKey })('openai/gpt-5-nano'),
    },
    mistral: {
        // works
        mistralSmall: mistral('mistral-small-latest'),
    },
}

const result = await generateObject({
    model: models.openrouter.mistralSmall,
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
