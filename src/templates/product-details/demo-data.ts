import heroShoe from "@/assets/images/hero.webp";

export const DEMO_PRODUCTS = [
  {
    id: 0,
    name: "Air Zoom HyperPulse",
    image: heroShoe,
    description:
      "xperience lightweight performance with the AirMax Eclipse — engineered for all-day comfort and bold street style.",
    price: "$189.00",
    discount: "10%",
    discountPrice: "$120.00",
    numReviews: 120,
    is_hero_product: true,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 1,
    name: "AirMax Eclipse",
    price: "$139.00",
    discount: "10%",
    discountPrice: "$125.10",
    description:
      "Experience lightweight performance with the AirMax Eclipse — engineered for all-day comfort and bold street style.",
    image:
      "https://img.kwcdn.com/product/fancy/49bd82d7-2205-44a1-bde4-b5d5eb2b1b8d.jpg?imageView2/2/w/500/q/60/format/webp",
    numReviews: 120,
    is_hero_product: false,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 2,
    name: "ZoomX Velocity",
    price: "$159.00",
    discount: "20%",
    discountPrice: "$127.20",
    description:
      "Built for speed and agility, ZoomX Velocity is the choice for athletes and city explorers alike.",
    image:
      "https://images.fashiontiy.com/products/T103859C5F/main_2.jpg?x-oss-process=image/interlace,1/format,webp",
    numReviews: 120,
    is_hero_product: false,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 3,
    name: "Retro Charge Runner",
    price: "$109.00",
    discount: "25%",
    discountPrice: "$81.75",
    description:
      "Turn back time with retro-inspired cushioning and a sleek design that never goes out of style.",
    image:
      "https://www.number1shopping.com/public/uploads/all/INojNpQcbYgqmnBmm2r4wtbPzL6ezrPyrEfoVOQ4.png",
    numReviews: 120,
    is_hero_product: false,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 4,
    name: "Nemofite Core",
    price: "$219.00",
    discount: "15%",
    discountPrice: "$186.15",
    description:
      "Dominate the streets with Nemofite Core’s futuristic profile and unbeatable support system.",
    image:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/00/2419663/1.jpg?2369",
    numReviews: 120,
    is_hero_product: false,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 5,
    name: "AirMax Pulse Pro",
    price: "$129.00",
    discount: "10%",
    discountPrice: "$116.10",
    description:
      "Upgrade your daily runs with the Pulse Pro — designed for impact absorption and urban flair.",
    image:
      "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
    numReviews: 120,
    is_hero_product: false,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 6,
    name: "ZoomX Drift",
    price: "$149.00",
    discount: "20%",
    discountPrice: "$119.20",
    description:
      "Crafted for maximum momentum — ZoomX Drift keeps you grounded with every fast-paced stride.",
    image:
      "https://static-01.daraz.com.bd/p/9721529763177d470be998d05d5e656f.jpg",
    numReviews: 120,
    is_hero_product: false,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 7,
    name: "Retro Vibe LX",
    price: "$99.00",
    discount: "25%",
    discountPrice: "$74.25",
    description:
      "The Retro Vibe LX brings classic aesthetics into a modern performance shell — comfort with a vintage twist.",
    image:
      "https://toffpark.com/wp-content/uploads/2024/11/lace-up-comfortable-leather-casual-shoe-brown_1.jpg",
    numReviews: 120,
    is_hero_product: false,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 8,
    name: "Nemofite Ultra",
    price: "$249.00",
    discount: "15%",
    discountPrice: "$211.65",
    description:
      "Elevate your game with Nemofite Ultra — engineered for endurance and finished with street-luxe details.",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09522.jpg?auto=webp&quality=75&width=1024",
    numReviews: 120,
    is_hero_product: false,
    offerEndsIn: 0,
    hot_deals: false,
  },
  {
    id: 9,
    name: "X Shoe New Hope",
    image:
      "https://png.pngtree.com/png-clipart/20240703/original/pngtree-running-shoes-with-a-cushioned-sole-and-laces-tied-png-image_15473358.png",
    description:
      "Elevate your game with Nemofite Ultra — engineered for endurance and finished with street-luxe details.",
    price: "$227.00",
    discount: "30%",
    discountPrice: "$195.00",
    offerEndsIn: 3600, // in seconds
    hot_deals: true,
    numReviews: 120,
  },
  {
    id: 10,
    name: "Green Turbo Sprint",
    image:
      "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-green-transparent-sports-shoes-png-image_6687298.png",
    description:
      "Elevate your game with Nemofite Ultra — engineered for endurance and finished with street-luxe details.",
    price: "$120.00",
    discount: "15%",
    discountPrice: "$99.00",
    offerEndsIn: 5400, // in seconds
    hot_deals: true,
    numReviews: 120,
  },
];

export const DEMO_SIZES = ["6", "7", "8", "9", "10", "11"];

// Mock product data - this would come from your API
export const PRODUCT_DATA = {
  id: "zoomx-velocity-001",
  name: "Nike ZoomX Velocity Running Shoes",
  brand: "Nike",
  category: "Running Shoes",
  sku: "NV-ZXV-001",
  price: 189.99,
  discountPrice: 149.99,
  discount: "21%",
  rating: 4.8,
  reviewCount: 2847,
  inStock: true,
  stockCount: 23,
  description:
    "Experience unparalleled comfort and performance with the Nike ZoomX Velocity. Engineered with cutting-edge ZoomX foam technology for maximum energy return and lightweight cushioning.",
  features: [
    "ZoomX foam midsole for superior energy return",
    "Breathable Flyknit upper construction",
    "Carbon fiber plate for propulsion",
    "Durable rubber outsole with strategic traction",
    "Lightweight design at only 7.2 oz",
  ],
  specifications: {
    weight: "7.2 oz",
    drop: "8mm",
    upperMaterial: "Flyknit",
    midsole: "ZoomX Foam",
    outsole: "Rubber compound",
    recommended: "Road running, tempo runs",
  },
  images: [
    "https://img.kwcdn.com/product/fancy/49bd82d7-2205-44a1-bde4-b5d5eb2b1b8d.jpg",
    "https://images.fashiontiy.com/products/T103859C5F/main_2.jpg",
    "https://www.number1shopping.com/public/uploads/all/INojNpQcbYgqmnBmm2r4wtbPzL6ezrPyrEfoVOQ4.png",
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/00/2419663/1.jpg?2369",
  ],
  colors: [
    { name: "Electric Blue", value: "#0066FF", code: "EB001" },
    { name: "Sunset Orange", value: "#FF6B35", code: "SO002" },
    { name: "Forest Green", value: "#228B22", code: "FG003" },
    { name: "Classic Black", value: "#1a1a1a", code: "CB004" },
  ],
  sizes: [
    { us: "7", uk: "6", eu: "40", available: true },
    { us: "7.5", uk: "6.5", eu: "40.5", available: true },
    { us: "8", uk: "7", eu: "41", available: true },
    { us: "8.5", uk: "7.5", eu: "42", available: false },
    { us: "9", uk: "8", eu: "42.5", available: true },
    { us: "9.5", uk: "8.5", eu: "43", available: true },
    { us: "10", uk: "9", eu: "44", available: true },
    { us: "10.5", uk: "9.5", eu: "44.5", available: false },
    { us: "11", uk: "10", eu: "45", available: true },
  ],
  shipping: {
    freeShipping: true,
    estimatedDays: "2-3",
    returnPolicy: "30 days",
    warranty: "1 year",
  },
};

export const DEMO_COLORS = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Red", value: "#ef4444" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#10b981" },
  { name: "Yellow", value: "#f59e0b" },
];
