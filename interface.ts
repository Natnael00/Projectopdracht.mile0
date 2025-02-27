export interface Company {
    id: string;
    name: string;
    description: string;
    marketValue: number;
    isActive: boolean;
    foundedDate: string;
    imageUrl: string;
    industry: "Technology" | "E-commerce" | "Automotive" | "Social Media" | "Finance" | "Semiconductors" | "Oil & Gas" | "Gaming";
    locations: string[];
    founder: Founder;
}

export interface Founder {
    id: string;
    name: string;
    birthDate: string;
    nationality: string;
}
