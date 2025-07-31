
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import type { Metadata } from 'next';
import { PaymentProcessingAnimation } from "@/components/checkout/PaymentProcessingAnimation";
import { useNotification } from "@/hooks/use-notification";

// This is a client component, so we can't export metadata directly.
// We can set document.title in a useEffect hook if needed.
// However, the title will be set by the layout template.

const EasypaisaIcon = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <rect width="128" height="128" fill="#00b04f" rx="30"></rect>
        <path d="M48.14 38.83h29.47v7.5H57.06v11.12h19.1v7.5H57.06v11.94h20.72v7.5H48.14v-45.56z" fill="#fff"></path>
    </svg>
);

const JazzCashIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <path d="M1.143 0H22.857L1.143 24H1.143V0Z" fill="#E41E26"></path>
        <path d="M22.857 0H1.143L22.857 24V0Z" fill="#231F20"></path>
    </svg>
);


export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { addNotification } = useNotification();

  const handleCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
        addNotification({
          type: 'order',
          title: "Order Completed!",
          message: "Your exclusive fragrance is on its way. Track your package to follow its journey.",
        });
        // In a real app, you would redirect to an order confirmation page
        // For now, we'll just stop the animation
        setIsProcessing(false);
    }, 4000); // 4-second animation
  }

  return (
    <div className="flex-grow bg-secondary">
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-headline font-bold text-center mb-12">Checkout</h1>
        
        <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="shipping" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="shipping">1. Shipping</TabsTrigger>
                <TabsTrigger value="delivery">2. Delivery</TabsTrigger>
                <TabsTrigger value="payment">3. Payment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="shipping">
                <div className="payment-modal mx-auto">
                    <form className="payment-form">
                        <div className="flex flex-col text-center my-4">
                            <h2 className="text-2xl font-semibold font-headline">Shipping Address</h2>
                        </div>
                        <div className="credit-card-info--form">
                            <div className="input_container">
                                <label htmlFor="first-name" className="input_label">First Name</label>
                                <input id="first-name" className="input_field" type="text" name="first-name" placeholder="John" />
                            </div>
                            <div className="input_container">
                                <label htmlFor="last-name" className="input_label">Last Name</label>
                                <input id="last-name" className="input_field" type="text" name="last-name" placeholder="Doe" />
                            </div>
                            <div className="input_container">
                                <label htmlFor="address" className="input_label">Address</label>
                                <input id="address" className="input_field" type="text" name="address" placeholder="123 Perfume Lane" />
                            </div>
                             <div className="split">
                                <div className="input_container">
                                    <label htmlFor="city" className="input_label">City</label>
                                    <input id="city" className="input_field" type="text" placeholder="New York" />
                                </div>
                                 <div className="input_container">
                                    <label htmlFor="zip" className="input_label">Zip Code</label>
                                    <input id="zip" className="input_field" type="text" placeholder="10001" />
                                </div>
                            </div>
                            <div className="input_container">
                               <div className="flex items-center space-x-2 mt-2">
                                    <Checkbox id="save-address" />
                                    <Label htmlFor="save-address" className="text-xs">Save this address for next time</Label>
                                </div>
                            </div>
                        </div>
                        <button className="purchase--btn">Next: Delivery</button>
                    </form>
                </div>
            </TabsContent>

            <TabsContent value="delivery">
                <div className="payment-modal mx-auto">
                    <form className="payment-form">
                        <div className="flex flex-col text-center my-4">
                            <h2 className="text-2xl font-semibold font-headline">Delivery Method</h2>
                        </div>
                        <RadioGroup defaultValue="standard" className="space-y-4">
                            <Label htmlFor="standard" className="flex items-center justify-between p-4 border rounded-md cursor-pointer has-[:checked]:bg-accent has-[:checked]:border-primary">
                                <div className="flex items-center space-x-4">
                                    <RadioGroupItem value="standard" id="standard" />
                                    <span className="font-semibold">Standard Shipping</span>
                                </div>
                                <span className="font-medium">Free</span>
                            </Label>
                            <Label htmlFor="express" className="flex items-center justify-between p-4 border rounded-md cursor-pointer has-[:checked]:bg-accent has-[:checked]:border-primary">
                                <div className="flex items-center space-x-4">
                                    <RadioGroupItem value="express" id="express" />
                                    <span className="font-semibold">Express Shipping</span>
                                </div>
                                <span className="font-medium">$15.00</span>
                            </Label>
                        </RadioGroup>
                         <button className="purchase--btn mt-4">Next: Payment</button>
                    </form>
                </div>
            </TabsContent>

            <TabsContent value="payment">
              {isProcessing ? (
                <div className="flex justify-center items-center py-10">
                  <PaymentProcessingAnimation />
                </div>
              ) : (
                <div className="payment-modal mx-auto">
                    <form className="payment-form">
                    <div className="payment--options">
                        <button name="easypaisa" type="button">
                            <EasypaisaIcon />
                        </button>
                        <button name="jazzcash" type="button">
                           <JazzCashIcon />
                        </button>
                        <button name="bank" type="button" className="flex flex-col items-center justify-center gap-1 text-muted-foreground text-xs font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m3 21 18-0"/><path d="M5 21V10.72a2 2 0 0 1 .55-.38l7.5-4.4a2 2 0 0 1 1.9 0l7.5 4.4a2 2 0 0 1 .55.38V21"/><path d="M12 21V11"/><path d="M12 11l-7.5-4.4"/><path d="M12 11l7.5-4.4"/><path d="m19.5 6.6-7.5 4.4"/></svg>
                            Bank
                        </button>
                    </div>
                    <div className="payment-separator">
                        <hr className="line" />
                        <p>or pay with card</p>
                        <hr className="line" />
                    </div>
                    <div className="credit-card-info--form">
                        <div className="input_container">
                        <label htmlFor="card_holder_name" className="input_label">Card holder full name</label>
                        <input id="card_holder_name" className="input_field" type="text" name="input-name" title="Input title" placeholder="Enter your full name" />
                        </div>
                        <div className="input_container">
                        <label htmlFor="card_number" className="input_label">Card Number</label>
                        <input id="card_number" className="input_field" type="number" name="input-name" title="Input title" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="input_container">
                        <label htmlFor="expiry_date" className="input_label">Expiry Date / CVV</label>
                        <div className="split">
                            <input id="expiry_date" className="input_field" type="text" name="input-name" title="Expiry Date" placeholder="01/23" />
                            <input id="cvv" className="input_field" type="number" name="cvv" title="CVV" placeholder="CVV" />
                        </div>
                        </div>
                    </div>
                    <button className="purchase--btn" onClick={handleCheckout}>Checkout</button>
                    </form>
                </div>
              )}
            </TabsContent>

            </Tabs>
        </div>
        </div>
    </div>
  );
}
