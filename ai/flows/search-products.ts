
'use server';

/**
 * @fileOverview Product search AI agent.
 *
 * - searchProducts - A function that handles product search and recommendation.
 * - SearchProductsInput - The input type for the searchProducts function.
 * - SearchProductsOutput - The return type for the searchProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SearchProductsInputSchema = z.object({
  query: z
    .string()
    .describe('The user\'s search query for a perfume.'),
  productNames: z.array(z.string()).describe('A list of available perfume names in the store.'),
});
export type SearchProductsInput = z.infer<typeof SearchProductsInputSchema>;

const SearchProductsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('An array of up to 8 recommended perfume names that are most relevant to the user query.'),
});
export type SearchProductsOutput = z.infer<typeof SearchProductsOutputSchema>;

export async function searchProducts(input: SearchProductsInput): Promise<SearchProductsOutput> {
  return searchProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'searchProductsPrompt',
  input: {schema: SearchProductsInputSchema},
  output: {schema: SearchProductsOutputSchema},
  prompt: `You are a helpful e-commerce search assistant for a perfume store.
You will be given a user's search query and a list of all available perfume names.
Your task is to identify the most relevant perfumes from the list based on the user's query.
The query might be a direct product name, or it could describe a mood, occasion, or scent preference (e.g., "summer floral", "a scent for a night out").

Return a list of up to 8 of the most relevant product names. Only return names that exist in the provided list.

User Query: {{{query}}}

Available Perfumes:
{{#each productNames}}
- {{{this}}}
{{/each}}
`,
});

const searchProductsFlow = ai.defineFlow(
  {
    name: 'searchProductsFlow',
    inputSchema: SearchProductsInputSchema,
    outputSchema: SearchProductsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
