
"use client";

import { createContext, useState, useEffect, useCallback, ReactNode } from "react";
import type { Product } from "@/lib/types";

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isProductInWishlist: (productId: number) => boolean;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        setWishlistItems(JSON.parse(storedWishlist));
      }
    } catch (error) {
      console.error("Failed to parse wishlist from localStorage", error);
      setWishlistItems([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    } catch (error) {
      console.error("Failed to save wishlist to localStorage", error);
    }
  }, [wishlistItems]);

  const addToWishlist = useCallback((product: Product) => {
    setWishlistItems(prevItems => {
        const itemExists = prevItems.some(item => item.id === product.id);
        if (!itemExists) {
            return [...prevItems, product];
        }
        return prevItems;
    });
  }, []);

  const removeFromWishlist = useCallback((productId: number) => {
     setWishlistItems(prevItems => {
        const product = prevItems.find(p => p.id === productId);
        if (product) {
            return prevItems.filter((item) => item.id !== productId);
        }
        return prevItems;
    });
  }, []);
  
  const isProductInWishlist = useCallback((productId: number) => {
      return wishlistItems.some(item => item.id === productId);
  }, [wishlistItems]);

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isProductInWishlist
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};
