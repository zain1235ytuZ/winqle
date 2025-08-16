import { Search, MessageSquare, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WingleHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="ml-6 text-2xl font-bold text-white italic" data-testid="text-wingle-logo">
            winqle
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search Your Product Here..." 
                className="w-full pl-4 pr-12 py-3 text-gray-700 bg-white border-0 rounded-lg focus:ring-2 focus:ring-purple-300"
                data-testid="input-search-product"
              />
              <Button 
                className="absolute right-1 top-1 bottom-1 px-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg"
                data-testid="button-search"
              >
                SEARCH
              </Button>
            </div>
          </div>
          
         
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white" data-testid="link-simo-quotes">
              <div className="border-3 border-purple from-purple-600 to-purple-700 shadow-lg rounded-full flex items-center   justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-xs font-bold">S</span>
              </div>
              <div className="text-sm  cursor-pointer text-white">
                <div className="font-semibold">SIMO</div>
                <div className="text-xs">Get Quotes</div>
              </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-white" data-testid="link-messages">
              <MessageSquare className="h-5 w-5" />
              <div className="text-sm">
                <div>Messages</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-white" data-testid="link-wishlist">
              <Heart className="h-5 w-5" />
              <div className="text-sm">
                <div>Wishlist</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-white" data-testid="link-sign-in">
              <User className="h-5 w-5" />
              <div className="text-sm">
                <div>Sign In</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}