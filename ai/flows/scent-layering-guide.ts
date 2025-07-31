'use server';

/**
 * @fileOverview An AI-powered scent layering guide.
 *
 * - getScentLayeringSuggestions - A function that provides perfume combination suggestions.
 * - ScentLayeringInput - The input type for the getScentLayeringSuggestions function.
 * - ScentLayeringOutput - The return type for the getScentLayeringSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScentLayeringInputSchema = z.object({
  perfumeDescriptions: z
    .array(z.string())
    .describe(
      'An array of descriptions for perfumes the user wants to layer.  Each description should include the brand, name, and key scent notes.'
    ),
  userPreferences: z
    .string()
    .describe(
      'A description of the users scent preferences and what kind of scent profile they are trying to achieve.'
    ),
});
export type ScentLayeringInput = z.infer<typeof ScentLayeringInputSchema>;

const ScentLayeringOutputSchema = z.object({
  layeringSuggestions: z
    .array(z.string())
    .describe(
      'An array of suggested perfume layering combinations, with rationales for why they would work well together.'
    ),
  additionalTips: z
    .string()
    .describe(
      'Any additional tips for layering perfumes, such as when to apply each scent, or how much of each to use.'
    ),
});
export type ScentLayeringOutput = z.infer<typeof ScentLayeringOutputSchema>;

export async function getScentLayeringSuggestions(
  input: ScentLayeringInput
): Promise<ScentLayeringOutput> {
  return scentLayeringFlow(input);
}

const prompt = ai.definePrompt({
  name: 'scentLayeringPrompt',
  input: {schema: ScentLayeringInputSchema},
  output: {schema: ScentLayeringOutputSchema},
  prompt: `You are an expert fragrance consultant with a deep understanding of perfume layering.

  Based on the user's perfume descriptions and scent preferences, suggest some complementary perfume combinations.

  Perfume Descriptions:
  {{#each perfumeDescriptions}}
  - {{{this}}}
  {{/each}}

  User Scent Preferences: {{{userPreferences}}}

  Consider the scent families, notes, and intensities of the perfumes to create harmonious and unique scent profiles.
  Provide rationales for each suggestion, explaining why the combination would work well together.

  In addition, offer any general tips for layering perfumes, such as the order of application or the amount to use.
  Be creative in your suggestions, and suggest layering combinations that the user may not have thought of before.
  `,
});

const scentLayeringFlow = ai.defineFlow(
  {
    name: 'scentLayeringFlow',
    inputSchema: ScentLayeringInputSchema,
    outputSchema: ScentLayeringOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
