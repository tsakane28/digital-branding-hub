
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
    <div className="bg-white dark:bg-black">
      {/* Hero section with large typography */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
              {t.shop.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t.shop.description}
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container px-6 mx-auto max-w-6xl">
          {/* Product categories tabs */}
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-12">
              <TabsList className="inline-flex gap-3 p-1 rounded-full bg-gray-100 dark:bg-neutral-900">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className="rounded-full px-6 py-2 data-[state=active]:bg-[#0070c9] data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Card key={i} className="bg-gray-50 dark:bg-neutral-900 border-none shadow-sm rounded-3xl">
                        <div className="aspect-square bg-gray-200 dark:bg-neutral-800 animate-pulse rounded-t-3xl"></div>
                        <CardContent className="p-8">
                          <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded mb-4"></div>
                          <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 mb-3"></div>
                          <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-1/2"></div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <ProductGrid 
                    products={filteredProducts} 
                    addToCart={addToCart} 
                    t={t} 
                    cardClassName="bg-white dark:bg-neutral-900 border-none shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-all"
                    buttonClassName="bg-[#0070c9] hover:bg-[#0070c9]/90 text-white rounded-full font-medium"
                    imageClassName="aspect-square object-cover"
                    contentClassName="p-8"
                  />
                )}
              </TabsContent>
            ))}
          </Tabs>

          <Separator className="my-24" />

          {/* Features section with cards */}
          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-50 dark:bg-neutral-900 border-none rounded-3xl p-8">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold">{t.shop.features.shipping.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{t.shop.features.shipping.description}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-neutral-900 border-none rounded-3xl p-8">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold">{t.shop.features.customization.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{t.shop.features.customization.description}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-neutral-900 border-none rounded-3xl p-8">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold">{t.shop.features.quality.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{t.shop.features.quality.description}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Downloadable resources section */}
          <section className="bg-gray-50 dark:bg-neutral-900 p-16 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-3">{t.shop.downloadable.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.shop.downloadable.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.shop.downloadable.resources.map((resource, index) => (
                <Card key={index} className="bg-white dark:bg-black border-none rounded-3xl shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      className="w-full bg-[#0070c9] hover:bg-[#0070c9]/90 text-white rounded-full font-medium" 
                      asChild
                    >
                      <a href={resource.link} download>{t.shop.downloadNow}</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
