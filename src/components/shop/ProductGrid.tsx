
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/services/productService";
import { useState } from "react";

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product) => void;
  t: any;
}

const ProductGrid = ({ products, addToCart, t }: ProductGridProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length === 0 ? (
        <div className="col-span-3 text-center py-12">
          <p className="text-muted-foreground">{t.shop.noProducts}</p>
        </div>
      ) : (
        products.map((product) => (
          <Card 
            key={product.id} 
            className="service-card overflow-hidden transition-all duration-300 hover-scale"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full transition-transform duration-500 transform-gpu hover:scale-105"
              />
              {product.isNew && (
                <Badge className="absolute top-3 left-3 bg-primary text-white">
                  {t.shop.new}
                </Badge>
              )}
              {product.discount > 0 && (
                <Badge className="absolute top-3 right-3 bg-destructive text-white">
                  {t.shop.discount.replace('{discount}', product.discount)}
                </Badge>
              )}
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                  <span className="text-sm">{product.rating}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                {product.discountedPrice ? (
                  <div className="space-x-2">
                    <span className="text-xl font-bold">${product.discountedPrice}</span>
                    <span className="text-muted-foreground line-through">${product.price}</span>
                  </div>
                ) : (
                  <span className="text-xl font-bold">${product.price}</span>
                )}
              </div>
            </CardContent>

            <CardFooter>
              <Button 
                className="w-full group" 
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                {t.shop.addToCart}
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};

export default ProductGrid;
