
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/hooks/use-cart";
import { StarRating } from "./StarRating";
import { WishlistButton } from "./WishlistButton";
import { useNotification } from "@/hooks/use-notification";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addNotification } = useNotification();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    addNotification({
      type: 'success',
      title: `Added ${product.name}`,
      message: `A ${product.scentFamily.toLowerCase()} scent with top notes of ${product.notes.top.join(", ")}.`,
    });
  };

  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border-2">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={product.image}
            alt={product.name}
            data-ai-hint="perfume bottle"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute top-2 right-2 z-10" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <WishlistButton product={product} />
          </div>
           <div className="absolute top-2 left-2 z-10">
            <div className="text-xs bg-black/50 text-white rounded-full px-2 py-1 backdrop-blur-sm">
              {product.scentFamily}
            </div>
          </div>
        </div>
        <CardContent className="p-4 space-y-2">
           <h3 className="font-headline text-lg font-semibold truncate group-hover:text-primary">{product.name}</h3>
           <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-primary">${product.price.toFixed(2)}</p>
            <StarRating rating={product.rating} starClassName="h-4 w-4" />
           </div>
           <Button onClick={handleAddToCart} size="sm" className="w-full mt-2">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
        </CardContent>
      </Link>
    </Card>
  );
}
