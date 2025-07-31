"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bot, FlaskConical, ShoppingCart } from 'lucide-react';
import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/product/ProductCard';
import { LearnMoreButton } from '@/components/layout/LearnMoreButton';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const featuredProducts = getProducts().slice(0, 8);

  useEffect(() => {
    // Ensure video plays even if autoplay is blocked
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, show fallback
          video.controls = true;
        });
      }
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Video Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-black overflow-hidden">
        {/* Video with multiple formats for better compatibility */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="/imagesandvideo/herovideo/poster.jpg" // Preview image
        >
          <source src="/imagesandvideo/herovideo/video1.mp4" type="video/mp4" />
          <source src="/imagesandvideo/herovideo/video1.webm" type="video/webm" />
          Your browser does not support HTML5 video.
        </video>

        {/* Fallback content if video fails to load */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/imagesandvideo/herovideo/fallback.jpg"
            alt="Sehar Melo Éclat luxury perfumes"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Optional overlay content */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Sehar Melo Éclat</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Discover the art of bespoke fragrances
            </p>
          </div>
        </div>
      </section>

      {/* Rest of your existing content... */}
      <div className="container mx-auto px-4 py-16 md:py-24 bg-secondary">
        {/* ... existing featured products section ... */}
      </div>

      {/* ... rest of your page content ... */}
    </div>
  );
}