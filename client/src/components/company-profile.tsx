import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { Company } from "@shared/schema";

export default function CompanyProfile() {
  const { data: company, isLoading } = useQuery<Company>({
    queryKey: ["/api/company"],
    queryFn: async () => {
      const response = await fetch("/api/company?name=Siraj Sheet Manufacturing Co Pvt Ltd");
      if (!response.ok) throw new Error("Failed to fetch company");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-purple-100 to-purple-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="animate-pulse">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-300 rounded w-96 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-48 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="bg-gradient-to-r from-purple-100 to-purple-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-red-600">Failed to load company information</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-6">
              {/* Company logo with swirl design */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center" data-testid="company-logo">
                <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full relative">
                    <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900" data-testid="text-company-name">{company.name}</h1>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-600" data-testid="text-member-since">Member Since {company.memberSince}</span>
                  <span className="text-gray-400">-</span>
                  <span className="text-sm text-gray-600" data-testid="text-location">{company.location}</span>
                  <img src={`https://flagcdn.com/16x12/${company.countryCode}.png`} alt={`${company.country} flag`} className="ml-1" />
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400" data-testid="rating-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= 4 ? 'fill-current' : 'stroke-current fill-transparent'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700" data-testid="text-rating">
                      {company.rating} ({company.reviewCount})
                    </span>
                  </div>
                  <span className="text-gray-400">-</span>
                  <span className="text-sm text-gray-600" data-testid="text-response-time">Response Rate {company.responseTime}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-4">
              <div className="flex items-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900" data-testid="text-transactions">{company.transactions}</div>
                  <div className="text-xs text-gray-500">Transactions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900" data-testid="text-import-export">{company.importExportRecord}</div>
                  <div className="text-xs text-gray-500">Import/export record</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900" data-testid="text-products">{company.productCount}</div>
                  <div className="text-xs text-gray-500">Products</div>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2" data-testid="button-follow-seller">
                  Follow Seller
                </Button>
                <Button variant="outline" className="border-gray-300 hover:border-purple-600 text-gray-700 px-6 py-2" data-testid="button-send-inquiry">
                  Send Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
