
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  featured?: boolean;
  stock: number;
  discountPercentage?: number;
  rating?: number;
  reviews?: ProductReview[];
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export type ProductCategory = "all" | "merchandise" | "prints" | "digital" | "services";
