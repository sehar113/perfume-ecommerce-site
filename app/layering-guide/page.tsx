
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProducts } from "@/lib/products";
import { getScentLayeringSuggestions, ScentLayeringOutput } from "@/ai/flows/scent-layering-guide";
import { Loader2, Sparkles, Bot, Wand2, Paperclip, AppWindow, Globe } from "lucide-react";
import { HourglassLoader } from "@/components/layout/HourglassLoader";

const products = getProducts();

const formSchema = z.object({
  prompt: z.string().min(10, { message: "Please describe your perfumes and preferences in a bit more detail." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LayeringGuidePage() {
  const [suggestions, setSuggestions] = useState<ScentLayeringOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  
  const { register, handleSubmit, setValue } = form;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    const perfumeDescriptions = products.map(p => `${p.name}: ${p.description}`);

    try {
      const result = await getScentLayeringSuggestions({
        perfumeDescriptions,
        userPreferences: data.prompt,
      });
      setSuggestions(result);
    } catch (e) {
      setError("We couldn't generate suggestions at this time. Please try again later.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleTagClick = (text: string) => {
    setValue('prompt', text);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Bot className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-headline font-bold mt-4">AI Layering Guide</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Unlock unique scent combinations. Describe the perfumes you own and what kind of vibe you're going for.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                <div className="ai-chatbot-container">
                    <div className="container-chat-options">
                        <div className="chat">
                        <div className="chat-bot">
                            <textarea
                            {...register("prompt")}
                            placeholder="I have Midnight Bloom and Citrus Dawn. I want a sophisticated scent for an evening event..."
                            ></textarea>
                        </div>
                        <div className="options">
                            <div className="btns-add">
                            <button type="button">
                                <Paperclip size={20} />
                            </button>
                            <button type="button">
                                <AppWindow size={20} />
                            </button>
                            <button type="button">
                                <Globe size={20} />
                            </button>
                            </div>
                            <button type="submit" className="btn-submit" disabled={isLoading}>
                            <i>
                                <svg viewBox="0 0 512 512" fill="currentColor">
                                <path
                                    d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"
                                ></path>
                                </svg>
                            </i>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="tags">
                        <span onClick={() => handleTagClick("Combine Rose Élégance and Velvet Amber for a romantic date night.")}>Romantic Night</span>
                        <span onClick={() => handleTagClick("What can I layer with Aqua Marine for a fresh summer day scent?")}>Summer Day</span>
                        <span onClick={() => handleTagClick("Make Smoked Leather less intense for office wear.")}>Office Scent</span>
                    </div>
                </div>
                 {form.formState.errors.prompt && (
                    <p className="text-sm font-medium text-destructive mt-2 text-center">{form.formState.errors.prompt.message}</p>
                )}
            </form>
        </div>


        <div className="mt-8 md:mt-0">
          <h2 className="text-2xl font-headline mb-4">Your Custom Layering Guide</h2>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground rounded-lg border border-dashed p-8">
              <HourglassLoader text="Our AI sommelier is crafting your personal guide..." />
            </div>
          ) : error ? (
             <div className="flex items-center justify-center h-full text-destructive-foreground bg-destructive/80 rounded-lg p-8">
              <p>{error}</p>
            </div>
          ) : suggestions ? (
            <Card className="bg-secondary border">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-headline">Layering Suggestions</h3>
                  <ul className="space-y-3 list-disc list-inside">
                    {suggestions.layeringSuggestions.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-headline">Additional Tips</h3>
                  <p className="whitespace-pre-wrap">{suggestions.additionalTips}</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground rounded-lg border border-dashed p-8">
               <Bot className="h-10 w-10 text-primary mb-4"/>
              <p className="text-center">Your layering guide will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
