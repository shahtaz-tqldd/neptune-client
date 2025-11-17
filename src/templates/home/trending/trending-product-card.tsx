import { productName } from "@/lib/sanitize";
import { ProductProps } from "@/templates/product-details/types";
import Image from "next/image";
import Link from "next/link";

interface TrendingProductCardProps {
  product: ProductProps;
  index: number;
}

const TrendingProductCard = ({ product, index }: TrendingProductCardProps) => {
  // Mobile fallback (stacked)
  const isMobile = index === -1;

  return (
    <Link
      href={`/products/${productName(product.name)}`}
      className={`
        cursor-pointer p-4 w-72 h-[380px] rounded-3xl shadow-xl bg-white 
        transition-transform duration-300 hover:-translate-y-2 

        ${isMobile ? "static mx-auto" : ""}
        ${
          !isMobile && index === 0 ? "absolute top-0 left-0 rotate-[-6deg]" : ""
        }
        ${
          !isMobile && index === 1
            ? "absolute top-20 left-48 z-10 rotate-0"
            : ""
        }
        ${
          !isMobile && index === 2
            ? "absolute top-40 left-96 rotate-[6deg] z-10"
            : ""
        }
      `}
    >
      <div className="w-full h-56 relative mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <h5 className="font-semibold text-lg mb-1">{product.name}</h5>

      <p className="text-sm text-gray-500 mb-2 line-clamp-2">
        {product.description}
      </p>

      <span className="text-md font-bold">{product.price}</span>
    </Link>
  );
};

export default TrendingProductCard;
