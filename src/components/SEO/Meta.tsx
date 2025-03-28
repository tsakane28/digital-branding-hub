
import { Helmet } from "react-helmet-async";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
}

const Meta = ({
  title,
  description,
  keywords = "digital branding, marketing, design, Zimbabwe, graphic design, web design",
  ogImage = "/logo.png",
  ogUrl = "https://reserveddigitalbranding.com",
  ogType = "website",
  twitterCard = "summary_large_image"
}: MetaProps) => {
  // Format title to ensure it's SEO friendly with brand name
  const formattedTitle = title.includes("Reserved Digital") 
    ? title 
    : `${title} | Reserved Digital Branding`;

  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default Meta;
