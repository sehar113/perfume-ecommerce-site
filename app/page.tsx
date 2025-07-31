
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bot, FlaskConical, ShoppingCart } from 'lucide-react';
import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from 'react';
import { LearnMoreButton } from '@/components/layout/LearnMoreButton';

export default function Home() {
  const featuredProducts = getProducts().slice(0, 8); // Let's feature 8 products

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-black overflow-hidden">
        <video
          src="/imagesandvideo/herovideo/video1.mp4"
          aria-label="Elegant perfume video"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold">Featured Collection</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Handpicked scents to captivate your senses.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products">
            <LearnMoreButton text="View All" />
          </Link>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/imagesandvideo/forsmallitems/item3.png"
              alt="Sulman, the developer brother who built the website"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Scent</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Not sure where to start? Our AI-powered Scent Explorer helps you find the perfect fragrance based on your unique preferences and style.
            </p>
            <Link href="/scent-explorer">
              <LearnMoreButton text="Start Exploring" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/imagesandvideo/forsmallitems/item1.jpg"
              alt="Master the Art of Layering"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">Master the Art of Layering</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Unlock new dimensions of fragrance. Our AI assistant provides expert guidance on how to combine your favorite scents for a more personal olfactory experience.
            </p>
            <Link href="/layering-guide">
              <LearnMoreButton text="Get Tips" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
