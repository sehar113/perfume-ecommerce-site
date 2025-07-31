
"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import type { Product, Review } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StarRating } from './StarRating';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { format } from 'date-fns';
import { Star } from 'lucide-react';
import { useNotification } from '@/hooks/use-notification';

interface ProductReviewsProps {
  product: Product;
}

const getInitials = (name?: string | null) => {
  if (name) {
    const names = name.split(' ');
    if (names.length > 1 && names[0] && names[names.length - 1]) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  return 'U';
};


export function ProductReviews({ product }: ProductReviewsProps) {
  const { user, firestoreUser } = useAuth();
  const [reviews, setReviews] = useState<Review[]>(product.reviews);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const { addNotification } = useNotification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
        addNotification({
            type: 'error',
            title: "Rating required",
            message: "Please select a star rating.",
        });
        return;
    }

    const newReview: Review = {
        id: new Date().toISOString(),
        author: firestoreUser?.displayName || user?.email || 'Anonymous',
        rating: rating,
        title: reviewTitle,
        comment: reviewComment,
        date: new Date().toISOString(),
    };

    setReviews([newReview, ...reviews]);
    
    // Reset form
    setRating(0);
    setReviewTitle('');
    setReviewComment('');

    addNotification({
        type: 'success',
        title: "Review Submitted!",
        message: "Thank you for your feedback.",
    });
  }

  return (
    <div id="reviews" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold">Customer Reviews</h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} starClassName="h-6 w-6" />
          <p className="text-lg text-muted-foreground">
            Based on {reviews.length + product.reviewCount - product.reviews.length} reviews
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <h3 className="font-headline text-2xl">Recent Reviews</h3>
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review.id} className="flex gap-4">
                         <Avatar>
                            <AvatarFallback>{getInitials(review.author)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                            <div className="flex items-center justify-between">
                                 <div>
                                    <p className="font-semibold">{review.author}</p>
                                    <StarRating rating={review.rating} />
                                 </div>
                                 <p className="text-sm text-muted-foreground">{format(new Date(review.date), 'MMMM d, yyyy')}</p>
                            </div>
                            <h4 className="font-semibold mt-2">{review.title}</h4>
                            <p className="mt-1 text-muted-foreground text-sm">{review.comment}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-muted-foreground">No reviews yet. Be the first to write one!</p>
            )}
        </div>

        <div>
           <Card className="border">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Write a review</CardTitle>
            </CardHeader>
            <CardContent>
                {user ? (
                     <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="rating">Your Rating</Label>
                            <div className="flex items-center mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                    >
                                        <Star
                                            className="h-6 w-6 transition-colors"
                                            fill={(hoverRating || rating) >= star ? 'hsl(var(--primary))' : 'transparent'}
                                            stroke='hsl(var(--primary))'
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                         <div>
                            <Label htmlFor="review-title">Review Title</Label>
                            <Input 
                                id="review-title" 
                                placeholder="e.g. My new favorite scent!" 
                                value={reviewTitle}
                                onChange={(e) => setReviewTitle(e.target.value)}
                            />
                        </div>
                         <div>
                            <Label htmlFor="review-comment">Your Review</Label>
                            <Textarea 
                                id="review-comment" 
                                placeholder="Tell us more about your experience..." 
                                value={reviewComment}
                                onChange={(e) => setReviewComment(e.target.value)}
                            />
                        </div>
                        <Button type="submit" className="w-full">Submit Review</Button>
                    </form>
                ) : (
                    <div className="text-center">
                        <p className="text-muted-foreground">You must be logged in to write a review.</p>
                        <Button asChild className="mt-4">
                            <a href="/login">Log In</a>
                        </Button>
                    </div>
                )}
            </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
