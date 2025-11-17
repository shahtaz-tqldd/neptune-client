"use client";
import React, { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Check,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PRODUCT_DATA } from "./demo-data";
import Button from "@/components/buttons/primary-button";
import Title from "@/components/ui/title";

// Image Gallery Component
interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group">
        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
          <img
            src={images[currentImage]}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
              <Heart className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
              <Share2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === index
                  ? "border-green-600"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`${productName} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Color Selector Component
interface ColorSelectorProps {
  colors: { code: string; name: string; value: string }[];
  selectedColor: { code: string; name: string; value: string } | null;
  onColorChange: (color: { code: string; name: string; value: string }) => void;
}

const ColorSelector = ({
  colors,
  selectedColor,
  onColorChange,
}: ColorSelectorProps) => {
  return (
    <div className="space-y-3">
      <h4>Color: {selectedColor?.name}</h4>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.code}
            onClick={() => onColorChange(color)}
            title={color.name}
            className={`flx gap-2 py-1 pl-2 pr-2.5 rounded-lg ${
              selectedColor?.value === color.value
                ? "bg-primary/15 text-primary"
                : "bg-gray-100 hover:bg-gray-200 tr"
            }`}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: color.value,
              }}
            ></span>
            <span className="text-sm">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Size Selector Component
interface SizeType {
  us: string;
  uk: string;
  eu: string;
  available: boolean;
}

interface SizeSelectorProps {
  sizes: SizeType[];
  selectedSize: SizeType | null;
  onSizeChange: (size: SizeType) => void;
}

const SizeSelector = ({
  sizes,
  selectedSize,
  onSizeChange,
}: SizeSelectorProps) => {
  return (
    <div className="space-y-3">
      <h4>Size: {selectedSize?.us}</h4>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size.us}
            onClick={() => size.available && onSizeChange(size)}
            disabled={!size.available}
            className={`h-9 w-9 rounded-full text-sm font-medium tr ${
              selectedSize?.us === size.us
                ? "bg-primary text-white shadow-md"
                : size.available
                ? "text-gray-700 bg-gray-100 hover:bg-gray-200"
                : "bg-gray-100 text-gray-400 cursor-not-allowed line-through"
            }`}
          >
            {size.us}
          </button>
        ))}
      </div>
    </div>
  );
};

// Quantity Selector Component
interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  max?: number;
}

const QuantitySelector = ({
  quantity,
  onQuantityChange,
  max = 10,
}: QuantitySelectorProps) => {
  return (
    <div className="space-y-3">
      <h4>Quantity</h4>
      <div className="flex items-center border-2 border-primary/40 rounded-lg w-fit px-1">
        <button
          onClick={() => quantity > 1 && onQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
          className="p-2 hover:bg-gray-100 tr rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="px-3 py-2 font-medium min-w-[44px] text-center">
          {quantity}
        </span>
        <button
          onClick={() => quantity < max && onQuantityChange(quantity + 1)}
          disabled={quantity >= max}
          className="p-2 hover:bg-gray-100 tr rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Product Features Component
interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <div className="space-y-4 mt-9">
      <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-4 text-sm text-gray-700"
          >
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Shipping Info Component
interface ShippingInfoProps {
  shipping: {
    returnPolicy: string;
    warranty: string;
  };
}

const ShippingInfo = ({ shipping }: ShippingInfoProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
      <div className="flex items-center gap-3">
        <RotateCcw className="w-5 h-5 text-green-600" />
        <div className="flex flex-col">
          <span className="font-medium text-sm opacity-80">
            {shipping.returnPolicy} Returns
          </span>
          <span className="text-xs opacity-60">
            Free returns within {shipping.returnPolicy}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Shield className="w-5 h-5 text-orange-500" />
        <div className="flex flex-col">
          <span className="font-medium text-sm opacity-80">
            {shipping.warranty} Warranty
          </span>
          <span className="text-xs opacity-60">
            Manufacturer warranty included
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Truck className="w-5 h-5 text-blue-600" />
        <div className="flex flex-col">
          <span className="font-medium text-sm opacity-80">Free Delivery</span>
          <span className="text-xs opacity-60">
            Free delivery on orders over $50
          </span>
        </div>
      </div>
    </div>
  );
};

/* Product Specifications */
interface ProductSpeceificationsProps {
  specifications: Record<string, string>;
  className?: string;
}

const ProductSpeceifications = ({
  specifications,
  className,
}: ProductSpeceificationsProps) => {
  return (
    <div className={cn("md:mt-16 mt-8", className)}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
      <div className="grid grid-cols-1">
        {Object.entries(specifications).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
          >
            <span className="font-medium text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </span>
            <span className="text-gray-900 font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Product Details Component
const ProductDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0]);
  const [selectedSize, setSelectedSize] = useState(PRODUCT_DATA.sizes[2]);

  const [quantity, setQuantity] = useState(1);

  const savings = PRODUCT_DATA.price - PRODUCT_DATA.discountPrice;
  const savingsPercentage = Math.round((savings / PRODUCT_DATA.price) * 100);

  return (
    <div className="md:pt-32 pt-24 pb-20 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - Image Gallery */}
        <div className="space-y-6">
          <div className="block md:hidden space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{PRODUCT_DATA.brand}</span>
              <span>•</span>
              <span>{PRODUCT_DATA.category}</span>
            </div>

            {/* Product Title */}
            <h3 className="text-gray-900 leading-tight">{PRODUCT_DATA.name}</h3>
          </div>
          <ImageGallery
            images={PRODUCT_DATA.images}
            productName={PRODUCT_DATA.name}
          />

          <ProductSpeceifications
            className="hidden md:block"
            specifications={PRODUCT_DATA.specifications}
          />
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          {/* Brand and Category */}
          <div className="hidden md:block space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{PRODUCT_DATA.brand}</span>
              <span>•</span>
              <span>{PRODUCT_DATA.category}</span>
            </div>

            {/* Product Title */}
            <Title>{PRODUCT_DATA.name}</Title>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(PRODUCT_DATA.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm font-medium ml-1">
                {PRODUCT_DATA.rating}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({PRODUCT_DATA.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-gray-900">
                ${PRODUCT_DATA.discountPrice}
              </span>
              <span className="text-xl text-gray-500 line-through">
                ${PRODUCT_DATA.price}
              </span>
              <span className="ml-10 text-orange-500 font-semibold">
                ✨ Save {savingsPercentage}%
              </span>
            </div>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-700">
              In Stock ({PRODUCT_DATA.stockCount} left)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            {PRODUCT_DATA.description}
          </p>

          {/* Color Selection */}
          <ColorSelector
            colors={PRODUCT_DATA.colors}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />

          {/* Size Selection */}
          <SizeSelector
            sizes={PRODUCT_DATA.sizes}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />

          {/* Quantity Selection */}
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={setQuantity}
            max={Math.min(10, PRODUCT_DATA.stockCount)}
          />

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <Button variant="accent" size="lg">
              <div className="flx gap-3">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </div>
            </Button>
            <Button link="/checkout">Buy Now</Button>
          </div>

          {/* Shipping Info */}
          <ShippingInfo shipping={PRODUCT_DATA.shipping} />

          {/* Product Features */}
          <ProductFeatures features={PRODUCT_DATA.features} />

          <ProductSpeceifications
            className="block md:hidden"
            specifications={PRODUCT_DATA.specifications}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
