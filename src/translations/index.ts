
type TranslationType = {
  [key: string]: {
    [key: string]: any;
  };
};

// All website translations
export const translations: TranslationType = {
  en: {
    // Common elements
    common: {
      getQuote: "Get a Quote",
      readMore: "Read More",
      submit: "Submit",
      send: "Send",
      viewAll: "View All",
      contactUs: "Contact Us",
      loading: "Loading...",
      search: "Search",
      download: "Download",
      learnMore: "Learn More",
      callToAction: "Ready to elevate your brand? Get in touch today!",
      callToActionButton: "Start Your Project",
    },
    
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      shop: "Shop",
      blog: "Blog",
      cart: "Cart",
    },
    
    // Shop page
    shop: {
      title: "Our Products & Services",
      description: "Browse our collection of high-quality products and services tailored to elevate your brand.",
      allProducts: "All Products",
      branding: "Branding",
      clothing: "Clothing",
      accessories: "Accessories",
      promotional: "Promotional",
      addToCart: "Add to Cart",
      viewDetails: "View Details",
      new: "New",
      discount: "{discount}% Off",
      noProducts: "No products found in this category.",
      
      features: {
        shipping: {
          title: "Free Shipping",
          description: "Enjoy free shipping on all orders within Harare. Countrywide delivery available at competitive rates."
        },
        customization: {
          title: "Custom Designs",
          description: "We offer personalized customization for all products. Contact us to discuss your specific requirements."
        },
        quality: {
          title: "Premium Quality",
          description: "We use only the highest quality materials and printing techniques for all our products."
        }
      },
      
      downloadable: {
        title: "Free Resources",
        description: "Download our free resources to help improve your branding strategy",
        resources: [
          {
            title: "Branding Guide",
            description: "A comprehensive guide to building a strong brand identity",
            link: "/downloads/branding_guide.pdf"
          },
          {
            title: "Color Psychology",
            description: "Learn how colors affect consumer perception and behavior",
            link: "/downloads/color_psychology.pdf"
          },
          {
            title: "Logo Design Tips",
            description: "Professional tips for creating memorable logos",
            link: "/downloads/logo_design_tips.pdf"
          }
        ]
      },
      
      downloadNow: "Download Now"
    },
    
    // Cart page
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty",
      continueShopping: "Continue Shopping",
      subtotal: "Subtotal",
      shipping: "Shipping",
      total: "Total",
      checkout: "Proceed to Checkout",
      remove: "Remove",
      quantity: "Quantity",
      update: "Update",
      summary: "Order Summary",
      estimatedShipping: "Estimated Shipping",
      estimatedTax: "Estimated Tax",
      free: "Free",
      emptyMessage: "Looks like you haven't added anything to your cart yet.",
      browseProducts: "Browse Products"
    },
    
    // Live chat
    liveChat: {
      title: "Live Chat",
      greeting: "Hello! How can we help you today?",
      offlineMessage: "We're currently offline. Please leave a message and we'll get back to you.",
      placeholder: "Type your message here...",
      send: "Send",
      startChat: "Start Chat",
      operatorName: "Support Agent",
      close: "Close Chat",
      offlineHours: "Our chat support is available Monday-Friday, 9AM to 5PM.",
      emailPrompt: "Leave your email for a response:"
    }
  },
  
  // Spanish translations
  es: {
    common: {
      getQuote: "Obtener Presupuesto",
      readMore: "Leer Más",
      submit: "Enviar",
      send: "Enviar",
      viewAll: "Ver Todo",
      contactUs: "Contáctenos",
      loading: "Cargando...",
      search: "Buscar",
      download: "Descargar",
      learnMore: "Aprende Más",
      callToAction: "¿Listo para elevar tu marca? ¡Contáctanos hoy!",
      callToActionButton: "Comienza Tu Proyecto",
    },
    
    nav: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
      shop: "Tienda",
      blog: "Blog",
      cart: "Carrito",
    },
    
    shop: {
      title: "Nuestros Productos y Servicios",
      description: "Explora nuestra colección de productos y servicios de alta calidad diseñados para elevar tu marca.",
      allProducts: "Todos los Productos",
      branding: "Marca",
      clothing: "Ropa",
      accessories: "Accesorios",
      promotional: "Promocional",
      addToCart: "Añadir al Carrito",
      viewDetails: "Ver Detalles",
      new: "Nuevo",
      discount: "{discount}% Descuento",
      noProducts: "No se encontraron productos en esta categoría.",
      
      features: {
        shipping: {
          title: "Envío Gratuito",
          description: "Disfruta de envío gratuito en todos los pedidos dentro de Harare. Envío a todo el país disponible a tarifas competitivas."
        },
        customization: {
          title: "Diseños Personalizados",
          description: "Ofrecemos personalización para todos los productos. Contáctanos para discutir tus requisitos específicos."
        },
        quality: {
          title: "Calidad Premium",
          description: "Utilizamos solo materiales y técnicas de impresión de la más alta calidad para todos nuestros productos."
        }
      },
      
      downloadable: {
        title: "Recursos Gratuitos",
        description: "Descarga nuestros recursos gratuitos para ayudar a mejorar tu estrategia de marca",
        resources: [
          {
            title: "Guía de Marca",
            description: "Una guía completa para construir una identidad de marca sólida",
            link: "/downloads/branding_guide.pdf"
          },
          {
            title: "Psicología del Color",
            description: "Aprende cómo los colores afectan la percepción y el comportamiento del consumidor",
            link: "/downloads/color_psychology.pdf"
          },
          {
            title: "Consejos de Diseño de Logo",
            description: "Consejos profesionales para crear logos memorables",
            link: "/downloads/logo_design_tips.pdf"
          }
        ]
      },
      
      downloadNow: "Descargar Ahora"
    },
    
    cart: {
      title: "Tu Carrito",
      empty: "Tu carrito está vacío",
      continueShopping: "Continuar Comprando",
      subtotal: "Subtotal",
      shipping: "Envío",
      total: "Total",
      checkout: "Proceder al Pago",
      remove: "Eliminar",
      quantity: "Cantidad",
      update: "Actualizar",
      summary: "Resumen del Pedido",
      estimatedShipping: "Envío Estimado",
      estimatedTax: "Impuesto Estimado",
      free: "Gratis",
      emptyMessage: "Parece que aún no has añadido nada a tu carrito.",
      browseProducts: "Explorar Productos"
    },
    
    liveChat: {
      title: "Chat en Vivo",
      greeting: "¡Hola! ¿Cómo podemos ayudarte hoy?",
      offlineMessage: "Actualmente estamos fuera de línea. Por favor, deja un mensaje y nos pondremos en contacto contigo.",
      placeholder: "Escribe tu mensaje aquí...",
      send: "Enviar",
      startChat: "Iniciar Chat",
      operatorName: "Agente de Soporte",
      close: "Cerrar Chat",
      offlineHours: "Nuestro chat de soporte está disponible de lunes a viernes, de 9AM a 5PM.",
      emailPrompt: "Deja tu correo electrónico para una respuesta:"
    }
  },
  
  // French translations
  fr: {
    common: {
      getQuote: "Obtenir un Devis",
      readMore: "Lire Plus",
      submit: "Soumettre",
      send: "Envoyer",
      viewAll: "Voir Tout",
      contactUs: "Contactez-nous",
      loading: "Chargement...",
      search: "Rechercher",
      download: "Télécharger",
      learnMore: "En Savoir Plus",
      callToAction: "Prêt à élever votre marque? Contactez-nous aujourd'hui!",
      callToActionButton: "Démarrer Votre Projet",
    },
    
    // Rest of French translations follow the same pattern
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      shop: "Boutique",
      blog: "Blog",
      cart: "Panier",
    },
    
    shop: {
      title: "Nos Produits et Services",
      description: "Parcourez notre collection de produits et services de haute qualité conçus pour élever votre marque.",
      allProducts: "Tous les Produits",
      branding: "Marque",
      clothing: "Vêtements",
      accessories: "Accessoires",
      promotional: "Promotionnel",
      addToCart: "Ajouter au Panier",
      viewDetails: "Voir les Détails",
      new: "Nouveau",
      discount: "{discount}% de Réduction",
      noProducts: "Aucun produit trouvé dans cette catégorie.",
      
      features: {
        shipping: {
          title: "Livraison Gratuite",
          description: "Profitez de la livraison gratuite sur toutes les commandes à Harare. Livraison nationale disponible à des tarifs compétitifs."
        },
        customization: {
          title: "Conceptions Personnalisées",
          description: "Nous offrons une personnalisation pour tous les produits. Contactez-nous pour discuter de vos besoins spécifiques."
        },
        quality: {
          title: "Qualité Premium",
          description: "Nous utilisons uniquement des matériaux et des techniques d'impression de la plus haute qualité pour tous nos produits."
        }
      },
      
      downloadable: {
        title: "Ressources Gratuites",
        description: "Téléchargez nos ressources gratuites pour améliorer votre stratégie de marque",
        resources: [
          {
            title: "Guide de Marque",
            description: "Un guide complet pour construire une identité de marque forte",
            link: "/downloads/branding_guide.pdf"
          },
          {
            title: "Psychologie des Couleurs",
            description: "Apprenez comment les couleurs affectent la perception et le comportement des consommateurs",
            link: "/downloads/color_psychology.pdf"
          },
          {
            title: "Conseils de Conception de Logo",
            description: "Conseils professionnels pour créer des logos mémorables",
            link: "/downloads/logo_design_tips.pdf"
          }
        ]
      },
      
      downloadNow: "Télécharger Maintenant"
    },
    
    cart: {
      title: "Votre Panier",
      empty: "Votre panier est vide",
      continueShopping: "Continuer les Achats",
      subtotal: "Sous-total",
      shipping: "Livraison",
      total: "Total",
      checkout: "Procéder au Paiement",
      remove: "Supprimer",
      quantity: "Quantité",
      update: "Mettre à Jour",
      summary: "Résumé de la Commande",
      estimatedShipping: "Frais de Livraison Estimés",
      estimatedTax: "Taxes Estimées",
      free: "Gratuit",
      emptyMessage: "Il semble que vous n'avez pas encore ajouté d'articles à votre panier.",
      browseProducts: "Parcourir les Produits"
    },
    
    liveChat: {
      title: "Chat en Direct",
      greeting: "Bonjour! Comment pouvons-nous vous aider aujourd'hui?",
      offlineMessage: "Nous sommes actuellement hors ligne. Veuillez laisser un message et nous vous contacterons.",
      placeholder: "Tapez votre message ici...",
      send: "Envoyer",
      startChat: "Démarrer le Chat",
      operatorName: "Agent de Support",
      close: "Fermer le Chat",
      offlineHours: "Notre chat de support est disponible du lundi au vendredi, de 9h à 17h.",
      emailPrompt: "Laissez votre email pour une réponse:"
    }
  },
  
  // Chinese translations (simplified)
  zh: {
    common: {
      getQuote: "获取报价",
      readMore: "阅读更多",
      submit: "提交",
      send: "发送",
      viewAll: "查看全部",
      contactUs: "联系我们",
      loading: "加载中...",
      search: "搜索",
      download: "下载",
      learnMore: "了解更多",
      callToAction: "准备提升您的品牌了吗？今天就联系我们！",
      callToActionButton: "开始您的项目",
    },
    
    nav: {
      home: "首页",
      about: "关于我们",
      services: "服务",
      portfolio: "作品集",
      contact: "联系方式",
      shop: "商店",
      blog: "博客",
      cart: "购物车",
    },
    
    shop: {
      title: "我们的产品和服务",
      description: "浏览我们精心设计的高质量产品和服务，为您的品牌增添价值。",
      allProducts: "所有产品",
      branding: "品牌推广",
      clothing: "服装",
      accessories: "配件",
      promotional: "促销品",
      addToCart: "加入购物车",
      viewDetails: "查看详情",
      new: "新品",
      discount: "{discount}% 折扣",
      noProducts: "此类别中没有找到产品。",
      
      features: {
        shipping: {
          title: "免费配送",
          description: "哈拉雷地区内所有订单免费配送。全国配送服务以具竞争力的价格提供。"
        },
        customization: {
          title: "定制设计",
          description: "我们为所有产品提供个性化定制。联系我们讨论您的具体需求。"
        },
        quality: {
          title: "优质品质",
          description: "我们所有产品均采用最高质量的材料和印刷技术。"
        }
      },
      
      downloadable: {
        title: "免费资源",
        description: "下载我们的免费资源，帮助改善您的品牌策略",
        resources: [
          {
            title: "品牌指南",
            description: "构建强大品牌身份的综合指南",
            link: "/downloads/branding_guide.pdf"
          },
          {
            title: "色彩心理学",
            description: "了解色彩如何影响消费者感知和行为",
            link: "/downloads/color_psychology.pdf"
          },
          {
            title: "标志设计技巧",
            description: "创建令人难忘的标志的专业技巧",
            link: "/downloads/logo_design_tips.pdf"
          }
        ]
      },
      
      downloadNow: "立即下载"
    },
    
    cart: {
      title: "您的购物车",
      empty: "您的购物车是空的",
      continueShopping: "继续购物",
      subtotal: "小计",
      shipping: "运费",
      total: "总计",
      checkout: "结账",
      remove: "移除",
      quantity: "数量",
      update: "更新",
      summary: "订单摘要",
      estimatedShipping: "预计运费",
      estimatedTax: "预计税费",
      free: "免费",
      emptyMessage: "看起来您还没有将任何商品添加到购物车。",
      browseProducts: "浏览产品"
    },
    
    liveChat: {
      title: "在线客服",
      greeting: "您好！今天我们能为您提供什么帮助？",
      offlineMessage: "我们目前不在线。请留言，我们会尽快回复您。",
      placeholder: "在此输入您的消息...",
      send: "发送",
      startChat: "开始聊天",
      operatorName: "客服专员",
      close: "关闭聊天",
      offlineHours: "我们的在线客服服务时间为周一至周五，上午9点至下午5点。",
      emailPrompt: "留下您的电子邮件以获取回复："
    }
  }
};
