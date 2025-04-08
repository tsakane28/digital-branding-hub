
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star, Package, Palette, Truck, Shield } from "lucide-react";
import ProductGrid from "@/components/shop/ProductGrid";
import { Product, getProducts } from "@/services/productService";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Fade, Slide, Scale } from "@/components/ui/transitions";
import ParallaxBackground from "@/components/ParallaxBackground";

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

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: t.shop.features.shipping.title,
      description: t.shop.features.shipping.description
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: t.shop.features.customization.title,
      description: t.shop.features.customization.description
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t.shop.features.quality.title,
      description: t.shop.features.quality.description
    }
  ];

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero section with parallax background */}
      <ParallaxBackground
        imageUrl="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2000&auto=format&fit=crop"
        speed={0.15}
        gradientOpacity={0.7}
        className="pt-40 pb-24"
      >
        <div className="container px-6 mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Scale>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-white">
                {t.shop.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                {t.shop.description}
              </p>
            </Scale>
          </div>
        </div>
      </ParallaxBackground>

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
                    className="rounded-full px-6 py-2 data-[state=active]:bg-black dark:data-[state=active]:bg-white data-[state=active]:text-white dark:data-[state=active]:text-black"
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
                    buttonClassName="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 dark:text-black text-white rounded-full font-medium"
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
              {features.map((feature, index) => (
                <Scale key={index} delay={index * 0.1}>
                  <Card className="bg-gray-50 dark:bg-neutral-900 border-none rounded-3xl p-8 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-2">
                      <div className="mb-4 p-3 bg-black/5 dark:bg-white/5 rounded-full w-12 h-12 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-2xl font-medium">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Scale>
              ))}
            </div>
          </section>

          {/* Downloadable resources section */}
          <section className="bg-gray-50 dark:bg-neutral-900 p-16 rounded-3xl">
            <div className="text-center mb-12">
              <Slide direction="up">
                <h2 className="text-3xl font-semibold mb-3">{t.shop.downloadable.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.shop.downloadable.description}</p>
              </Slide>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.shop.downloadable.resources.map((resource, index) => (
                <Scale key={index} delay={index * 0.1}>
                  <Card className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
                        <Package className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl font-medium">{resource.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button 
                        className="w-full bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 dark:text-black text-white rounded-full font-medium" 
                        asChild
                      >
                        <a href={resource.link} download>{t.shop.downloadNow}</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Scale>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
