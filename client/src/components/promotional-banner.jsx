import { Star } from "lucide-react";

export default function PromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-4 w-full md:w-1/2">
            {/* First Image */}
            <div className="w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Casual clothing 1" 
                className="w-full h-48 object-cover rounded-lg"
                data-testid="img-promotional-banner-1"
              />
            </div>
            
            {/* Second Image */}
            <div className="w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Casual clothing 2" 
                className="w-full h-48 object-cover rounded-lg"
                data-testid="img-promotional-banner-2"
              />
            </div>
            
            {/* Third Image */}
            <div className="w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Casual clothing 3" 
                className="w-full h-48 object-cover rounded-lg"
                data-testid="img-promotional-banner-3"
              />
            </div>
          </div>
          
          <div className="flex-1 md:ml-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold text-white mb-6" data-testid="text-march-activity">March Activity Month</h2>
            <div className="space-y-3">
              <div className="flex items-center text-white">
                <Star className="h-5 w-5 text-pink-300 mr-3 fill-current" />
                <span className="font-medium">1 sample making reduce</span>
                <span className="text-pink-300 font-bold ml-2" data-testid="text-price-15">$15</span>
              </div>
              <div className="flex items-center text-white">
                <Star className="h-5 w-5 text-pink-300 mr-3 fill-current" />
                <span className="font-medium">2 sample making reduce</span>
                <span className="text-pink-300 font-bold ml-2" data-testid="text-price-30">$30</span>
              </div>
              <div className="flex items-center text-white">
                <Star className="h-5 w-5 text-pink-300 mr-3 fill-current" />
                <span className="font-medium">3 sample making reduce</span>
                <span className="text-pink-300 font-bold ml-2" data-testid="text-price-50">$50</span>
              </div>
              <div className="text-white">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-pink-300 mr-3 fill-current" />
                  <span className="font-bold text-pink-300">Free Neck, Tag and bag</span>
                </div>
                <div className="ml-6 mt-1 text-sm">
                  <div>Order total more than $2,000, free neck label provide</div>
                  <div>Order total more than $3,000, free tag provide</div>
                  <div>Order total more than $5,000, free bag provide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
