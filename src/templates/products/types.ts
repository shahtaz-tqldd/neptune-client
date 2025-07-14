import { StaticImageData } from "next/image";

export interface ProductProps {
  id: number;
  image: string | StaticImageData;
  description: string;
  name: string;
  price: string;
  discount?: string;
  discountPrice: string,
  numReviews?: number;
  offerEndsIn?: number; 
  hot_deals?: boolean;
  is_hero_product?: boolean;
}
