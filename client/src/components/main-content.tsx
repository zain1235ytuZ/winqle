import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Company } from "@shared/schema";

export default function MainContent() {
  const [quoteMessage, setQuoteMessage] = useState("What You Need Please Tell Us\nWe Will Give The Best Quote Thanks\nAnd Regards");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: company } = useQuery<Company>({
    queryKey: ["/api/company"],
    queryFn: async () => {
      const response = await fetch("/api/company?name=Siraj Sheet Manufacturing Co Pvt Ltd");
      if (!response.ok) throw new Error("Failed to fetch company");
      return response.json();
    },
  });

  const submitQuoteMutation = useMutation({
    mutationFn: async (message: string) => {
      if (!company) throw new Error("Company not found");
      return apiRequest("POST", "/api/quotes", {
        message,
        companyId: company.id,
      });
    },
    onSuccess: () => {
      toast({
        title: "Quote Submitted",
        description: "Your quote request has been submitted successfully.",
      });
      setQuoteMessage("What You Need Please Tell Us\nWe Will Give The Best Quote Thanks\nAnd Regards");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteMessage.trim()) {
      toast({
        title: "Error",
        description: "Please enter your requirements.",
        variant: "destructive",
      });
      return;
    }
    submitQuoteMutation.mutate(quoteMessage);
  };

  if (!company) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Company Description */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4" data-testid="text-company-description-title">Company Description</h3>
              <div className="prose text-gray-700 leading-relaxed space-y-4">
                <p data-testid="text-company-intro">{company.description}</p>
                
                <div>
                  <p className="font-semibold">Our Product Range:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>T-shirts Men/Women (Various Sizes & Styles) - Women: From XS to XXXL | Men: From S to XXXL</li>
                    <li>Hoodies And Hooded/Zip With Hood | Long Sleeve T-Shirt | Tank Top | Crop Top</li>
                    <li>Sweatshirt | Ladies Long-Sleeve | Short Shorts T-Shirts And Bottoms | Polo-Shirts</li>
                    <li>Exercise and Casual Wear | Golf/Women's Golf Outerwear And Various</li>
                    <li>T-shirts Pants-Shorts-Girls/Boys And Various Brand | Jackets | Boys- / Girls Shirts</li>
                    <li>Seasonal Based T-Shirts Collection | Fancy And Plain</li>
                    <li>Scarf Belts & Promotional Giveaways | Seasonal Discount And Key Chains</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Key Strengths:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm" data-testid="list-key-strengths">
                    {company.keyStrengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Quality Assurance:</p>
                  <p className="text-sm" data-testid="text-quality-assurance">{company.qualityAssurance}</p>
                </div>

                <div>
                  <p className="font-semibold">Manufacturing Capabilities:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm" data-testid="list-manufacturing-capabilities">
                    {company.manufacturingCapabilities.map((capability, index) => (
                      <li key={index}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seller Comparison Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-white mb-4" data-testid="text-seller-comparison-title">See How Other Sellers Stand Out</h3>
            <p className="text-purple-100 mb-6">These Sellers Have Completed Their Profiles Last Week—Get Inspired And Complete Yours Today.</p>
            
            <div className="space-y-3">
              {/* Seller Profile Cards */}
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between" data-testid={`card-seller-${index}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Siraj Sheet Manufacturing...</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <span>Karachi, Sindh, Pakistan</span>
                        <img src="https://flagcdn.com/16x12/pk.png" alt="Pakistan flag" className="ml-1" />
                      </div>
                      <div className="text-sm text-gray-600">+92 324 2222193</div>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 text-xs">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3 h-3 ${star <= 4 ? 'fill-current' : 'stroke-current fill-transparent'}`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600">4.0 (365)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Quote Request Form */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4" data-testid="text-quote-form-title">Get the Best Price from</h3>
              <p className="text-gray-600 mb-6" data-testid="text-company-short-name">Siraj Sheet Manufacturing...</p>
              
              <form className="space-y-4" onSubmit={handleSubmitQuote}>
                <div>
                  <Textarea 
                    rows={6}
                    value={quoteMessage}
                    onChange={(e) => setQuoteMessage(e.target.value)}
                    className="resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    data-testid="textarea-quote-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3"
                  disabled={submitQuoteMutation.isPending}
                  data-testid="button-submit-query"
                >
                  {submitQuoteMutation.isPending ? "Submitting..." : "Submit Query"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
