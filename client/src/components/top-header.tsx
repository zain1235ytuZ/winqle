import { Menu, HelpCircle, User } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2" data-testid="categories-dropdown">
            <Menu className="h-4 w-4 text-gray-500" />
            <span>All Categories</span>
            <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12">
              <path d="M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"/>
            </svg>
          </div>
          <span className="border-l border-gray-300 h-4"></span>
          <a href="#" className="hover:text-purple-600 transition-colors" data-testid="link-top-ranked">Top Ranked</a>
          <a href="#" className="hover:text-purple-600 transition-colors" data-testid="link-weekly-deals">Weekly Deals</a>
          <a href="#" className="hover:text-purple-600 transition-colors" data-testid="link-top-brands">Top Brands</a>
          <a href="#" className="hover:text-purple-600 transition-colors" data-testid="link-new-arrivals">New Arrivals</a>
          <a href="#" className="hover:text-purple-600 transition-colors" data-testid="link-leading-factories">Leading Factories</a>
          <a href="#" className="hover:text-purple-600 transition-colors" data-testid="link-trending">Trending</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-1 hover:text-purple-600 transition-colors" data-testid="link-help-desk">
            <HelpCircle className="h-4 w-4" />
            <span>Help Desk</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-purple-600 transition-colors" data-testid="link-become-seller">
            <User className="h-4 w-4" />
            <span>Become A Seller</span>
          </a>
        </div>
      </div>
    </div>
  );
}
