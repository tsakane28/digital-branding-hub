
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: number;
  rating: number;
}

// Mock product data - in a real app, this would come from an API
const productData: Product[] = [
  {
    id: "1",
    name: "Custom T-Shirt",
    description: "Premium quality custom printed t-shirts for your brand or event.",
    price: 29.99,
    image: "/Zimbabwe_tees.jpg",
    category: "clothing",
    isNew: true,
    rating: 4.8
  },
  {
    id: "2",
    name: "Company Logo Design",
    description: "Professional logo design service to represent your brand identity.",
    price: 299.99,
    image: "/We Meat Logo 3.jpg",
    category: "branding",
    rating: 5.0
  },
  {
    id: "3",
    name: "Branded Umbrellas",
    description: "High-quality umbrellas with your company logo for promotional use.",
    price: 49.99,
    discountedPrice: 39.99,
    image: "/GroundUpUmbrellas.jpg",
    category: "promotional",
    discount: 20,
    rating: 4.7
  },
  {
    id: "4",
    name: "Vehicle Branding",
    description: "Complete vehicle wrap with custom designs for maximum visibility.",
    price: 1299.99,
    image: "/Motor-vehicle-branding.jpg",
    category: "branding",
    rating: 4.9
  },
  {
    id: "5",
    name: "Branded Backpacks",
    description: "Durable and stylish backpacks featuring your company logo.",
    price: 79.99,
    image: "/backpack.png",
    category: "accessories",
    isNew: true,
    rating: 4.6
  },
  {
    id: "6",
    name: "Corporate Stationary Kit",
    description: "Complete set of branded stationary for your office needs.",
    price: 159.99,
    discountedPrice: 129.99,
    image: "/Daruler.png",
    category: "promotional",
    discount: 15,
    rating: 4.8
  },
  {
    id: "7",
    name: "Exhibition Stand Design",
    description: "Custom exhibition booth design and production for trade shows.",
    price: 2499.99,
    image: "/FORESTRY EXBIHITIOM 10.jpg",
    category: "branding",
    rating: 4.9
  },
  {
    id: "8",
    name: "Branded Hoodies",
    description: "High-quality hoodies with embroidered or printed logos.",
    price: 69.99,
    image: "/hoodie.png",
    category: "clothing",
    rating: 4.7
  },
  {
    id: "9",
    name: "Marketing Materials Bundle",
    description: "Complete set of branded marketing materials including brochures, flyers, and business cards.",
    price: 399.99,
    discountedPrice: 349.99,
    image: "/branding.jpg",
    category: "promotional",
    discount: 12,
    rating: 4.8
  }
];

// Simulate an API request
export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 800); // Simulate network delay
  });
};

export const getProductById = (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productData.find(p => p.id === id);
      resolve(product);
    }, 300);
  });
};
