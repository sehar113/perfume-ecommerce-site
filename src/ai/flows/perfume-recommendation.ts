'use server';

/**
 * @fileOverview Personalized perfume recommendation AI agent.
 *
 * - personalizedPerfumeRecommendations - A function that handles the perfume recommendation process.
 * - PersonalizedPerfumeRecommendationsInput - The input type for the personalizedPerfumeRecommendations function.
 * - PersonalizedPerfumeRecommendationsOutput - The return type for the personalizedPerfumeRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPerfumeRecommendationsInputSchema = z.object({
  preferences: z
    .string()
    .describe('A description of the user preferences for perfumes.'),
});
export type PersonalizedPerfumeRecommendationsInput = z.infer<typeof PersonalizedPerfumeRecommendationsInputSchema>;

const PersonalizedPerfumeRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('An array of perfume recommendations based on the user preferences.'),
});
export type PersonalizedPerfumeRecommendationsOutput = z.infer<typeof PersonalizedPerfumeRecommendationsOutputSchema>;

export async function personalizedPerfumeRecommendations(input: PersonalizedPerfumeRecommendationsInput): Promise<PersonalizedPerfumeRecommendationsOutput> {
  return personalizedPerfumeRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPerfumeRecommendationsPrompt',
  input: {schema: PersonalizedPerfumeRecommendationsInputSchema},
  output: {schema: PersonalizedPerfumeRecommendationsOutputSchema},
  prompt: `You are an expert perfume consultant. A user will provide their preferences for perfumes, and you will recommend perfumes that match their taste.

User Preferences: {{{preferences}}}

Please provide perfume recommendations in an array format.
`,
});

const personalizedPerfumeRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedPerfumeRecommendationsFlow',
    inputSchema: PersonalizedPerfumeRecommendationsInputSchema,
    outputSchema: PersonalizedPerfumeRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
