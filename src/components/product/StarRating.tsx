import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, maxRating = 5, className, starClassName }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = (rating % 1) * 100;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn("h-4 w-4 text-primary fill-primary", starClassName)} />
      ))}
      {partialStarPercentage > 0 && (
        <div className="relative">
          <Star className={cn("h-4 w-4 text-primary", starClassName)} />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${partialStarPercentage}%` }}>
            <Star className={cn("h-4 w-4 text-primary fill-primary", starClassName)} />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={cn("h-4 w-4 text-primary", starClassName)} />
      ))}
    </div>
  );
}
