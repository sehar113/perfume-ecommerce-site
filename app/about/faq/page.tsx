
import type { Metadata } from 'next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about Sehar Melo Éclat products, shipping, and policies.',
}

const faqs = [
  {
    question: "What is the difference between Eau de Parfum and Eau de Toilette?",
    answer: "Eau de Parfum (EDP) contains a higher concentration of perfume oil (typically 15-20%) compared to Eau de Toilette (EDT), which has a concentration of about 5-15%. This means EDPs generally last longer and have a more intense scent."
  },
  {
    question: "How should I store my perfume?",
    answer: "To preserve the integrity of your fragrance, store it in a cool, dark place away from direct sunlight and extreme temperature fluctuations. A drawer or a closet is ideal. Avoid storing perfumes in the bathroom due to humidity."
  },
  {
    question: "What is your shipping policy?",
    answer: "We offer free standard shipping on all orders within the country. Standard shipping typically takes 3-5 business days. We also offer express shipping for an additional fee, which takes 1-2 business days. International shipping options are available at checkout."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns for unopened products in their original packaging within 30 days of purchase. If you are not satisfied with your fragrance, please contact our customer service team to discuss exchange options. Please note that return shipping costs are the responsibility of the customer."
  },
  {
    question: "How can I find my signature scent?",
    answer: "Finding your signature scent is a personal journey! We recommend trying our AI Scent Explorer to get personalized recommendations. You can also consider the scent families you are drawn to (Floral, Woody, Oriental, Fresh) and the occasions you'll be wearing the fragrance for."
  },
   {
    question: "Are your products cruelty-free?",
    answer: "Yes, all Sehar Melo Éclat products are cruelty-free. We are committed to ethical practices and do not test our products or ingredients on animals, nor do we ask others to do so on our behalf."
  },
  {
    question: "Do you offer samples?",
    answer: "We occasionally offer promotional samples with qualifying purchases. We recommend signing up for our newsletter to be notified of such offers. While we do not sell sample sets at this time, we are exploring this option for the future."
  }
];

export default function FAQPage() {
  return (
    <div className="flex-grow bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We have answers. Find what you're looking for below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
           <Accordion type="single" collapsible className="w-full space-y-4">
             {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
             ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
