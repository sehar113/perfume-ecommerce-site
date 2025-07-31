
"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
       <Button
        variant="default"
        size="icon"
        onClick={scrollToTop}
        className={cn(
            "fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg transition-opacity duration-300 z-50",
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <ArrowUp className="h-6 w-6" />
        <span className="sr-only">Go to top</span>
      </Button>
    </div>
  );
}
