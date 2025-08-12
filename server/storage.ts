import { type Company, type InsertCompany, type Product, type InsertProduct, type Quote, type InsertQuote } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getCompany(id: string): Promise<Company | undefined>;
  getCompanyByName(name: string): Promise<Company | undefined>;
  createCompany(company: InsertCompany): Promise<Company>;
  
  getProducts(companyId?: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  createQuote(quote: InsertQuote): Promise<Quote>;
  getQuotes(companyId: string): Promise<Quote[]>;
}

export class MemStorage implements IStorage {
  private companies: Map<string, Company>;
  private products: Map<string, Product>;
  private quotes: Map<string, Quote>;

  constructor() {
    this.companies = new Map();
    this.products = new Map();
    this.quotes = new Map();
    
    // Initialize with Siraj Sheet Manufacturing data
    this.initializeData();
  }

  private async initializeData() {
    const companyId = randomUUID();
    const company: Company = {
      id: companyId,
      name: "Siraj Sheet Manufacturing Co Pvt Ltd",
      memberSince: 2024,
      location: "Karachi, Sindh, Pakistan",
      country: "Pakistan",
      countryCode: "pk",
      phone: "+92 324 2222193",
      rating: "4.0",
      reviewCount: 365,
      responseTime: "< 1hr",
      transactions: 505,
      importExportRecord: 2501,
      productCount: 15,
      description: "We are a specialized manufacturer with extensive experience in producing high-quality garments for the fashion industry. Our company has established itself as a trusted partner for brands looking for reliable manufacturing solutions.",
      keyStrengths: [
        "Fast, Convenient 100% Secure Development | Quality Control On-time Production",
        "Lower Cost And Easy Shipping - Our Commitment to you | Complete Online Service",
        "Just Getting Things Done Reasonably Priced: Get Value for Money | Discounted Items",
        "Good Raw Material | Global Operation Quality And Price",
        "Master Quality Custom T-Shirt Manufacturing | Global Quality Customization",
        "Specialty Quality Solution Regarding And Maybe Online Management Service Garment Fits",
        "We sell with our in-house Screen Print brand 100% Personalized Embroidered Items"
      ],
      qualityAssurance: "We implement strict quality control measures throughout our production process. From raw material inspection to final product testing, we ensure that every item meets international standards and customer expectations.",
      manufacturingCapabilities: [
        "Production Line with Advanced Equipment",
        "Cutting, Sewing & Finishing Departments",
        "Screen Printing & Embroidery Services",
        "Packaging & Quality Control"
      ]
    };
    
    this.companies.set(companyId, company);

    // Initialize products
    const productData = [
      { name: "Camera Equipment", imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "299", maxPrice: "899", category: "equipment" },
      { name: "Headphones", imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "79", maxPrice: "299", category: "electronics" },
      { name: "Display Stand", imageUrl: "https://pixabay.com/get/g99d4494f1b73769342e3ac7caab005f3cc38ae0b16badae0a0e903bf449913b2b1f07b6a36741f36b61ff1687e94ca9a526fe407a58061e8e23f7301b6b0e5a5_1280.jpg", minPrice: "49", maxPrice: "199", category: "display" },
      { name: "Office Supplies", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "25", maxPrice: "150", category: "supplies" },
      { name: "Athletic Shoes", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "89", maxPrice: "249", category: "footwear" },
      { name: "Dress Shoes", imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "129", maxPrice: "399", category: "footwear" },
      { name: "Skincare Set", imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "59", maxPrice: "199", category: "beauty" },
      { name: "Cosmetics", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "39", maxPrice: "129", category: "beauty" },
      { name: "Beauty Kit", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "79", maxPrice: "249", category: "beauty" },
      { name: "Natural Care", imageUrl: "https://pixabay.com/get/g5ee99aa6d218bf990d8533cd9c2e743b60e381083d87fcb48558c014bb8d495332cef94a02d107dffa30c5e8244a1227d8122a88309a05073ec0bbabe172f474_1280.jpg", minPrice: "45", maxPrice: "149", category: "beauty" },
      { name: "Premium Serums", imageUrl: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "89", maxPrice: "299", category: "beauty" },
      { name: "Pro Headphones", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "199", maxPrice: "599", category: "electronics" },
      { name: "Design Elements", imageUrl: "https://images.unsplash.com/photo-1586953983027-d7508a64f4bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "19", maxPrice: "89", category: "design" },
      { name: "Holographic", imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "29", maxPrice: "99", category: "design" },
      { name: "Gift Packaging", imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "15", maxPrice: "75", category: "packaging" },
      { name: "Cosmetic Containers", imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "35", maxPrice: "159", category: "containers" },
      { name: "Supplements", imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "49", maxPrice: "179", category: "health" },
      { name: "Metal Sheets", imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", minPrice: "199", maxPrice: "899", category: "materials" }
    ];

    productData.forEach(productInfo => {
      const productId = randomUUID();
      const product: Product = {
        id: productId,
        companyId,
        ...productInfo
      };
      this.products.set(productId, product);
    });
  }

  async getCompany(id: string): Promise<Company | undefined> {
    return this.companies.get(id);
  }

  async getCompanyByName(name: string): Promise<Company | undefined> {
    return Array.from(this.companies.values()).find(
      (company) => company.name === name
    );
  }

  async createCompany(insertCompany: InsertCompany): Promise<Company> {
    const id = randomUUID();
    const company: Company = { ...insertCompany, id };
    this.companies.set(id, company);
    return company;
  }

  async getProducts(companyId?: string): Promise<Product[]> {
    const products = Array.from(this.products.values());
    if (companyId) {
      return products.filter(product => product.companyId === companyId);
    }
    return products;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = randomUUID();
    const quote: Quote = { 
      ...insertQuote, 
      id,
      createdAt: new Date()
    };
    this.quotes.set(id, quote);
    return quote;
  }

  async getQuotes(companyId: string): Promise<Quote[]> {
    return Array.from(this.quotes.values())
      .filter(quote => quote.companyId === companyId);
  }
}

export const storage = new MemStorage();
