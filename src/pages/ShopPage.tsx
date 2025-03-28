
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star } from "lucide-react";
import ProductGrid from "@/components/shop/ProductGrid";
import { Product, getProducts } from "@/services/productService";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const categories = [
    { id: "all", name: t.shop.allProducts },
    { id: "branding", name: t.shop.branding },
    { id: "clothing", name: t.shop.clothing },
    { id: "accessories", name: t.shop.accessories },
    { id: "promotional", name: t.shop.promotional }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="container px-6 mx-auto py-16 md:py-24">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.shop.title}</h1>
        <p className="text-muted-foreground">{t.shop.description}</p>
      </div>

      <div className="flex flex-col space-y-8">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="bg-card border border-border animate-pulse">
                      <div className="aspect-square bg-muted"></div>
                      <CardContent className="p-6">
                        <div className="h-4 bg-muted rounded mb-2"></div>
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <ProductGrid products={filteredProducts} addToCart={addToCart} t={t} />
              )}
            </TabsContent>
          ))}
        </Tabs>

        <Separator className="my-8" />

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>{t.shop.features.shipping.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.shop.features.shipping.description}</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>{t.shop.features.customization.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.shop.features.customization.description}</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>{t.shop.features.quality.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.shop.features.quality.description}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-primary/5 p-8 rounded-lg mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">{t.shop.downloadable.title}</h2>
            <p className="text-muted-foreground mt-2">{t.shop.downloadable.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.shop.downloadable.resources.map((resource, index) => (
              <Card key={index} className="bg-background hover-scale">
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={resource.link} download>{t.shop.downloadNow}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopPage;
