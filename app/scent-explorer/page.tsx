
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { personalizedPerfumeRecommendations } from "@/ai/flows/perfume-recommendation";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import type { Metadata } from 'next'
import { HourglassLoader } from "@/components/layout/HourglassLoader";
import { Input } from "@/components/ui/input";

// This is a client component, so we can't export metadata directly.
// We can set document.title in a useEffect hook if needed.
// However, the title will be set by the layout template.

const formSchema = z.object({
  occasion: z.string().min(1, { message: "Please select an occasion." }),
  scentFamily: z.string().min(1, { message: "Please select a scent family." }),
  mood: z.string().min(1, { message: "Please describe the mood you want to evoke." }),
  other_notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ScentExplorerPage() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      occasion: "",
      scentFamily: "",
      mood: "",
      other_notes: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    const preferences = `
      I'm looking for a perfume for a ${data.occasion} occasion.
      I prefer scents from the ${data.scentFamily} family.
      The mood I want to evoke is ${data.mood}.
      ${data.other_notes ? `Additional notes: ${data.other_notes}` : ""}
    `;

    try {
      const result = await personalizedPerfumeRecommendations({ preferences });
      setRecommendations(result.recommendations);
    } catch (e) {
      setError("We couldn't find recommendations at this time. Please try again later.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Sparkles className="mx-auto h-12 w-12 text-accent" />
        <h1 className="text-4xl font-headline font-bold mt-4">Scent Explorer</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Let our AI guide you to your next signature scent. Tell us what you're looking for, and we'll do the rest.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="border">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Describe Your Ideal Fragrance</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="occasion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Occasion</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an occasion" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="daily">Daily Wear</SelectItem>
                          <SelectItem value="office">Office / Professional</SelectItem>
                          <SelectItem value="evening">Evening / Date Night</SelectItem>
                          <SelectItem value="special_event">Special Event</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="scentFamily"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Scent Family</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a scent family" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Floral">Floral</SelectItem>
                          <SelectItem value="Woody">Woody</SelectItem>
                          <SelectItem value="Oriental">Oriental</SelectItem>
                          <SelectItem value="Fresh">Fresh</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="mood"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired Mood</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., confident, romantic, energetic" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="other_notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anything else? (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., I love the smell of vanilla, I dislike very sweet scents." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...</>
                  ) : (
                    <><Wand2 className="mr-2 h-4 w-4" /> Find My Scent</>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-8 md:mt-0">
          <h2 className="text-2xl font-headline mb-4">Your Personalized Recommendations</h2>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground rounded-lg border border-dashed p-8">
              <HourglassLoader text="Our AI is searching for your perfect match..." />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full text-destructive-foreground bg-destructive/80 rounded-lg p-8">
              <p>{error}</p>
            </div>
          ) : recommendations.length > 0 ? (
            <Card className="bg-secondary border">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="p-4 bg-background rounded-md shadow-sm border">
                      <p>{rec}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : (
             <div className="flex flex-col items-center justify-center h-full text-muted-foreground rounded-lg border border-dashed p-8">
               <Wand2 className="h-10 w-10 text-accent mb-4"/>
              <p className="text-center">Your recommendations will appear here once you fill out the form.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
