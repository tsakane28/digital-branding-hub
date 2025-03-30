
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  client: string;
  date: string;
  technologies: string[];
  link?: string;
}

export type PortfolioCategory = "all" | "branding" | "web" | "print" | "photography" | "video";
