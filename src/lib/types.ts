export type Review = {
  id: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: 'Men' | 'Women' | 'Unisex';
  scentFamily: 'Floral' | 'Woody' | 'Oriental' | 'Fresh';
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  rating: number;
  reviewCount: number;
  reviews: Review[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};

// Add this to your types file
declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}
