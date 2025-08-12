import { Star } from "lucide-react";

export default function PromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 py-12 my-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <img 
            src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
            alt="Three young men in casual clothing" 
            className="w-1/3 h-48 object-cover rounded-lg"
            data-testid="img-promotional-banner"
          />
          <div className="flex-1 ml-12">
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