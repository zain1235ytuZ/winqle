import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4" data-testid="text-footer-company">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-about-us">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-contact">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-news">News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" data-testid="text-footer-services">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-manufacturing">Manufacturing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-custom-orders">Custom Orders</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-quality-control">Quality Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-shipping">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" data-testid="text-footer-support">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-help-center">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-terms">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200" data-testid="link-faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" data-testid="text-footer-connect">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="text-copyright">&copy; 2024 Siraj Sheet Manufacturing Co Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
