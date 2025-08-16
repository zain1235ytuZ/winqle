import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navigation() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <nav className="flex space-x-8">
            <a href="#" className="text-white hover:text-purple-200 font-medium transition-colors duration-200" data-testid="ml-6 nav-home">Home</a>
            <a href="#" className="text-white hover:text-purple-200 font-medium transition-colors duration-200" data-testid="nav-products">Products</a>
            <a href="#" className="text-white hover:text-purple-200 font-medium transition-colors duration-200" data-testid="nav-contact">Contact</a>
            <a href="#" className="text-white hover:text-purple-200 font-medium transition-colors duration-200" data-testid="nav-reviews">Reviews</a>
          </nav>
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search Store" 
              className="w-64 pr-10 border-0 focus:ring-2 focus:ring-purple-300"
              data-testid="input-search-store"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
