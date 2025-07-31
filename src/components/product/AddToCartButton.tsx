
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/lib/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useNotification } from "@/hooks/use-notification";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addNotification } = useNotification();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    addNotification({
      type: 'success',
      title: `Added ${product.name}`,
      message: `A ${product.scentFamily.toLowerCase()} scent with top notes of ${product.notes.top.join(", ")}.`,
    });
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-r-none"
          onClick={() => handleQuantityChange(-1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
          className="h-10 w-16 rounded-none text-center"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-l-none"
          onClick={() => handleQuantityChange(1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button size="lg" onClick={handleAddToCart} className="flex-grow">
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </div>
  );
}
