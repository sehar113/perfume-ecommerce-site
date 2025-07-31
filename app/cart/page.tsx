
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingCart, CreditCard } from "lucide-react";
import type { Metadata } from 'next'

// This is a client component, so we can't export metadata directly.
// We can set document.title in a useEffect hook if needed.
// However, the title will be set by the layout template.

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <div className="flex-grow bg-secondary">
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-headline font-bold text-center mb-12">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
            <div className="text-center py-20">
            <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground/50" />
            <h2 className="mt-6 text-2xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="mt-6">
                <Link href="/products">Start Shopping</Link>
            </Button>
            </div>
        ) : (
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-2">
                <Card className="border">
                <CardContent className="p-0">
                    <ul className="divide-y divide-border">
                    {cartItems.map(item => (
                        <li key={item.product.id} className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                                <div className="flex items-center gap-4">
                                    <Image 
                                        src={item.product.image} 
                                        alt={item.product.name} 
                                        width={100} 
                                        height={100}
                                        data-ai-hint="perfume bottle" 
                                        className="rounded-lg object-cover w-20 h-20 sm:w-24 sm:h-24"
                                    />
                                    <div className="flex-grow sm:hidden">
                                        <Link href={`/products/${item.product.slug}`} className="font-semibold text-lg leading-tight hover:underline">
                                            {item.product.name}
                                        </Link>
                                        <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex-grow hidden sm:block">
                                    <Link href={`/products/${item.product.slug}`} className="font-semibold text-lg leading-tight hover:underline">
                                    {item.product.name}
                                    </Link>
                                    <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center justify-between sm:justify-start gap-4 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                                        <Minus className="h-4 w-4" />
                                        </Button>
                                        <Input 
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value, 10) || 1)}
                                        className="w-14 h-8 text-center"
                                        />
                                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                                        <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <p className="font-semibold w-24 text-right">
                                        ${(item.product.price * item.quantity).toFixed(2)}
                                    </p>
                                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                                        <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive" />
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-1 sticky top-20">
                <Card className="border">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({cartCount} items)</span>
                    <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes</span>
                    <span>Calculated at checkout</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                    <span>Order Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild size="lg" className="w-full">
                    <Link href="/checkout">
                        Proceed to Checkout <CreditCard className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>
                </CardFooter>
                </Card>
            </div>
            </div>
        )}
        </div>
    </div>
  );
}
