import portofolioData from "./portofolio.json";

export interface PortfolioItem {
  title: string;
  industry: string;
  description: string;
  seed: string;
  image?: string;
  stack: string[];
  lighthouse: string;
  duration: string;
  pages: number;
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = portofolioData as PortfolioItem[];
