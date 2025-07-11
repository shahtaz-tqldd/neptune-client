import { StaticImageData } from "next/image";

export interface ProductProps {
  id: number;
  image: string | StaticImageData;
  name: string;
  price: string;
  discount?: string;
  numReviews?: number;
}
