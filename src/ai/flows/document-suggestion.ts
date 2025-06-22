// src/ai/flows/document-suggestion.ts
'use server';

/**
 * @fileOverview AI-powered document suggestion flow.
 *
 * This file defines a Genkit flow that suggests relevant documents or FAQs based on a user's search query.
 * It exports the following:
 * - `suggestDocuments` - An async function that takes a search query and returns a list of document/FAQ suggestions.
 * - `DocumentSuggestionInput` - The input type for the `suggestDocuments` function.
 * - `DocumentSuggestionOutput` - The output type for the `suggestDocuments` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const DocumentSuggestionInputSchema = z.object({
  query: z.string().describe('The user search query.'),
});

export type DocumentSuggestionInput = z.infer<typeof DocumentSuggestionInputSchema>;

// Define the output schema
const DocumentSuggestionOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      title: z.string().describe('The title of the document or FAQ.'),
      link: z.string().describe('The link to the document or FAQ.'),
      description: z.string().describe('A brief description of the document or FAQ.'),
    })
  ).describe('A list of suggested documents or FAQs.'),
});

export type DocumentSuggestionOutput = z.infer<typeof DocumentSuggestionOutputSchema>;


export async function suggestDocuments(input: DocumentSuggestionInput): Promise<DocumentSuggestionOutput> {
  return documentSuggestionFlow(input);
}


// Define the prompt
const documentSuggestionPrompt = ai.definePrompt({
  name: 'documentSuggestionPrompt',
  input: {schema: DocumentSuggestionInputSchema},
  output: {schema: DocumentSuggestionOutputSchema},
  prompt: `You are a document suggestion service for the Industrial University of Ho Chi Minh City website.
  Based on the user's query, suggest relevant documents or FAQs from the university's website.
  Return a list of suggestions, including the title, link, and a brief description for each.

  User Query: {{{query}}}
  `,
});

// Define the flow
const documentSuggestionFlow = ai.defineFlow(
  {
    name: 'documentSuggestionFlow',
    inputSchema: DocumentSuggestionInputSchema,
    outputSchema: DocumentSuggestionOutputSchema,
  },
  async input => {
    const {output} = await documentSuggestionPrompt(input);
    return output!;
  }
);
