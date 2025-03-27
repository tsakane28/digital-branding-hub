
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showEmptyState, setShowEmptyState] = useState(false);

  useEffect(() => {
    // Show empty state animation if cart is empty
    setShowEmptyState(cartItems.length === 0);
  }, [cartItems.length]);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast.success("Thank you for your order! We'll be in touch soon.");
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <span>Your Cart</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6 animate-fade-up">
              Your Selected Services
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              Review and complete your order to get started with our branding services.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto">
          {showEmptyState ? (
            <div className="max-w-md mx-auto text-center py-16 animate-fade-up">
              <div className="mb-6 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <ShoppingCart size={40} />
                </div>
              </div>
              <h2 className="text-2xl font-display font-bold mb-4">Your Cart is Empty</h2>
              <p className="text-muted-foreground mb-8">
                You haven't added any services to your cart yet. Browse our services to get started.
              </p>
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 animate-fade-right">
                <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                  <h2 className="text-2xl font-display font-bold mb-6">Cart Items</h2>
                  
                  {cartItems.length > 0 ? (
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                          <div className="sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-1">
                                  {item.description}
                                </p>
                              </div>
                              <div className="font-medium">
                                {formatPrice(item.price * item.quantity)}
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center border border-border rounded-md overflow-hidden">
                                <button
                                  className="p-2 hover:bg-secondary transition-colors"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  aria-label="Decrease quantity"
                                >
                                  <Minus size={16} />
                                </button>
                                <Input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  className="w-12 text-center border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                                <button
                                  className="p-2 hover:bg-secondary transition-colors"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  aria-label="Increase quantity"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                              <button
                                className="text-muted-foreground hover:text-red-500 transition-colors"
                                onClick={() => removeFromCart(item.id)}
                                aria-label="Remove item"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                          <Separator className="sm:hidden mt-4" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Your cart is empty.</p>
                  )}
                </div>
              </div>

              <div className="animate-fade-left">
                <div className="bg-white rounded-xl border border-border shadow-sm p-6 sticky top-24">
                  <h2 className="text-2xl font-display font-bold mb-6">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Discount</span>
                      <span>$0</span>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      className="w-full" 
                      size="lg" 
                      onClick={handleCheckout}
                      disabled={cartItems.length === 0 || isCheckingOut}
                    >
                      {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      asChild
                    >
                      <Link to="/services">
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-6 text-sm text-muted-foreground">
                    <p>Need help with your order?</p>
                    <p>Contact us at <span className="text-primary">info@reserveddigitalbranding.com</span></p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Services Section */}
      {!showEmptyState && (
        <section className="py-16 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                You Might Also Like
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore other services that complement your selections.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Social Media Management",
                  description: "Monthly management of your social media accounts with content creation and analytics.",
                  price: 650,
                  image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                },
                {
                  name: "Email Marketing Campaign",
                  description: "Design and execution of targeted email marketing campaigns to engage your audience.",
                  price: 550,
                  image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
                },
                {
                  name: "SEO Optimization",
                  description: "Improve your website's search engine ranking with our comprehensive SEO services.",
                  price: 750,
                  image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[3/2] relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">{formatPrice(service.price)}</span>
                      <Button variant="outline" asChild>
                        <Link to="/services">
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Let our experts help you identify the best branding solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary text-white border-white hover:bg-white/10" asChild>
                <Link to="/services">
                  Browse Services
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
